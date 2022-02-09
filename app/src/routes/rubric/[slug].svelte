<script context="module">
    export const load = async ({fetch, params}) => {
        const head = params.slug;

        console.log(head)

        const res = await fetch(`/api/catalog/rubrics/${head}`)
        const rubrics = await res.json();

         const data = rubrics.rubricsXXX.data[0]
        console.log(data)


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

<p>123-{data.name}</p>

<!--{#each data as {id, name}}-->
<!--    <p class="px-2 border text-2xl bg-white w-full m-3">{name}</p>-->
<!--{/each}-->
