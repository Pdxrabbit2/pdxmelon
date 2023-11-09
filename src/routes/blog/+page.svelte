<script>
  export let data;
</script>
<svelte:head>
  <title>PDXMelon's Empty Blog.</title>
  <meta name="PDXMelon's blog with nothing except filler stuff!">
</svelte:head>
<br />
<div>
  {#each data.summaries as { slug, title }}
    <p><a href="/blog/{slug}">{title}</a></p>
  {/each}
</div>