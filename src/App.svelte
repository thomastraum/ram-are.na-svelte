<script>

  import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
  } from 'sveltestrap';

  let isOpen = false;

  function handleUpdate(event) {
    isOpen = event.detail.isOpen;
  }

  import { Router, Route, Link } from "svelte-routing";
	import NavLinkRouter from "./components/NavLink.svelte";

  import About from "./About.svelte";
	import Posts from  './Posts.svelte';
	import Post  from  './Post.svelte';

	export let url = "";
</script>

<!-- <svelte:head>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
</svelte:head> -->

<style global type="text/scss" >
  @import './scss/custom.scss';
</style>

<main>
<Router url="{url}">
  <Navbar color="" light expand="md">
    <NavbarBrand class="font-weight-bold text-white" href="/">Random Access Memory</NavbarBrand>
    <NavbarToggler on:click={() => (isOpen = !isOpen)} />
    <Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
      <Nav class="ml-auto" navbar>
        <NavItem>
          <NavLink><Link to="about" class="text-white">About</Link></NavLink>
        </NavItem>
      </Nav>
    </Collapse>
  </Navbar>
</Router>
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
	  <div>
	    <Route path="/about" component="{About}" />
	    <Route path="/" component="{Posts}" />
			<Route path="/post/:id" component="{Post}" />
	  </div>
	</Router>

</main>
