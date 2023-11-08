<script>
    export let data;
</script>
<div>
    {#each data.summaries as { slug, title}}
        <p><a href="/bypasses/{slug}">{title}</a></p>
    {/each}
</div>