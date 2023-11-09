<svelte:head>
    <title>Bypasses (PDXMelon's Website)</title>
    <meta name="Some bypasses in a list (list by PDXMelon)">
</svelte:head>
<script>
    export let data;
</script>
<br />
<div>
    {#each data.summaries as { slug, title}}
        <p><a href="/bypasses/{slug}">{title}</a></p>
    {/each}
    <br />
    for my fake securly proxyish thing (acctualy works tho) you should go to <a href='/fakesecurlyproxy'>here</a>
</div>