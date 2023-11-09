<script>
    export let data;
</script>
<svelte:head>
  <title>{data.bypass.title}</title>
  <meta name="{data.bypass.title}">
</svelte:head>
  
<h1>{data.bypass.title}</h1>
<div>{@html data.bypass.content}</div>