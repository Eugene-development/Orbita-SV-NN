<script>
	import Header from '$lib/header/index.svelte';
	import Footer from '$lib/footer/index.svelte'
	import '../app.css';

</script>

<Header />

	<main>
		<slot />
	</main>

<Footer />

