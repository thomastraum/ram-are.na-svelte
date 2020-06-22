<script>

// addImagePost = (post) ->
// 	imageTemplate = getTemplate "#imageTemplate"
// 	$("img", imageTemplate).attr("src", post.image.original.url)
// 	return imageTemplate
export let post;
</script>

<style>

.post-image {
  /* float: left; */
}

.blockquote {

}

</style>

{@html post.content_html}
