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
				<div class="relative z-20 space-y-7 max-md:mb-8 md:mr-16 md:w-1/3">
					<div class="title md:text-xl"><h2>{data.document?.data.subtitle[0].text}</h2></div>
					<p class="">{data.document?.data.about[0].text}</p>
				</div>

                <img
					class="z-20 w-1/2 md:w-2/3"
					src={data.document?.data.image.url}
					alt={data.document?.data.image.alt}
					width="1980"
					height="1380"
					sizes="(min-width: 2560px) 2560px, 100vw"
					draggable="false"
					loading="eager"
				/>

			</div>
		</div>
	</header>
    
    <section class="list-grid section relative overflow-hidden ">
        <div class="container max-w-screen-lg pb-8">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-x-36 lg:gap-y-28">
                {#each data.document?.data.what_we_do as wwd }
                <div class="">
                    <img class="fill-current h-12 w-12 mb-8 text-gray-400 invert" width="48" height="48" src={wwd.icon.url} alt={wwd.icon.alt}>
                    <h3 class="title mb-4">{wwd.wwd_title[0].text}</h3>
                    <p class="relative z-10 text-gray-400" style="max-width: 340px">
                        {#each wwd.description as description}
                            {description.text}
                        {/each}
                    </p> <span
                        class="font-mono text-white mt-4 block text-sm">{wwd.tags[0].text}</span>
                    <a href={new URL(wwd.what_we_do_page.url).pathname} class="button button-primary mt-8">{wwd.link_title[0].text}</a></div>
                {/each}
            </div>
        </div>
    </section>

    <section class="list-grid section relative overflow-hidden">
        <div class="glow-brass blur-large glow-motion top-56 -right-20 w-96 h-96 opacity-20 -z-10"
        ></div>
        <div class="glow-brass blur-large glow-motion top-96 left-36 w-[24rem] h-[24rem] -z-10 opacity-20"
             style="animation-delay: 2s;"></div>
        <div class="glow-brass blur-large glow-motion -top-20 -left-44 w-[34rem] h-[34rem] -z-10 opacity-30"
             style="animation-delay: 4s;"></div>
        <div class="container max-w-screen-lg">
            <h2 class="title text-lg sm:text-4xl text-center mt-8 mb-12 md:mb-20 lg:mb-36">
                Nosso processo.
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-x-36 lg:gap-y-28">
                {#each data.document?.data.process as process}
                <div>
                    <img class="fill-current h-12 w-12 mb-8 text-gray-400 invert filter" src={process.icon.url} width="48" height="48" alt={process.icon.alt}>
                    <h3 class="title mb-4">{process.process_title[0].text}</h3>
                    <p style="max-width: 340px" class="relative z-10 text-gray-400">
                        {#each process.process_about as about}
                            {about.text}
                        {/each}
                    </p>
                </div>
                {/each}
            </div>
        </div>
    </section>
</main>