<script>
  export let count = 0;
  export let countPerClick = 1;
  function increment() {
    count += countPerClick;
    countPerClick += 0.1;
  }
</script>
<h1>Your count is {Math.floor(count)}</h1>
<button on:click={increment}>INCREASE YOUR COUNT!!!</button>