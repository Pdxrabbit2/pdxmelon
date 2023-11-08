<script>
  $: todos = []
  function handleButton() {
    todos.push(document.getElementById('todoInput').value)
    todos = todos;
  }
  function remove(element) {
    todos = todos.slice(1);
    todos = todos;
  
  }
</script>
<div>
  <input placeholder="Input your todo here." id="todoInput">
  <button on:click={handleButton}>Add your todo!</button>
  <br />
  <button on:click={remove}>Delete one</button>
  <div>
    {#each todos as todo}
      <div>{todo}</div>
    {/each}
    </div>
</div>