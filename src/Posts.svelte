<script>

import { Link } from "svelte-routing";

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
  per: 10,
}

let posts = [];
let postsContainer;
let loading;

async function nextPage(){
  params.page++;
  const newPosts = await getPosts();
  console.log(newPosts);
  posts = [...posts, ...newPosts]; //posts.push(newPosts);
};

async function getPosts() {
  loading = true;
  const url = `https://api.are.na/v2/channels/${channelslug}/contents?${getQueryString(params)}`
  const res = await fetch(url);
  const json = await res.json();
  console.log(res);
  loading = false;
  return json.contents;
}

function addPost(){
  // append to postsContainer
}

nextPage();

</script>

<style></style>

{#if loading}
  <Spinner />
{/if}
<div class="d-flex flex-column justify-content-center" bind:this={postsContainer} >
  {#each posts as post, index }
  <div class="pb-5">
    {#if post.class != "Image"}
      <h1 class="my-4"><Link to="/post/{post.id}">{@html post.title}</Link></h1>
    {/if}
    {#if post.class == "Image"}
      <PostImage {post} />
    {:else if post.class == "Text" }
      <PostMarkdown {post} />
    {:else if post.class == "Media" }
      <PostMedia {post} />
    {:else if post.class == "Link" }
      <PostLink {post} />
    {:else}
      {@html post.content_html}
    {/if}
      <hr>
    </div>
  {/each}
</div>
{#if !loading }
<Button on:click={nextPage}>
  load more
</Button>
{:else if loading && posts.length != 0 }
  <Spinner />
{/if}
