<script context="module">
    export const load = async ({fetch, params}) => {
        const data = params.slug;

        // const res = await fetch(`/api/${id}`)
        // const dataXk = await res.json();
        //
        // const data = dataXk.post.data[0]

        return {
            props: {
                data
            }
        }
    }
</script>

<script>
    export let data
</script>

<p>123</p>

{data}
