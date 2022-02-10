<script context="module">

    export const load = async ({fetch, params, url}) => {

        const idHead = url.searchParams.get('id');
        const res = await fetch(`/api/catalog/rubrics/${idHead}`)
        const rubrics = await res.json();

        const data = rubrics.rubrics.data[0]


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
