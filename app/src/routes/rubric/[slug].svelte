<script context="module">

    const l = console.log
    export const load = async ({fetch, params, url}) => {

        const idHead = url.searchParams.get('id');
        const slugHead = params.slug;

        let res;
        if (idHead) {
            res = await fetch(`/api/catalog/rubricsID/${idHead}`)
        } else {
            res = await fetch(`/api/catalog/rubricsSLUG/${slugHead}`)
        }

        const resJSON = await res.json();
        const data = resJSON.rubrics.data[0]
        const nameHead = data.name
        const rubric = data.rubric
        const text = data.text
        const title = nameHead + ' || База стройматериалов Орбита-Строй в Нижнем Новгороде'
        const description = nameHead + ' в Нижнем Новгороде и области. Предлагаем доставку и скидки.'
        return {
            props: {
                title,
                description,
                nameHead,
                rubric,
                text
            }
        }
    }
</script>

<script>
    export let title
    export let description
    export let nameHead
    export let rubric
    export let text
</script>



<svelte:head>
    <title>{title}</title>
    <meta name="description" content="{description}">
</svelte:head>


<div class="bg-white">
    <div class="pt-4 sm:pt-8 lg:pt-12">
        <div class="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <div class="max-w-3xl mx-auto space-y-2 lg:max-w-none">
                <!--            <h2 class="text-lg leading-6 font-semibold text-slate-900 uppercase tracking-wider">-->
                <!--              Раздел-->
                <!--            </h2>-->
                <h1 class="text-3xl font-extrabold text-slate-900 sm:text-4xl lg:text-5xl">
                    {nameHead}
                </h1>
                <p class="text-xl text-slate-700">
                    Выберите интересующую вас рубрику в этом разделе.
                </p>
            </div>
        </div>
    </div>
    <div class="mt-8 pb-12 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24 bo">
        <div class="relative">
            <div class="absolute inset-0 h-3/4"></div>
            <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3">


                    {#each rubric as {id, slug, name}}
                        <div
                         class="flex flex-col rounded-lg shadow-lg shadow-indigo-200/50 overflow-hidden border-2">
                        <div class="px-6 py-8 text-center sm:p-10 sm:pb-6">
                            <div>
                                <h3 class="inline-flex px-8 py-1 rounded-full text-sm  font-semibold tracking-wide uppercase bg-indigo-50 text-indigo-900" id="tier-standard">
                                    { nameHead }
                                </h3>
                            </div>
                            <div class="mt-4  text-center items-baseline text-2xl font-extrabold">
                                { name }
                            </div>
                            <!--                  <p class="mt-5 text-lg text-slate-500">-->
                            <!--                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.-->
                            <!--                  </p>-->
                        </div>
                        <div class="flex-1 flex flex-col justify-between px-6  sm:p-10 sm:pt-6">
                            <ul role="list" class="space-y-2">
                                <!--                    <li class="flex items-start">-->
                                <!--                      <div class="flex-shrink-0">-->
                                <!--                        &lt;!&ndash; Heroicon name: outline/check &ndash;&gt;-->
                                <!--                        <svg class="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">-->
                                <!--                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />-->
                                <!--                        </svg>-->
                                <!--                      </div>-->
                                <!--                      <p class="ml-3 text-base text-slate-700">-->
                                <!--                        Pariatur quod similique-->
                                <!--                      </p>-->
                                <!--                    </li>-->

                                <!--                    <li class="flex items-start">-->
                                <!--                      <div class="flex-shrink-0">-->
                                <!--                        &lt;!&ndash; Heroicon name: outline/check &ndash;&gt;-->
                                <!--                        <svg class="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">-->
                                <!--                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />-->
                                <!--                        </svg>-->
                                <!--                      </div>-->
                                <!--                      <p class="ml-3 text-base text-slate-700">-->
                                <!--                        Sapiente libero doloribus modi nostrum-->
                                <!--                      </p>-->
                                <!--                    </li>-->

                                <!--                    <li class="flex items-start">-->
                                <!--                      <div class="flex-shrink-0">-->
                                <!--                        &lt;!&ndash; Heroicon name: outline/check &ndash;&gt;-->
                                <!--                        <svg class="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">-->
                                <!--                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />-->
                                <!--                        </svg>-->
                                <!--                      </div>-->
                                <!--                      <p class="ml-3 text-base text-slate-700">-->
                                <!--                        Vel ipsa esse repudiandae excepturi-->
                                <!--                      </p>-->
                                <!--                    </li>-->

                                <!--                    <li class="flex items-start">-->
                                <!--                      <div class="flex-shrink-0">-->
                                <!--                        &lt;!&ndash; Heroicon name: outline/check &ndash;&gt;-->
                                <!--                        <svg class="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">-->
                                <!--                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />-->
                                <!--                        </svg>-->
                                <!--                      </div>-->
                                <!--                      <p class="ml-3 text-base text-slate-700">-->
                                <!--                        Itaque cupiditate adipisci quibusdam-->
                                <!--                      </p>-->
                                <!--                    </li>-->
                            </ul>
                            <div class="mb-2 rounded-md shadow-xl shadow-indigo-500/50">
                                <a sveltekit:prefetch sveltekit:noscroll href='/category/{slug}/?id={id}'
                                        class="ease-in duration-300 block w-full bg-gradient-to-r from-indigo-500 via-indigo-800 to-indigo-500 hover:from-indigo-800 hover:via-indigo-500 hover:to-indigo-800 border border-indigo-900 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-indigo-900">
                                    В каталог
                                </a>
                            </div>
                        </div>
                    </div>
                        {/each}

                </div>
            </div>
        </div>
        <div class="mt-8 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-8">
            <div class="max-w-md mx-auto lg:max-w-7xl">
                <div  class="rounded-lg bg-slate-50 px-6 py-8 sm:p-10 lg:flex lg:items-center">
                    <!--            <div v-for="(text, idx) of head.text" :key="text.id" class="rounded-lg bg-slate-50 px-6 py-8 sm:p-10 lg:flex lg:items-center">-->
                    <div class="flex-1">
                        <div>
                            <h2 class="inline-flex px-4 py-1 rounded-full text-2xl font-semibold tracking-wide bg-white text-slate-800">
                                { text.titleText }
                            </h2>
                        </div>
                        <div class="mt-8 text-lg text-slate-600">{@html text.text}</div>
                    </div>
                </div>
                <div class="mt-6 rounded-md shadow lg:flex-shrink-0">
<!--                    <NuxtLink to="/information/discount" class="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-slate-900 bg-slate-50 hover:bg-slate-100">-->
<!--                        &lt;!&ndash;{{ head.name }} со скидкой&ndash;&gt;-->
<!--                    </NuxtLink>-->
                </div>

            </div>

        </div>

    </div>
</div>

