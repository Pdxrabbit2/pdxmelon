<script>
    $: currentUrl = null
    function go() {
        let OriginalUrl = document.getElementById('urlBox').value;
        let newUrl = `https://${OriginalUrl}/#translate.google.com`;
        currentUrl = newUrl;
    }
</script>

<div>
    <br />
    <br />
    <br />
    <input type="text" name="urlBox" placeholder="Put your url in here" id="urlBox">
    <br />
    <br />
    <br />
    <button on:click='{go}'>lol</button>
    <br />
    <br />
    <a href="{currentUrl}">YOUR LINK (when its done. Click the button first, you mush)</a>
</div>