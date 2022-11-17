<script lang="ts">
  let count: number = 0
  const increment = () => {
    window.parent.postMessage("loaded" , "*");
    count += 1
  }
</script>

<button on:click={increment}>
  count is {count}
</button>
