<script context="module">

    export const load = async ({fetch, url}) => {
        const idCategory = url.searchParams.get('id');
        const res = await fetch(`/api/catalog/products/${idCategory}`)
        const products = await res.json();
        const data = products.products.data[0]
        console.log(data)
        const nameCategory = data.name
        // const category = data.category
        // const text = data.text
        return {
            props: {
                nameCategory,
            }
        }
    }
</script>

<script>
    export let nameCategory
</script>

{nameCategory}
