import { Hono } from "hono";
import { Nav } from "../components/nav";
import { Footer } from "../components/footer";

const composable = new Hono();


composable.get('/', c => {
    return c.render(
        <>
            <Nav />
            <section class="mx-auto 2xl:max-w-7xl max-sm:py-11 max-sm:h-svh min-h-[70vh] flex justify-center items-center ">
                <div class="flex flex-col justify-center max-sm:px-4">
                    <h1 class="text-5xl mb-8 max-sm:font-black">We're the Composable Architecture experts.</h1>
                    <h2 class="text-3xl">Composable architecture?</h2>
                    <p class="max-w-96 text-justify">Composable architecture é baseada na ideia de construir sites e aplicativos desde pequenos, peças independentes que você pode combinar para formar um sistema completo enquanto integrado via APIs.</p>
                </div>
                <img class="h-[500px] max-sm:hidden aspect-square" src="/static/development-rafiki.svg" alt="" />
            </section >
            <section>
                <h1 class="text-4xl text-center">A vantagem da Composable Architecture.</h1>
                <div class="gap-4 mt-4 max-sm:px-4 grid grid-cols-2 grid-rows-2 max-sm:grid-cols-1 max-w-screen-lg mx-auto">
                    <div class="bg-white border-2 border-black p-8 rounded-3xl shadow h-full">
                        <div class="inline-flex items-center justify-between w-full font-semibold">
                            <h2 class="text-3xl justify-between tracking-tight">API First</h2>
                        </div>
                        <p class="lg:text-base text-sm tracking-wide mt-8">
                            A arquitetura composable é baseada no princípio API-first, garantindo que os aplicativos funcionem com outras APIs, independentemente da linguagem de programação ou da plataforma em que foram escritos.
                        </p>
                    </div>
                    <div class="bg-white border-2 border-black p-8 rounded-3xl shadow h-full">
                        <div class="inline-flex items-center justify-between w-full font-semibold">
                            <h2 class="text-3xl justify-between tracking-tight">Composable vs. monoliths</h2>
                        </div>
                        <p class="lg:text-base text-sm tracking-wide mt-8">
                            A arquitetura composable facilita a criação de produtos que se integram perfeitamente, ao contrário da abordagem monolítica que torna a implementação mais difícil e a integração mais complexa.
                        </p>
                    </div>
                    <div class="bg-white border-2 border-black p-8 rounded-3xl shadow h-full">
                        <div class="inline-flex items-center justify-between w-full font-semibold">
                            <h2 class="text-3xl justify-between tracking-tight">Jamstack como base
                            </h2>
                        </div>
                        <p class="lg:text-base text-sm tracking-wide mt-8">
                            O Jamstack veio para ficar. Enquanto a arquitetura combinável engloba algo maior do que o Jamstack, ainda acreditamos na geração estática de certas páginas e ativos que são implantados em um CDN e construídos sobre essa base com headless, APIs e outros microservices.
                        </p>
                    </div>
                    <div class="bg-white border-2 border-black p-8 rounded-3xl shadow h-full">
                        <div class="inline-flex items-center justify-between w-full font-semibold">
                            <h2 class="text-3xl justify-between tracking-tight">Só a melhor tecnologia
                            </h2>
                        </div>
                        <p class="lg:text-base text-sm tracking-wide mt-8">
                            Podemos ajudá-lo a selecionar os produtos que melhor atendem às suas necessidades e integrá-los facilmente com outros produtos para construir sua pilha. Dessa forma, o foco é colocado no melhor tecnologia para o trabalho, não na tecnologia que está disponível apenas em um fornecedor.
                        </p>
                    </div>
                </div>
            </section>
            <br />
            <Footer showForm />
        </>
    )
})


export default composable;