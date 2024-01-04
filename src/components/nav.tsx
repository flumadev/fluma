export function Nav() {
    return (
        <>
            <div class='w-full bg-purple-500'>
                <a href="/">
                    <h1 class='text-8xl text-center  border-2 border-slate-900 font-black text-orange-100'>Fluma</h1>
                </a>
            </div>
            <nav class="bg-purple-500 sticky top-0 z-50" >
                <ul class='w-full border-2 border-t-0 flex items-center gap-4 border-slate-900  text-white h-16'>
                    <li class='h-full'>
                        <a class='h-full  flex items-center px-4 md:px-8 hover:underline' href="/design">Design</a></li>
                    <li class='h-full'>
                        <a class='h-full  flex items-center px-4 md:px-8 hover:underline' href="/tech">Tecnologia</a></li>
                    <li class='h-full'>
                        <a class='h-full  flex items-center px-4 md:px-8 hover:underline' href="/servicos">Serviços</a>
                    </li>
                    {/* <li class='h-full'>
                        <a class='h-full  flex items-center px-4 md:px-8 hover:underline' href="/nosso-processo">Nosso processo</a>
                    </li> */}
                </ul>
            </nav>
        </>

    )
}
