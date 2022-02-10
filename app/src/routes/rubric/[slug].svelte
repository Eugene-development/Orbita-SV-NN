<script context="module">
    export const load = async ({fetch, params}) => {
        const head = params.slug;

        console.log(params)
        const res = await fetch(`/api/catalog/rubrics/${head}`)
        const rubrics = await res.json();

         const data = rubrics.rubricsXXX.data[0]


        return {
            props: {
                data
            }
        }
    }
</script>

<script>
    import { page } from '$app/stores'
    const id = $page.url.searchParams.get('id')

    export let data
</script>
<p>{id}</p>
<p>123-{data.name}</p>

<!--{#each data as {id, name}}-->
<!--    <p class="px-2 border text-2xl bg-white w-full m-3">{name}</p>-->
<!--{/each}-->
