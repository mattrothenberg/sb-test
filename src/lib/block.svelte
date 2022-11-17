

<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import { postMessage } from "./util";

  type FileBlockProps = {
    context: {
      owner: string;
      repo: string;
      file: string;
    }
  }

	let props: FileBlockProps | null = null;

  const onMessage = (event: MessageEvent) => {
    const { data } = event;
    if (data.type === "setProps") {
      props = {
        ...props,
        ...data.props.props,
      };
    }
  };

  onMount(() => {
    window.addEventListener("message", onMessage);
    postMessage("loaded", {}, { hash: window.location.hash });
  });

  onDestroy(() => {
    window.removeEventListener("message", onMessage);
  })
</script>

<div>
	<slot props={props}></slot>
</div>