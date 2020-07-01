<script>

import { Spinner } from 'sveltestrap';
import { Button } from "sveltestrap";

import PostImage        from './posts/PostImage.svelte';
import PostMarkdown     from './posts/PostMarkdown.svelte';
import PostMedia        from './posts/PostMedia.svelte';
import PostLink         from './posts/PostLink.svelte';

// export let params;
export let id;

let post = getPost(id);
let postContainer;

async function getPost(id) {
  const url = `https://api.are.na/v2/blocks/${id}`
  const res = await fetch(url);
  const json = await res.json();
  return json;
}

// console.log("post", params, id);

</script>

<style></style>

  <div class="d-flex flex-column justify-content-center" bind:this={postContainer}>
    <div class="pb-5">
    {#await post}
      <Spinner />
    {:then post}
      {#if post.class == "Image"}
        <PostImage {post} />
      {:else if post.class == "Text" }
        <h1 class="my-4">{@html post.title}</h1>
        <hr />
        <PostMarkdown {post} />
      {:else if post.class == "Media" }
        <h1 class="my-4">{@html post.title}</h1>
        <hr />
        <PostMedia {post} />
      {:else if post.class == "Link" }
        <h1 class="my-4">{@html post.title}</h1>
        <hr />
        <PostLink {post} />
      {:else}
        <h1 class="my-4">{@html post.title}</h1>
        <hr />
        {@html post.title}
        {@html post.content_html}
      {/if}
    {/await}
    </div>
  </div>
