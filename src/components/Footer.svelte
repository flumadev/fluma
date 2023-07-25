<script>
	import Contact from './Contact.svelte';
</script>

<footer class="section z-0 mt-2 pb-16 sm:ml-12 md:ml-16">
	<div
		class="container flex flex-col items-start gap-8 sm:items-center sm:justify-center sm:gap-16"
	>
		<h1 class="text-3xl">Entre em contato e venha para o futuro.</h1>
		<Contact />
	</div>

	<div class="mt-32 flex min-h-[200px] flex-col items-center justify-center">
		<img alt="Fluma" class="w-8" width="32" height="32" src="/logo.svg" />
		<p class="mt-8 text-sm font-thin">&copy; Fluma Soluções Digitais</p>
		<p class="mt-8 text-sm font-thin">45.381.189/0001-48</p>
	</div>
</footer>
