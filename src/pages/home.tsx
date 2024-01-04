import { Hono } from "hono";
import { Nav } from "../components/nav";
import { Footer } from "../components/footer";

const home = new Hono();


home.get("/", (c) => {
    return c.render(
        <>
            <Nav />
            <section class='max-sm:h-[55vh] h-[70vh] gap-4 flex flex-col justify-center items-center align-middle relative z-0 bg-purple-500 overflow-hidden'>
                <div class="absolute left-0 top-0 opacity-20 md:opacity-50">
                    <svg width="761" height="722" viewBox="0 0 761 722" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M142.993 272.013C149.046 194.825 214.237 131.578 284.534 99.1285C350.653 68.6076 422.742 96.9198 494.419 109.794C579.5 125.075 699.463 100.518 733.845 179.829C768.756 260.361 663.303 329.595 623.65 407.901C596.727 461.069 592.249 527.462 541.77 559.14C489.506 591.938 421.444 593.538 364.089 570.788C311.262 549.834 291.114 491.99 257.307 446.306C214.343 388.247 137.346 344.02 142.993 272.013Z" stroke="white">
                        </path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M101.993 307.013C108.046 229.825 173.237 166.578 243.534 134.129C309.653 103.608 381.742 131.92 453.419 144.794C538.5 160.075 658.463 135.518 692.845 214.829C727.756 295.361 622.303 364.595 582.65 442.901C555.727 496.069 551.249 562.462 500.77 594.14C448.506 626.938 380.444 628.538 323.089 605.788C270.262 584.834 250.114 526.99 216.307 481.306C173.343 423.247 96.3461 379.02 101.993 307.013Z" stroke="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M83.9931 330.013C90.0464 252.825 155.237 189.578 225.534 157.129C291.653 126.608 363.742 154.92 435.419 167.794C520.5 183.075 640.463 158.518 674.845 237.829C709.756 318.361 604.303 387.595 564.65 465.901C537.727 519.069 533.249 585.462 482.77 617.14C430.506 649.938 362.444 651.538 305.089 628.788C252.262 607.834 232.114 549.99 198.307 504.306C155.343 446.247 78.3461 402.02 83.9931 330.013Z" stroke="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M64.9931 349.013C71.0464 271.825 136.237 208.578 206.534 176.129C272.653 145.608 344.742 173.92 416.419 186.794C501.5 202.075 621.463 177.518 655.845 256.829C690.756 337.361 585.303 406.595 545.65 484.901C518.727 538.069 514.249 604.462 463.77 636.14C411.506 668.938 343.444 670.538 286.089 647.788C233.262 626.834 213.114 568.99 179.307 523.306C136.343 465.247 59.3461 421.02 64.9931 349.013Z" stroke="white">
                        </path>
                    </svg>
                </div>
                <div class="absolute rotate-90 right-0 top-0 opacity-20 md:opacity-50">
                    <svg width="761" height="722" viewBox="0 0 761 722" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M142.993 272.013C149.046 194.825 214.237 131.578 284.534 99.1285C350.653 68.6076 422.742 96.9198 494.419 109.794C579.5 125.075 699.463 100.518 733.845 179.829C768.756 260.361 663.303 329.595 623.65 407.901C596.727 461.069 592.249 527.462 541.77 559.14C489.506 591.938 421.444 593.538 364.089 570.788C311.262 549.834 291.114 491.99 257.307 446.306C214.343 388.247 137.346 344.02 142.993 272.013Z" stroke="white">
                        </path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M101.993 307.013C108.046 229.825 173.237 166.578 243.534 134.129C309.653 103.608 381.742 131.92 453.419 144.794C538.5 160.075 658.463 135.518 692.845 214.829C727.756 295.361 622.303 364.595 582.65 442.901C555.727 496.069 551.249 562.462 500.77 594.14C448.506 626.938 380.444 628.538 323.089 605.788C270.262 584.834 250.114 526.99 216.307 481.306C173.343 423.247 96.3461 379.02 101.993 307.013Z" stroke="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M83.9931 330.013C90.0464 252.825 155.237 189.578 225.534 157.129C291.653 126.608 363.742 154.92 435.419 167.794C520.5 183.075 640.463 158.518 674.845 237.829C709.756 318.361 604.303 387.595 564.65 465.901C537.727 519.069 533.249 585.462 482.77 617.14C430.506 649.938 362.444 651.538 305.089 628.788C252.262 607.834 232.114 549.99 198.307 504.306C155.343 446.247 78.3461 402.02 83.9931 330.013Z" stroke="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M64.9931 349.013C71.0464 271.825 136.237 208.578 206.534 176.129C272.653 145.608 344.742 173.92 416.419 186.794C501.5 202.075 621.463 177.518 655.845 256.829C690.756 337.361 585.303 406.595 545.65 484.901C518.727 538.069 514.249 604.462 463.77 636.14C411.506 668.938 343.444 670.538 286.089 647.788C233.262 626.834 213.114 568.99 179.307 523.306C136.343 465.247 59.3461 421.02 64.9931 349.013Z" stroke="white">
                        </path>
                    </svg>
                </div>
                <div class="max-w-screen-lg mx-auto z-10 max-sm:px-4">
                    <h2 class='text-2xl text-start font-roboto text-white'>
                        <span class="font-sans font-black text-start md:text-7xl text-4xl ">Agência digital </span>
                        <br /> especializada em desenvolvimento web,<br class="max-sm:hidden" /> e-commerce e aplicativos.
                    </h2>
                </div>
            </section>
            <section class="py-12 max-sm:px-4 min-h-[60vh] ">
                <h1 class="text-3xl font-black text-center">Somos os melhores no que fazermos.</h1>
                <div class="max-sm:mt-5 flex flex-wrap items-center justify-center gap-2 rounded-[200px] sm:p-6 xl:rounded-full md:grid grid-cols-3 grid-rows-1">
                    <a href="/design" class="group w-full">
                        <div class="bg-white border-2 border-black p-8 rounded-3xl shadow group-hover:border-purple-500 group-hover:text-purple-500">
                            <div class="inline-flex items-center justify-between w-full font-semibold">
                                <h2 class="text-3xl lg:text-4xl justify-between tracking-tight">
                                    Design
                                </h2>
                                <svg class="w-12 h-12 lg:h-20 lg:w-16 rounded-full shadow-small group-hover:fill-purple-500" viewBox="0 0 512 512" focusable="false" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M298.3 182.2C285.5 188.5 271.2 192 255.1 192C240.8 192 226.5 188.5 213.7 182.2L142.2 307.4C176.1 325.6 214.8 336 255.1 336C344.8 336 422.4 287.8 463.9 215.1C468.3 208.3 478.1 205.7 485.8 210.2C493.4 214.6 496 224.4 491.6 232C444.6 313.3 356.7 368 255.1 368C209 368 164.9 356.1 126.3 335.2L29.89 503.9C25.51 511.6 15.73 514.3 8.06 509.9C.3882 505.5-2.277 495.7 2.107 488.1L99.15 318.2C67.07 295.6 40.13 266.1 20.4 232C15.97 224.4 18.59 214.6 26.24 210.2C33.88 205.7 43.67 208.3 48.1 215.1C65.01 245.2 87.91 270.6 115.1 290.3L187.6 163.4C170.5 146.1 159.1 122.3 159.1 96C159.1 42.98 202.1 0 255.1 0C309 0 352 42.98 352 96C352 122.3 341.5 146.1 324.4 163.4L372.7 248.1C377.1 255.7 374.5 265.5 366.8 269.9C359.1 274.3 349.3 271.6 344.1 263.9L298.3 182.2zM255.1 32C220.7 32 191.1 60.65 191.1 96C191.1 131.3 220.7 160 255.1 160C291.3 160 320 131.3 320 96C320 60.65 291.3 32 255.1 32zM408.1 375.9C404.6 368.3 407.2 358.5 414.9 354.1C422.6 349.7 432.4 352.4 436.7 360.1L509.9 488.1C514.3 495.7 511.6 505.5 503.9 509.9C496.3 514.3 486.5 511.6 482.1 503.9L408.1 375.9z"></path></svg>
                            </div>
                            <p class="lg:text-xl text-sm tracking-wide mt-8">
                                Até nossos desenvolvedores são designers. <br />
                                Vemos design em tudo o que fazemos
                            </p>
                        </div>
                    </a>
                    <a href="/" class="group w-full">
                        <div class="bg-white border-2 border-black p-8 rounded-3xl shadow group-hover:border-purple-500 group-hover:text-purple-500">
                            <div class="inline-flex items-center justify-between w-full font-semibold">
                                <h2 class="text-3xl lg:text-4xl justify-between tracking-tight">
                                    Tecnologia
                                </h2>
                                <svg class="w-12 h-12 lg:h-20 lg:w-16 rounded-full shadow-small group-hover:fill-purple-500" viewBox="0 0 640 512" focusable="false" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M415.2 21.06L255.2 501.1C252.4 509.4 243.3 513.1 234.9 511.2C226.6 508.4 222 499.3 224.8 490.9L384.8 10.94C387.6 2.554 396.7-1.977 405.1 .8175C413.4 3.612 417.1 12.67 415.2 21.06L415.2 21.06zM170.6 139.9L40.08 256L170.6 372C177.2 377.9 177.8 388 171.1 394.6C166.1 401.2 155.1 401.8 149.4 395.9L5.371 267.1C1.955 264.9 .0003 260.6 0 256C-.0003 251.4 1.954 247.1 5.37 244L149.4 116C155.1 110.2 166.1 110.8 171.1 117.4C177.8 123.1 177.2 134.1 170.6 139.9L170.6 139.9zM490.6 116L634.6 244C638 247.1 640 251.4 640 255.1C640 260.6 638 264.9 634.6 267.1L490.6 395.9C484 401.8 473.9 401.2 468 394.6C462.2 388 462.8 377.9 469.4 372L599.9 255.1L469.4 139.9C462.8 134.1 462.2 123.1 468 117.4C473.9 110.8 484 110.2 490.6 116H490.6z"></path></svg>
                            </div>
                            <p class="lg:text-xl text-sm tracking-wide mt-8">
                                Somos obcecados por tecnologia.<br />
                                Sempre a certa para cada aplicação.<br />
                                Essa é a nossa base.
                            </p>
                        </div>
                    </a>
                    <a href="/" class="group">
                        <div class="bg-white border-2 border-black p-8 rounded-3xl shadow group-hover:border-purple-500">
                            <div class="inline-flex items-center justify-between w-full font-semibold">
                                <h2 class="text-3xl lg:text-4xl justify-between tracking-tight group-hover:text-purple-500">
                                    Serviço
                                </h2>
                                <svg class="w-12 h-12 lg:h-20 lg:w-16 rounded-full shadow-small group-hover:fill-purple-500" viewBox="0 0 576 512" focusable="false" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M275.2 250.5c6.998 7.377 18.5 7.377 25.5 0l108.1-114.2c31.49-33.13 29.72-88.22-5.65-118.7c-35.37-30.63-81.38-16.91-104.9 7.724L287.1 36.91L276.8 25.28C253.9 1.149 207.6-13.45 171.1 17.56C136.7 48.06 134.7 103.1 166.4 136.3L275.2 250.5zM192.3 41.79C213.2 23.79 240.6 33.17 254.2 47.54l33.74 35.26l33.74-35.26c13.5-14.13 40.99-23.76 61.86-5.752c23.74 20.63 20.12 54.51 3.373 72.14L287.9 217.7L188.1 113.9C172.2 96.56 168.7 62.42 192.3 41.79zM558.2 333.6c-9.5-8.619-22-13.37-35.12-13.37c-12.5 0-24.88 4.248-34.62 12.12l-61.45 49.21c-1.928 1.545-4.324 2.385-6.795 2.385h-41.62c4.625-9.619 6.5-20.74 4.75-32.23C379.4 323.7 353.7 304 325.6 304H181.2c-20.75 0-40.1 6.746-57.5 19.24l-38.5 28.73H16c-8.801 0-16 7.195-16 15.99s7.198 16.04 15.1 16.04l80.01 .0091l46.86-35.29c11.12-8.244 24.62-12.74 38.37-12.74h146.7c13.25 0 24 10.74 24 23.99s-10.75 23.98-24 23.98H239.1c-8.75 0-16 7.246-16 15.99c0 8.746 7.25 15.99 16 15.99h180.2c9.625 0 19-3.248 26.62-9.246l61.62-49.22c4.25-3.373 9.5-5.248 14.62-5.248c5 0 9.875 1.75 13.75 5.248c10.12 9.119 9.375 24.48-.875 32.61l-100.7 80.58c-7.584 6.064-17.01 9.369-26.72 9.369H16c-8.801 0-15.1 7.189-15.1 15.98S7.198 512 15.1 512h392.5c17 0 33.38-5.871 46.62-16.37l100.9-80.7c12.25-9.744 19.5-24.36 19.1-39.98C576.5 359.3 569.1 344.2 558.2 333.6z"></path></svg>
                            </div>
                            <p class="lg:text-xl text-sm tracking-wide mt-8 group-hover:text-purple-500">
                                Nós fornecemos um serviço na qual nos orgulhamos.<br />
                                Sempre o melhor
                            </p>
                        </div>
                    </a>
                </div>
            </section>
            <secion class="p-8 min-h-[40vh] w-full">
                <a href="/composable-architecture" class="w-11/12 md:w-2/3 h-min group rounded-md bg-purple-500 text-white flex max-md:flex-col justify-between items-center gap-12 mx-auto p-8  border-2 border-black hover:shadow-none shadow-[4px_4px_0px_4px_rgba(0,0,0,1)] hover:top-0 -top-1 hover:left-0 -left-1 relative">
                    <div class="flex gap-4 flex-col">
                        <h1 class="text-xl">Composable architecture <br />
                            is in our DNA.
                        </h1>
                        <div class="p-4 bg-purple-800 w-min rounded-md border-2 border-transparent group-hover:border-white">
                            <h1 class="text-white whitespace-nowrap">
                                O que é Composable Architecture?
                            </h1>
                        </div>
                    </div>
                    <p class="text-md max-sm:w-full w-1/2 text-right">
                        Este é o futuro da web. É mais rápido, mais seguro, mais fácil de manter e fornece uma experiência de desenvolvedor como nenhuma outra.
                    </p>
                </a>
            </secion>
            <section class="py-8 bg-black mx-auto mt-8 w-full ">
                <div class="mx-auto 2xl:max-w-7xl">
                    <h1 class="max-md:px-4 text-3xl  text-white">Valorizamos relacionamentos profundos</h1>
                </div>
                <section class=" overflow-hidden">
                    <div class="mx-auto 2xl:max-w-7xl px-8 lg:px-20 2xl:px-0 bg-black overflow-hidden 2xl:border-x-2 border-black">
                        <div class="relative flex max-sm:flex-col max-sm:items-start items-center gap-4 py-12 whitespace-nowrap saturate-0">
                            <img class="h-8 aspect-auto" src="/static/feeder.svg" alt="logo" />
                            <img class="h-9 aspect-auto" src="/static/orthoflow.png" alt="logo" />
                            <img class="h-9 aspect-auto" src="/static/myshinee.png" alt="logo" />

                        </div>
                    </div>
                </section>
            </section>
            <Footer />
        </>
    )
})

export default home