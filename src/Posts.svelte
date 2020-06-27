<script>

import { Spinner } from 'sveltestrap';
import { Button } from "sveltestrap";

import {getQueryString} from './helpers.js';
import PostImage        from './posts/PostImage.svelte';
import PostMarkdown     from './posts/PostMarkdown.svelte';
import PostMedia        from './posts/PostMedia.svelte';
import PostLink         from './posts/PostLink.svelte';

// const channelslug = "random-access-memory";
const channelslug = "blog-eqyzzcqjsfe";

const params = {
  page: 0,
  direction: "desc",
  sort: "position",
  per: 2,
}

let posts = [];
let postsContainer;

async function nextPage(){
  params.page++;
  const newPosts = await getPosts();
  posts = [...posts, ...newPosts]; //posts.push(newPosts);
};

async function getPosts() {
  const url = `https://api.are.na/v2/channels/${channelslug}/contents?${getQueryString(params)}`
  const res = await fetch(url);
  const json = await res.json();
  // console.log(posts)
  return json.contents;
}

function addPost(){
  // append to postsContainer
}

nextPage();

</script>

<style></style>

<div class="d-flex flex-column justify-content-center" bind:this={postsContainer}>
  {#each posts as post, index }
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
    </div>
  {/each}
</div>
<Button on:click={nextPage}>
  load more
</Button>
