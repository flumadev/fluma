export function Footer({ showForm = false }) {
    return (
        <>
            <footer id="contato" class=" border-2 p-8 border-black scroll-pt-2">
                {showForm && (
                    <>
                        <div class="max-w-screen-lg mx-auto" data-tf-widget="MokfVn2e" data-tf-opacity="100" data-tf-iframe-props="title=Contato Site" data-tf-transitive-search-params="" data-tf-medium="snippet" style="width:100%;height:500px;"></div>
                        <script src="https://embed.typeform.com/next/embed.js"></script>
                    </>
                )}
                <div class=" text-black mt-8 flex  max-sm:flex-col-reverse gap-4 justify-around">
                    <div>
                        <h1 class="text-3xl">Venha para o futuro.</h1>
                        <h2>&copy;&nbsp;{new Date().getFullYear()}&nbsp;Fluma Soluções Digitais - 45.381.189/0001-48</h2>
                    </div>
                    <div>
                        <ul>
                            <li class="hover:text-purple-500">
                                <a href="/desgin">Design</a>
                            </li>
                            <li class="hover:text-purple-500">
                                <a href="/tech">Tecnologia</a>
                            </li>
                            <li class="hover:text-purple-500">
                                <a href="/servicos">Serviços</a>
                            </li>
                            <li class="hover:text-purple-500">
                                <a href="https://www.instagram.com/fluma.dev/">@fluma.dev</a>
                            </li>
                        </ul>
                    </div>
                </div>

            </footer>

        </>

    )
}
