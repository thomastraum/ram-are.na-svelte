<script>

import { getQueryString}  from '../helpers.js';
import { onMount } from 'svelte';

export let post;

</script>

<svelte:head>
</svelte:head>

<style>
  .post-image {
    float: left;
  }
  .blockquote {

  }
</style>

<div>
{@html post.description_html}
<a href="{post.source.url}">{post.source.title}</a>
</div>
