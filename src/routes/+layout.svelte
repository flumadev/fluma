<script>
	import '../app.css';
	import Footer from '../components/Footer.svelte';
	import Nav from '../components/Nav.svelte';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	inject({ mode: dev ? 'development' : 'production' });
</script>

<svelte:head>
	<title>Fluma // Agência digital</title>
	<meta
		name="description"
		content="Agência digital especializada em e-commerce, desenvolvimento web e aplicativos."
	/>

	<meta property="og:url" content="https://fluma.dev/" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Fluma // Agência digital" />
	<meta
		property="og:description"
		content="Agência digital especializada em e-commerce, desenvolvimento web e aplicativos."
	/>
	<meta property="og:image" content="https://fluma.dev/og.png" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content="fluma.dev" />
	<meta property="twitter:url" content="https://fluma.dev/" />
	<meta name="twitter:title" content="Fluma // Agência digital" />
	<meta
		name="twitter:description"
		content="Agência digital especializada em e-commerce, desenvolvimento web e aplicativos."
	/>
	<meta name="twitter:image" content="https://fluma.dev/og.png" />

	<meta
		name="keywords"
		content="sistemas,sites,aplicativos,software,desenvolvimento de software,desenvolvimento de aplicativos,desenvolvimento de sites,agência de desenvolvimento,criação de sites,empresa de desenvolvimento de sites "
	/>
</svelte:head>

<Nav />
<slot />
<Footer />
