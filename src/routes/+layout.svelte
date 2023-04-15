<script>
    import "../app.css";
    import Footer from "../components/Footer.svelte";
    import Nav from "../components/Nav.svelte";
</script>

<svelte:head>
    <!-- HTML Meta Tags -->
    <title>Fluma // Agência digital</title>
    <meta name="description" content="Agência digital especializada em e-commerce, desenvolvimento web e aplicativos.">

    <!-- Facebook Meta Tags -->
    <meta property="og:url" content="https://fluma.dev/">
    <meta property="og:type" content="website">
    <meta property="og:title" content="Fluma // Agência digital">
    <meta property="og:description"
          content="Agência digital especializada em e-commerce, desenvolvimento web e aplicativos.">
    <meta property="og:image" content="https://fluma.dev/og.png">

    <!-- Twitter Meta Tags -->
    <meta name="twitter:card" content="summary_large_image">
    <meta property="twitter:domain" content="fluma.dev">
    <meta property="twitter:url" content="https://fluma.dev/">
    <meta name="twitter:title" content="Fluma // Agência digital">
    <meta name="twitter:description"
          content="Agência digital especializada em e-commerce, desenvolvimento web e aplicativos.">
    <meta name="twitter:image" content="https://fluma.dev/og.png">

</svelte:head>


<Nav/>
<slot/>
<Footer/>