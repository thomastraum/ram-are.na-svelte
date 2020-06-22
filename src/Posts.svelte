<script>

import { Spinner } from 'sveltestrap';

import {getQueryString} from './helpers.js';
import PostImage        from './posts/PostImage.svelte';
import PostMarkdown     from './posts/PostMarkdown.svelte';
import PostMedia        from './posts/PostMedia.svelte';

// const channelslug = "random-access-memory";
const channelslug = "blog-eqyzzcqjsfe";

const params = {
  page: 0,
  direction: "desc",
  sort: "position",
  per: 20,
}

let posts = getPosts();

async function getPosts() {
  const url = `https://api.are.na/v2/channels/${channelslug}/contents?${getQueryString(params)}`
  const res = await fetch(url)
  const posts = await res.json();
  console.log(posts)
  return posts;
}

</script>

<style></style>

  {#await posts}
    <Spinner />
  {:then data}
  <div class="d-flex flex-column justify-content-center">
    {#each data.contents as post, index }
    <div class="pb-5 border-1">
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
      {:else}
        <h1 class="my-4">{@html post.title}</h1>
        <hr />
        {@html post.title}
        {@html post.content_html}
      {/if}
      </div>
    {/each}
  </div>
  {/await}
