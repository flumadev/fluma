<script>
    export let data;
</script>

<main>
    <header class="section relative lg:pb-48">
        <div class="container"><h1 class="title text-lg sm:text-2xl md:text-4xl md:font-light max-w-screen-md mb-20">{data.document?.data.title[0].text}</h1>
            <div class="flex max-md:flex-col relative">
                <div class="space-y-7 md:w-1/3 relative z-20 md:mr-16 max-md:mb-8">
                    <div class="title md:text-xl"><h2>{data.document?.data.subtitle[0].text}</h2></div>
                    <p class="">
                        {#each data.document?.data.about as about }
                            {about.text}
                        {/each}
                    </p>
                </div>
                <img class="md:w-2/3 relative z-20"
                    alt={data.document?.data.banner.alt}
                     src={data.document?.data.banner.url}
                     width="515" height="298" sizes="(max-width: 640px) 100vw, 50vw"
                     draggable="false" loading="eager"></div>
        </div>
    </header>
    <section class="list-grid section relative overflow-hidden ">
        <div class="glow-brass blur-large glow-motion top-56 -right-20 w-96 h-96 opacity-20 -z-10"
             aria-hidden="true"></div>
        <div class="glow-brass blur-large glow-motion top-96 left-36 w-[24rem] h-[24rem] -z-10 opacity-20"
             aria-hidden="true" style="animation-delay: 2s;"></div>
        <div class="glow-brass blur-large glow-motion -top-20 -left-44 w-[34rem] h-[34rem] -z-10 opacity-30"
             aria-hidden="true" style="animation-delay: 4s;"></div>
        <div class="container max-w-screen-lg">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-x-36 lg:gap-y-28">
                {#each data.document?.data.more as more }
                    <div class="">
                        {#each more.icon as icon}
                            {@html icon.text}
                        {/each}
                    <h3 class="title mb-4">{more.more_title[0].text}</h3>
                    <p style="max-width: 340px" class="relative z-10 text-gray-400">
                        {#each more.more_about as about }
                            {about.text}
                        {/each}
                    </p>
                    </div>
                {/each}
        </div>
    </section>
    <section class="list-grid section relative overflow-hidden ">
        <div class="glow-brass blur-large glow-motion top-56 -right-20 w-96 h-96 opacity-20 -z-10"
             aria-hidden="true"></div>
        <div class="glow-brass blur-large glow-motion top-96 left-36 w-[24rem] h-[24rem] -z-10 opacity-20"
             aria-hidden="true" style="animation-delay: 2s;"></div>

        <div class="container max-w-screen-lg"><h2
                class="title text-lg sm:text-2xl text-center mb-12 md:mb-20 lg:mb-36">{data.document?.data.details_title[0].text}</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-x-36 lg:gap-y-28">
                {#each data.document?.data.details as details }
                    <div class="">
                        {#each details.icon as icon }
                            {@html icon.text}
                        {/each}
                        <h3 class="title mb-4">{details.details_item_title[0].text}</h3>
                        <p style="max-width: 340px" class="relative z-10 text-gray-400">
                            {#each details.details_text as details_text }
                                {details_text.text}
                            {/each}
                        </p>
                    </div>
                {/each}
            </div>
        </div>
    </section>
</main>