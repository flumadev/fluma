<script>
    import "../app.css";
    import Footer from "../components/Footer.svelte";
    import Nav from "../components/Nav.svelte";
</script>

<svelte:head>
    <title>Fluma // Agência digital</title>
    <meta name="description" content="Agência digital especializada em e-commerce, desenvolvimento web e aplicativos.">
    <meta property="og:title" content="Fluma // Agência digital"/>
    <meta property="og:type" content="website"/>
    <meta property="og:image" content="/static/og.png"/>
    <meta property="og:url" content="https://www.fluma.dev"/>
</svelte:head>


<Nav/>
<slot/>
<Footer/>