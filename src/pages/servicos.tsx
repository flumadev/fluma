import { Hono } from "hono";
import { Nav } from "../components/nav";
import { Footer } from "../components/footer";
import Card from "../components/card";

const servicos = new Hono();


servicos.get('/', c => {
    return c.render(
        <>
            <Nav />
            <section class="mx-auto 2xl:max-w-7xl max-sm:py-11 max-sm:h-[50svh] min-h-[70vh] flex justify-center items-center ">
                <div class="flex flex-col justify-center max-sm:px-4">
                    <h1 class="text-5xl mb-8 max-sm:font-black">Nossos clientes vêm em primeiro lugar.</h1>
                    <h2 class="text-3xl">White-glove experience.</h2>
                    <p class="max-w-96 text-justify">Eles são a âncora que nos fundamenta e o farol que nos orienta. Nós os amamos e eles nos amam.
                    </p>
                </div>
                <img class="h-[500px] max-sm:hidden aspect-square" src="/static/frozen-figure-rafiki.svg" alt="" />
            </section >
            <section class="gap-4 mt-4 max-sm:px-4 grid grid-cols-2 grid-rows-2 max-sm:grid-cols-1 max-w-screen-lg mx-auto">
                <Card title="Relacionamento é tudo." >
                    Você é nossa prioridade desde o primeiro dia. A qualquer hora, em qualquer lugar, de qualquer maneira - nós protegemos você.
                </Card>
                <Card title="Nosso trabalho é fazer você ficar bem." >
                    Estamos aqui para fazer você se destacar para as pessoas que importam.
                </Card>
                <Card title="Faça acontecer." >
                    As montanhas existem para serem escaladas. A nossa experiência profissional permite-nos enfrentar qualquer desafio.
                </Card>
                <Card title="Empresas de todos os tamanhos." >
                    Criamos parceria com empresas  Fortune 500 estabelecidas, startups empolgantes e todos os intermediários.
                </Card>
                <Card title="Mergulhe de cabeça." >
                    O seu negócio é a nossa paixão. Nenhuma indústria é muito específica; nenhum produto é muito pequeno.
                </Card>
                <Card title="Qualidade e quantidade" >
                    Nossos clientes esperam e obtêm pesquisa de mercado, desenvolvimento, design e serviços de consultoria de classe mundial.
                </Card>

            </section>
            <br />
            <Footer showForm />
        </>
    )
})


export default servicos;