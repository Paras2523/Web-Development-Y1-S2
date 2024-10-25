<script>
    import Navigation from "../lib/navigation.svelte";
</script>

<h1>m learning svelte</h1>

<Navigation />
<slot/>

<footer>this should be on every pg</footer>

<style>
    :global(*){
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    footer{
        padding: 1em;
        background-color: #aaa;
        margin-top: 1em ;
    }
</style>