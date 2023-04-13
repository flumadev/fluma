<svelte:head>
    <title>Fluma // Agência digital</title>
</svelte:head>

<main class="bg-[url('/blob.svg')] bg-no-repeat bg-contain md:bg-cover bg-[center_top_8rem] sm:bg-top select-none">
    <header class="container h-[80svh] ">
        <div class="flex flex-col-reverse md:flex-row h-full items-center justify-center ">
            <div class="w-full">
                <h1 class="text-6xl md:text-9xl font-black mb-4">Fluma</h1>
                <p class="max-w-[420px]">Agência digital especializada em e-commerce,
                    desenvolvimento web e aplicativos.</p>
            </div>
            <div class="w-full md:h-full flex items-center md:justify-center">
                <img alt="Fluma" src="/logo.svg" class="w-[70px] md:w-[300px] mb-8 sm:mb-0"/>
            </div>
        </div>
    </header>
    <section class="min-h-screen ">
        <div class="container py-20">
            <h1 class="text-3xl text-center">Somos os melhores no que fazemos.</h1>
            <div class="flex flex-col gap-8 mt-20 max-w-[1000px] mx-auto sm:flex-row	">
                <a href="/technology"
                   class="max-w-1/2 w-full border border-white p-4 pb-8 rounded-md bg-white text-black  shadow-2xl shadow-white	">
                    <div class="w-[75px] h-[90px] p-4 bg-slate-950 flex rounded-lg mb-4 ">
                        <svg class="fill-current text-white" viewBox="0 0 640 512"
                             xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" role="img">
                            <path d="M415.2 21.06L255.2 501.1C252.4 509.4 243.3 513.1 234.9 511.2C226.6 508.4 222 499.3 224.8 490.9L384.8 10.94C387.6 2.554 396.7-1.977 405.1 .8175C413.4 3.612 417.1 12.67 415.2 21.06L415.2 21.06zM170.6 139.9L40.08 256L170.6 372C177.2 377.9 177.8 388 171.1 394.6C166.1 401.2 155.1 401.8 149.4 395.9L5.371 267.1C1.955 264.9 .0003 260.6 0 256C-.0003 251.4 1.954 247.1 5.37 244L149.4 116C155.1 110.2 166.1 110.8 171.1 117.4C177.8 123.1 177.2 134.1 170.6 139.9L170.6 139.9zM490.6 116L634.6 244C638 247.1 640 251.4 640 255.1C640 260.6 638 264.9 634.6 267.1L490.6 395.9C484 401.8 473.9 401.2 468 394.6C462.2 388 462.8 377.9 469.4 372L599.9 255.1L469.4 139.9C462.8 134.1 462.2 123.1 468 117.4C473.9 110.8 484 110.2 490.6 116H490.6z"></path>
                        </svg>
                    </div>
                    <h1 class="text-xl font-medium	">Tecnologia.</h1>
                    <p class="mt-8">Somos obcecados pela tecnologia. Sempre a certa para cada aplicação. É a nossa
                        base.</p>
                </a>
                <a href="/design"
                   class="max-w-1/2 w-full border border-white p-4 pb-8 rounded-md bg-white text-black  shadow-2xl shadow-white	">
                    <div class="w-[75px] h-[90px] p-4 bg-slate-950 flex rounded-lg mb-4 ">
                        <svg class="fill-current text-white" viewBox="0 0 512 512"
                             xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" role="img">
                            <path d="M298.3 182.2C285.5 188.5 271.2 192 255.1 192C240.8 192 226.5 188.5 213.7 182.2L142.2 307.4C176.1 325.6 214.8 336 255.1 336C344.8 336 422.4 287.8 463.9 215.1C468.3 208.3 478.1 205.7 485.8 210.2C493.4 214.6 496 224.4 491.6 232C444.6 313.3 356.7 368 255.1 368C209 368 164.9 356.1 126.3 335.2L29.89 503.9C25.51 511.6 15.73 514.3 8.06 509.9C.3882 505.5-2.277 495.7 2.107 488.1L99.15 318.2C67.07 295.6 40.13 266.1 20.4 232C15.97 224.4 18.59 214.6 26.24 210.2C33.88 205.7 43.67 208.3 48.1 215.1C65.01 245.2 87.91 270.6 115.1 290.3L187.6 163.4C170.5 146.1 159.1 122.3 159.1 96C159.1 42.98 202.1 0 255.1 0C309 0 352 42.98 352 96C352 122.3 341.5 146.1 324.4 163.4L372.7 248.1C377.1 255.7 374.5 265.5 366.8 269.9C359.1 274.3 349.3 271.6 344.1 263.9L298.3 182.2zM255.1 32C220.7 32 191.1 60.65 191.1 96C191.1 131.3 220.7 160 255.1 160C291.3 160 320 131.3 320 96C320 60.65 291.3 32 255.1 32zM408.1 375.9C404.6 368.3 407.2 358.5 414.9 354.1C422.6 349.7 432.4 352.4 436.7 360.1L509.9 488.1C514.3 495.7 511.6 505.5 503.9 509.9C496.3 514.3 486.5 511.6 482.1 503.9L408.1 375.9z"></path>
                        </svg>
                    </div>
                    <h1 class="text-xl font-medium	">Design.</h1>
                    <p class="mt-8">Até nossos desenvolvedores são designers. Vemos design em tudo o que fazemos.</p>
                </a>
                <a href="/service"
                   class="max-w-1/2 w-full border border-white p-4 pb-8 rounded-md bg-white text-black  shadow-2xl shadow-white	">
                    <div class="w-[75px] h-[90px] p-4 bg-slate-950 flex rounded-lg mb-4 ">
                        <svg class="fill-current text-white" viewBox="0 0 640 512"
                             xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" role="img">
                            <path d="M415.2 21.06L255.2 501.1C252.4 509.4 243.3 513.1 234.9 511.2C226.6 508.4 222 499.3 224.8 490.9L384.8 10.94C387.6 2.554 396.7-1.977 405.1 .8175C413.4 3.612 417.1 12.67 415.2 21.06L415.2 21.06zM170.6 139.9L40.08 256L170.6 372C177.2 377.9 177.8 388 171.1 394.6C166.1 401.2 155.1 401.8 149.4 395.9L5.371 267.1C1.955 264.9 .0003 260.6 0 256C-.0003 251.4 1.954 247.1 5.37 244L149.4 116C155.1 110.2 166.1 110.8 171.1 117.4C177.8 123.1 177.2 134.1 170.6 139.9L170.6 139.9zM490.6 116L634.6 244C638 247.1 640 251.4 640 255.1C640 260.6 638 264.9 634.6 267.1L490.6 395.9C484 401.8 473.9 401.2 468 394.6C462.2 388 462.8 377.9 469.4 372L599.9 255.1L469.4 139.9C462.8 134.1 462.2 123.1 468 117.4C473.9 110.8 484 110.2 490.6 116H490.6z"></path>
                        </svg>
                    </div>
                    <h1 class="text-xl font-medium	">Serviço.</h1>
                    <p class="mt-8">Nós fornecemos um serviço do qual nos orgulhamos. Não paramos até que tenhamos feito
                        o nosso melhor.</p>
                </a>
            </div>
        </div>
    </section>
</main>
