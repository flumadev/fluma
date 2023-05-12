<script>
	export let data;
</script>

<main>
	<header class="section lg:pb-48">
		<div class="container">
			<h1 class="mt-20 max-w-screen-md text-5xl font-thin sm:text-2xl md:text-4xl">
				{data.document?.data.title[0].text}
			</h1>
			<div class="relative mt-16 flex max-md:flex-col">
				<img
					class="z-1 absolute left-1/2 w-1/2 -translate-x-1/2 translate-y-48 opacity-30 max-md:hidden lg:translate-y-64"
					src={data.document?.data.about_image_bg.url}
					alt={data.document?.data.about_image_bg.alt}
					width="1980"
					height="1380"
					sizes="(min-width: 2560px) 2560px, 100vw"
					draggable="false"
					loading="eager"
				/>

				<div class="relative z-20 space-y-7 max-md:mb-8 md:mr-16 md:w-1/3">
					<div class="title md:text-xl"><h2>{data.document?.data.subtitle[0].text}</h2></div>
					<p class="">{data.document?.data.about[0].text}</p>
				</div>

				<img
					class="relative z-20 md:w-2/3"
					src={data.document?.data.about_image.url}
					alt={data.document?.data.about_image.alt}
					width="2868"
					height="2012"
					sizes="(max-width: 640px) 100vw, 50vw"
					draggable="false"
					loading="eager"
				/>
			</div>
		</div>
	</header>
	<section class="fifty-fifty-grid section relative overflow-hidden py-32">
		<div class="bg-m-900 absolute inset-0 -z-20" />
		<div class="container">
			<h2 class="title mb-8 text-center text-lg sm:text-2xl md:mb-16 lg:mb-24">Nossos meios</h2>
			<div class="md:space-y-12 lg:space-y-24">
				{#each data.document?.data.ways as way, index}
					<div class="relative grid items-center gap-y-8 overflow-visible py-16 md:grid-cols-2">
						<div
							class="glow-brass glow-motion blur-large absolute -left-8 top-1/3 -z-10 h-[22rem] w-[22rem] opacity-30"
							style="animation-delay: 0s"
							aria-hidden="true"
						/>
						<div
							class="glow-blue glow-motion blur-large bg-glow-blue absolute left-1/3 top-1/3 -z-10 h-[22rem] w-[22rem] opacity-10"
							style="animation-delay: 1s"
							aria-hidden="true"
						/>
						<div
							class="glow-red glow-motion blur-large absolute -top-4 left-12 -z-10 h-64 w-64 opacity-20"
							style="animation-delay: 2s"
							aria-hidden="true"
						/>

						{#if index % 2 === 0}
							<img
								class="object-cover"
								src={way.image.url}
								alt={way.image.alt}
								width="2072"
								height="1544"
								sizes="(max-width: 640px) 100vw, 50vw"
								draggable="true"
								loading="lazy"
							/>
						{/if}
						<div class="max-w-sm md:ml-16">
							<h3 class="title mb-6 text-base md:text-lg lg:text-xl">{way.way_title[0].text}</h3>
							<p style="max-width: 350px" class="text-gray-400">{way.way_text[0].text}</p>
						</div>
						{#if index % 2 === 1}
							<img
								class="object-cover"
								src={way.image.url}
								alt={way.image.alt}
								width="2072"
								height="1544"
								sizes="(max-width: 640px) 100vw, 50vw"
								draggable="true"
								loading="lazy"
							/>
						{/if}
					</div>
				{/each}
			</div>
		</div>
	</section>
</main>
