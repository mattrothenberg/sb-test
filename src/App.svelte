<script lang="ts"> 
  import Block from "./lib/block.svelte"
</script>

<template>
  <Block let:props={props}>
    {#if props && props.context}
      <div>
        <h1>{props.context.owner}/{props.context.repo}</h1>
        <p>{props.context.file}</p>
      </div>
    {:else}
      <div>Loading...</div>
    {/if}
  </Block>
</template>

<style>
</style>
