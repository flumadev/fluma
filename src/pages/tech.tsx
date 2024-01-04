import { Hono } from "hono";
import { Nav } from "../components/nav";
import { Footer } from "../components/footer";

const tech = new Hono();


tech.get('/', c => {
    return c.render(
        <>
            <Nav />
            <section class="mx-auto 2xl:max-w-7xl max-sm:py-11 max-sm:h-[50svh] min-h-[70vh] flex justify-center items-center ">
                <div class="flex flex-col justify-center max-sm:px-4">
                    <h1 class="text-5xl mb-8 max-sm:font-black">Apenas o melhor da tecnologia</h1>
                    <h2 class="text-3xl">Código do futuro.</h2>
                    <p class="max-w-96 text-justify">Criamos sites e aplicativos modernos, rápidos e seguros para atender às necessidades específicas do seu negócio que o software de prateleira não consegue.</p>
                </div>
                <img class="h-[500px] max-sm:hidden aspect-square" src="/static/software-engineer-rafiki.svg" alt="" />
            </section >
            <section>
                <div class="gap-4 mt-4 max-sm:px-4 grid grid-cols-2 grid-rows-2 max-sm:grid-cols-1 max-w-screen-lg mx-auto">
                    <div class="bg-white border-2 border-black p-8 rounded-3xl shadow h-full">
                        <div class="inline-flex items-center justify-between w-full font-semibold">
                            <h2 class="text-3xl justify-between tracking-tight">Sites e aplicativos modernos & rápidos</h2>
                        </div>
                        <p class="lg:text-base text-sm tracking-wide mt-8">
                            Construímos sites rápidos e personalizados para atender às necessidades únicas de negócios, utilizando tecnologias como Next.js, Svelte Kit e Astro. Priorizamos avanços na web, buscando segurança, velocidade e escalabilidade.
                        </p>
                    </div>
                    <div class="bg-white border-2 border-black p-8 rounded-3xl shadow h-full">
                        <div class="inline-flex items-center justify-between w-full font-semibold">
                            <h2 class="text-3xl justify-between tracking-tight">Ecommerce</h2>
                        </div>
                        <p class="lg:text-base text-sm tracking-wide mt-8">
                            O ecommerce teve um aumento incrível nos últimos dois anos. Sabemos que fazer a melhor experiência de compra online é uma combinação de atenção aos detalhes e uso de tecnologia de ponta.
                        </p>
                    </div>
                    <div class="bg-white border-2 border-black p-8 rounded-3xl shadow h-full">
                        <div class="inline-flex items-center justify-between w-full font-semibold">
                            <h2 class="text-3xl justify-between tracking-tight">Data & APIs</h2>
                        </div>
                        <p class="lg:text-base text-sm tracking-wide mt-8">
                            Construímos aplicativos projetados para resolver necessidades de negócios simples ou complicadas. Nossa equipe criou dezenas de soluções usando todas as principais plataformas ou criando soluções personalizadas de desenvolvimento intensivo.
                        </p>
                    </div>
                </div>
            </section>

            <br />
            <Footer showForm />
        </>
    )
})


export default tech;