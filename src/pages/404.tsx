import { Footer } from "../components/footer";
import { Nav } from "../components/nav";

export function NotFount() {
    return (
        <>
            <Nav />
            <section class="h-[70vh] flex ">
                <div class="items-center w-full grid mx-auto 2xl:max-w-7xl p-8  lg:p-20 ">
                    <div class="max-w-3xl mx-auto text-center lg:py-32">
                        <p class="text-3xl lg:text-5xl font-medium text-black max-w-4xl mx-auto">
                            404 - Página não encontrada
                        </p>
                        <p class="max-w-lg mt-4 xl:text-xl tracking-wide text-black">
                            Ops! A página que você está procurando não pode ser encontrada. Pode ter sido
                            movido, excluído ou nunca existiu. Verifique o URL ou navegue de volta
                            para nossa página inicial. Se você continuar enfrentando esse problema, sinta-se à vontade para
                            entre em contato com nossa equipe de suporte para obter assistência.
                        </p>
                        <div class="mt-8">
                            <a class="text-black items-center shadow shadow-black text-lg font-semibold inline-flex px-6 focus:outline-none justify-center text-center bg-white border-black ease-in-out transform transition-all focus:ring-lila-700 focus:shadow-none border-2 duration-100 focus:bg-black focus:text-white sm:w-auto py-3 rounded-lg h-16 tracking-wide focus:translate-y-1 w-full hover:text-lila-800" href="/">Voltar</a>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}