import { Hono } from "hono";
import { Nav } from "../components/nav";
import { Footer } from "../components/footer";

const design = new Hono();


design.get("/", (c) => {
    return c.render(
        <>
            <Nav />
            <section class="mx-auto 2xl:max-w-7xl  h-[70vh] flex justify-center items-center ">
                <div class="flex flex-col justify-center  max-sm:px-4">
                    <h1 class="text-5xl mb-8 max-sm:font-black">Design é como funciona.</h1>
                    <h2 class="text-3xl">Deep Focus</h2>
                    <p class="max-w-96 text-justify">Estamos focados em oferecer a melhor experiência de usuário em todas as plataformas e dispositivos. Desde a concepção até os protótipos funcionais, criamos belas experiências digitais centradas no ser humano.</p>

                </div>
                <img class="h-[500px] max-sm:hidden aspect-square" src="/static/designer-girl-animate.svg" alt="" />
            </section>
            <section class=" border-2 border-b-0 border-black w-full grid max-sm:grid-cols-1 grid-cols-2 grid-rows-1">
                <div class=" border-r-2 border-black w-full flex flex-col justify-center p-2 max-sm:hidden">
                    <img src="/static/design-stats-rafiki.svg" class="h-[450px] " />
                </div>
                <div class="w-full flex flex-col justify-center p-6 bg-purple-500 text-white">
                    <h1 class="text-3xl font-black">Aplicações Web</h1>
                    <p class="mt-5 w-2/3 text-xl font-medium">
                        Aplicativos da Web e sistemas de design, incluindo tipografia, sistemas de grade, botões, menus, barras laterais e muito mais. Desenhamos as peças para construir seu software mais utilizável e bonito do que nunca.
                    </p>
                    <a href="#contato" type="button" class="w-min max-sm:w-full  text-nowrap mt-4 text-black items-center shadow shadow-black text-lg font-semibold inline-flex px-6 focus:outline-none justify-center text-center bg-white border-black ease-in-out transform transition-all focus:ring-lila-700 focus:shadow-none border-2 duration-100 focus:bg-black focus:text-white  py-2 rounded-lg h-16 tracking-wide focus:translate-y-1  hover:text-lila-800">Conte-nos sua ideia</a>
                </div>
            </section>
            <section class=" border-2 border-b-0  border-black w-full grid max-sm:grid-cols-1 grid-cols-2 grid-rows-1">
                <div class=" border-r-2 border-black w-full flex flex-col justify-center items-end p-6 bg-purple-300 text-gray-900">
                    <h1 class="text-3xl font-black text-end">Apps mobile</h1>
                    <p class="mt-5 w-2/3 text-xl font-medium text-end">
                        Os aplicativos iOS, iPadOS e Android são nosso território porque os usamos todos os dias.<br /> Nós liberamos nossa criatividade para projetar as experiências móveis mais utilizáveis e atraentes do planeta.
                    </p>
                    <a href="#contato" type="button" class="w-min max-sm:w-full text-nowrap mt-4 text-black items-center shadow shadow-black text-lg font-semibold inline-flex px-6 focus:outline-none justify-center text-center bg-white border-black ease-in-out transform transition-all focus:ring-lila-700 focus:shadow-none border-2 duration-100 focus:bg-black focus:text-white  py-2 rounded-lg h-16 tracking-wide focus:translate-y-1  hover:text-lila-800">Desenvolva seu App</a>
                </div>
                <div class="w-full flex flex-col justify-center p-6 max-sm:hidden">
                    <img src="/static/development-rafiki.svg" class="h-[450px]" />
                </div>
            </section>
            <section class=" border-2 border-b-0  border-black w-full grid max-sm:grid-cols-1 grid-cols-2 grid-rows-1">
                <div class=" border-r-2 border-black w-full flex flex-col justify-center  p-6 max-sm:hidden ">
                    <img src="/static/team-rafiki.svg" class="h-[450px] " />
                </div>
                <div class="w-full flex flex-col justify-center p-6 bg-purple-500 text-white">
                    <h1 class="text-3xl font-black ">Redesenhos e Fluxos</h1>
                    <p class="mt-5 w-2/3 text-xl font-medium ">
                        Provavelmente, uma das coisas mais gratificantes para nós é dar um passo para trás e ver como melhoramos o software que era confuso, feio e inutilizável em algo muito melhor.
                    </p>
                    <a href="#contato" type="button" class="w-min max-sm:w-full text-nowrap mt-4 text-black items-center shadow shadow-black text-lg font-semibold inline-flex px-6 focus:outline-none justify-center text-center bg-white border-black ease-in-out transform transition-all focus:ring-lila-700 focus:shadow-none border-2 duration-100 focus:bg-black focus:text-white  py-2 rounded-lg h-16 tracking-wide focus:translate-y-1  hover:text-lila-800">Reimagine seu sistema</a>
                </div>
            </section>
            <Footer showForm />
        </>
    )
})

export default design