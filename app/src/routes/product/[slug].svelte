<script context="module">

    export const load = async ({fetch, url}) => {
        const idProduct = url.searchParams.get('id');
        const res = await fetch(`/api/catalog/product/${idProduct}`)
        const resJSON = await res.json();
        const data = resJSON.product.data[0]
        console.log(data)
        const nameProduct = data.name
        // const product = data.product
        // const text = data.text
        return {
            props: {
                nameProduct,
            }
        }
    }
</script>

<script>
    export let nameProduct
</script>

{nameProduct}
