<script>
  import { tick } from 'svelte';
  const INTERVAL_OPTIONS = {
    '15m': '15.m4a',
    '20m': '20.m4a',
    '30m': '30.m4a',
    '40m': '40.m4a',
    '30 🗣️': 'guided-30.m4a'
  };
  const LOCALDB_KEY = 'zazen-duration';
  const localDuration = localStorage.getItem(LOCALDB_KEY);
  let selectedDuration = localDuration || '30m';
  let playing = false;
  $: audioFile = INTERVAL_OPTIONS[selectedDuration];
  $: localStorage.setItem(LOCALDB_KEY, selectedDuration);

  let audioElement;
  let circleElement;

  async function start() {
    playing = true
    await tick();
    audioElement.pause();
    audioElement.currentTime = 0;
    audioElement.play();
  }

  async function end() {
    audioElement.pause();
    audioElement.currentTime = 0;
    updateTime();
    await tick();
    playing = false
  }

  function toggleTimer() {
    if (!playing) {
      start();
    } else {
      end();
    }
  }

  function updateTime() {
    if (audioElement.paused) {
      circleElement.setAttribute('stroke-dashoffset', 100);
      return;
    }
    circleElement.setAttribute('stroke-dashoffset', 100 - (audioElement.currentTime * 100) / audioElement.duration);
  }
</script>

<main>
  <div class="progress" on:click={toggleTimer}>
    <div class="progress__number">
      {!playing ? 'START' : 'STOP'}
    </div>
    <div class="progress__fill">
      <svg class="progress__svg" viewBox="0 0 40 40">
        <circle r="15.9154943092" cy="20" cx="20" />
        <circle
          bind:this={circleElement}
          r="15.9154943092"
          cy="20"
          cx="20"
          stroke-dashoffset="100"
          transform="rotate(-90,20,20)"
        />
      </svg>
    </div>
  </div>

  <aside>
    <span class="label">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
        ><path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M9 2h6m-3 8v4m0 8a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"
        /></svg
      >
    </span>
    <select class="interval-select" bind:value={selectedDuration} disabled={playing}>
      {#each Object.keys(INTERVAL_OPTIONS) as interval}
        <option value={interval}>
          {interval}
        </option>
      {/each}
    </select>
  </aside>

  {#if playing}
    <audio src={audioFile} bind:this={audioElement} on:timeupdate={updateTime} on:ended={end} />
  {/if}
</main>
<footer>
  <p>sounds by sfzc.org</p>
  <p>ai voice by narakeet.com</p>
  <p>tomasmcm – 2022</p>
</footer>

<style>
  main {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    position: relative;
    padding-top: 2rem;
  }
  @media (orientation: landscape) {
    main {
      flex-direction: row;
      justify-content: flex-end;
      padding-top: 0rem;
      padding-left: 2rem;
    }
  }
  footer {
    opacity: 0.4;
    padding: 2rem 0;
    font-size: 0.75rem;
  }
  aside {
    width: 100%;
    padding: 2rem;
    padding-top: 0;
    color: rgba(255, 255, 255, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (orientation: landscape) {
    aside {
      width: auto;
      padding: 2rem;
      padding-left: 0;
    }
  }
  .label {
    margin-right: 0.5rem;
    display: inline-block;
  }
  .label svg {
    width: 2rem;
    height: 2rem;
    display: inline-block;
    vertical-align: middle;
  }

  .progress {
    display: block;
    position: relative;
    width: 100%;
    aspect-ratio: 1 / 1;
    margin: auto;
    overflow: hidden;
  }
  @media (orientation: landscape) {
    .progress {
      height: 100vh;
      width: auto;
      flex-shrink: 0;
      margin: 0 auto;
    }
  }
  .progress__svg {
    max-width: 108%;
    width: 108%;
    height: 108%;
    margin-left: -4%;
    margin-top: -4%;
  }
  @media (orientation: landscape) {
    .progress__svg {
      max-width: 108vh;
      max-height: 108vh;
      width: 108vh;
      height: 108vh;
      margin-left: -4vh;
      margin-top: -4vh;
    }
  }
  .progress__fill circle {
    fill: none;
    stroke-width: 2px;
    stroke: rgba(255, 255, 255, 0.1);
  }
  .progress__fill circle:nth-child(2) {
    stroke: white;
    stroke-dasharray: 100;
    stroke-linecap: round;
    transition: all ease-in-out 0.4s;
  }
  .progress__number {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: block;
    color: rgba(255, 255, 255, 0.4);
    font-size: 1.5rem;
    font-weight: 500;
    text-align: center;
  }

  .interval-select {
    background: transparent;
    color: rgba(255, 255, 255, 0.4);
    border: none;
    padding: 0.75rem 0.25rem;
    padding-bottom: 0.5rem;
    font-weight: 500;
    font-size: 1.5rem;
  }
</style>
