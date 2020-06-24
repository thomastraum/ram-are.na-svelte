<script>

import {getQueryString} from '../helpers.js';
import { onMount } from 'svelte';

export let post;
let tweetDiv;

const initializeTwittr = () => {
  // "https://twitter.com/hundredrabbits/status/1270006618118209536"
  const id = post.source.url.split('/').pop();
  twttr.widgets.createTweet(
    id,
    tweetDiv,
    {
      // theme: "dark"
    }
  );
}

</script>

<svelte:head>
	<script src="https://platform.twitter.com/widgets.js" on:load={initializeTwittr} ></script>
</svelte:head>

<style>
  .post-image {
    float: left;
  }
  .blockquote {

  }
</style>
<div bind:this={tweetDiv}></div>
