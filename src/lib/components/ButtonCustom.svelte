<script>
    export let color = 'white';
</script>

<style>
    .button {
    border: 1px solid #FFFFFF;
    border-radius: 2px;
    min-width: 200px;
    padding: 18px;
    font-size: 12px;
    margin: 0;
    font-weight: 800;
    text-transform: uppercase;
    }
</style>

<a href="contact" class="flex justify-center">
    <button style="background-color: {color}; {color !== 'white' ? 'color: white' : 'color: black; padding: 30px 0;'}" class='button'>
        <slot></slot>
    </button>
</a>

