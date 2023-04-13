<script>
    import "./nav.css";

    function openMenu() {
        const menu = document.querySelector('#nav-menu');
        menu.classList.toggle('is-open');
    }
</script>

<nav class="container py-4">
    <svg on:click={openMenu} class="w-6 fill-current text-white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
         fill="none">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
            <path fill-rule="evenodd"
                  d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z"></path>
        </g>
    </svg>

</nav>

<div id="nav-menu" class="w-screen h-screen bg-white fixed text-slate-950 flex flex-col nav ">
    <div class="py-4 container">
        <svg on:click={openMenu} class="w-6 fill-current text-slate-950	ml-auto" viewBox="0 0 20 20"
             xmlns="http://www.w3.org/2000/svg"
             fill="none">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <path fill-rule="evenodd"
                      d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z"></path>
            </g>
        </svg>
    </div>
    <ul>
        <li class="py-4 px-8 text-xl font-bold">Home</li>
        <li class="py-4 px-8 text-xl font-bold">About</li>
        <li class="py-4 px-8 text-xl font-bold">Contact</li>
    </ul>
</div>