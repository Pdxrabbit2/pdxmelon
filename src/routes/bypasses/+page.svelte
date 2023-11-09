<script>
    export let data;
</script>
<br />
<div>
    {#each data.summaries as { slug, title}}
        <p><a href="/bypasses/{slug}">{title}</a></p>
    {/each}
</div>