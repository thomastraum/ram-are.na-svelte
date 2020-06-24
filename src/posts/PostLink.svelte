<script>
  export let post;

  import {getQueryString} from '../helpers.js';

  let twitterEmbed  = getOembedTwitter();

  async function getOembedTwitter() {
    console.log(post.source.url);
    const url = `https://publish.twitter.com/oembed?${getQueryString({url:post.source.url})} `
    console.log(url);
    const res = await fetch(url);
    console.log(res);
    return res.html;
  }

</script>

<style>

.post-image {
  float: left;
}

.blockquote {

}

</style>
asdasdas

<!-- <div class="post my-5"> -->
{#await twitterEmbed}
  ...loading
{:then value}
  {value}
{/await}

<!-- </div> -->
