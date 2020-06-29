<script>

  import { Router, Route } from "svelte-routing";
	import NavLink from "./components/NavLink.svelte";

  import About from "./About.svelte";
	import Posts from  './Posts.svelte';
	import Post from  './Post.svelte';

	export let url = "";
</script>

<style>

</style>

<main>
	<header class="intro-header h-100" >
	    <div class="container">
	        <div class="row">
	            <div class="col-md-12">
	                <div class="site-heading p-5 m-5 mx-auto">
										<h1 class="title" >Random Access Memory</h1>
	                </div>
	            </div>
	        </div>
	    </div>
	</header>

	<Router url="{url}">
	  <nav>
	    <NavLink to="/">Home</NavLink>
	    <NavLink to="about">About</NavLink>
	  </nav>
	  <div>
	    <Route path="/about" component="{About}" />
	    <Route path="/" component="{Posts}" />
			<Route path="/post/:id" component="{Post}" />
	  </div>
	</Router>

</main>
