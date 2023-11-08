<script>
  export let data;
</script>

<div>
  {#each data.summaries as { slug, title }}
    <p><a href="/blog/{slug}">{title}</a></p>
  {/each}
</div>