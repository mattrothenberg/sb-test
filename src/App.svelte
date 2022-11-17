<script lang="ts">
  import Counter from './lib/Counter.svelte'
  import {onDestroy, onMount} from 'svelte'
  import { postMessage } from './lib/util';

  

  const onLoad = () => {
    postMessage("loaded", {}, { hash: window.location.hash });
  };

  let props;
  console.log('SVELTE', props)
  
  const handleMessage = (event: MessageEvent) => {
    console.log('SVELTE', event)
    const { data } = event;
    // if (origin != "*" && event.origin !== origin) return;
    if (data.type === "setProps") {
      props = data.props.props;
    }
  }

  onMount(() => {
    onLoad();    
    window.addEventListener('hashchange', onLoad);
    window.addEventListener("message", handleMessage);
  });

  onDestroy(() => {
    window.removeEventListener('hashchange', onLoad);
    window.removeEventListener("message", handleMessage);
  });

</script>

<main>
  {#if props}
    <h1>{props.context.owner}/{props.context.repo}</h1>
    <p>{props.context.file}</p>
  {:else}
    <div>Loading app...</div>
  {/if}
</main>

<style>
  main {
    padding: 16px;
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }
</style>
