<style>
    .paragraph {
        line-height: 34px;
        font-size: 20px;
        line-height: 30px;
    }

    @media screen and (max-width: 1024px) {
        .paragraph {
            font-size: 15px;
            line-height: 30px;
            text-transform: uppercase;
            letter-spacing: 0.01em;
        }
    }

    @media screen and (max-width: 800px) {
        .paragraph {
            font-size: 17px;
            line-height: 26px;
            }
    }
</style>

<script>
    export let color = 'black';
</script>

<h4 style="color: {color}" class="paragraph"><slot/></h4>