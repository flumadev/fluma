<script>
    export let data;
  </script>

<main >
    <header class="section lg:pb-48">
		<div class="container">
			<h1 class="mt-20 max-w-screen-md text-5xl font-thin sm:text-2xl md:text-4xl">
				{data.document?.data.title[0].text}
			</h1>
			<div class="relative mt-16 flex max-md:flex-col">
				<img
					class="z-1 absolute left-1/2 w-1/2 -translate-x-1/2 translate-y-48 opacity-30 max-md:hidden lg:translate-y-64"
					src={data.document?.data.image_bg.url}
					alt={data.document?.data.image_bg.alt}
					width="1980"
					height="1380"
					sizes="(min-width: 2560px) 2560px, 100vw"
					draggable="false"
					loading="eager"
				/>

				<div class="relative z-20 space-y-7 max-md:mb-8 md:mr-16 md:w-1/3">
					<div class="title md:text-xl"><h2>{data.document?.data.subtitle[0].text}</h2></div>
				</div>

				<img
					class="relative z-20 md:w-2/3"
					src={data.document?.data.image.url}
					alt={data.document?.data.image.alt}
					width="2868"
					height="2012"
					sizes="(max-width: 640px) 100vw, 50vw"
					draggable="false"
					loading="eager"
				/>
			</div>
		</div>
	</header>
    <section class="list-grid section relative overflow-hidden ">
        <div class="glow-brass blur-large glow-motion top-56 -right-20 w-96 h-96 opacity-20 -z-10"
             aria-hidden="true"></div>
        <div class="glow-brass blur-large glow-motion top-96 left-36 w-[24rem] h-[24rem] -z-10 opacity-20"
             aria-hidden="true" style="animation-delay: 2s;"></div>
        <div class="glow-brass blur-large glow-motion -top-20 -left-44 w-[34rem] h-[34rem] -z-10 opacity-30"
             aria-hidden="true" style="animation-delay: 4s;"></div>
        <div class="container max-w-screen-lg"><h2
                class="title text-lg sm:text-2xl text-center mb-12 md:mb-20 lg:mb-36">White-glove experience.</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-x-36 lg:gap-y-28">
                {#each data.document?.data.experience as experience }
                <div class="">
                    {#each experience.icon as icon}
                        {@html icon.text}
                    {/each}
                    <h3 class="title mb-4">{experience.xp_title[0].text}</h3>
                    <p style="max-width: 340px" class="relative z-10 text-gray-400">
                        {#each experience.text as text}
                            {text.text}   
                        {/each}
                    </p>
                </div>
                {/each}
            </div>
        </div>
    </section>
</main>