<script context="module">

    export const load = async ({fetch, url}) => {
        const idCategory = url.searchParams.get('id');
        const res = await fetch(`/api/catalog/products/${idCategory}`)
        const resJSON = await res.json();
        const data = resJSON.products.data[0]
        const nameCategory = data.name
        const products = data.product
        const pathAWS = resJSON.pathAWS
        return {
            props: {
                nameCategory,
                products,
                pathAWS
            }
        }
    }
</script>

<script>
    export let nameCategory
    export let products
    export let pathAWS
</script>

<div class="bg-blueGray-50">
    <div class="p-8 mx-auto sm:px-6 lg:px-8 bg-gradient-to-b from-white to-indigo-50 shadow-lg mb-4">
        <div class="flex flex-col text-center w-full">
            <h1 class="text-4xl font-medium title-font text-gray-900">{ nameCategory } в Нижнем Новгороде</h1>
        </div>
    </div>

    <div class="p-8">
        <!--    <p>{{$route.params.slug}}</p>-->
        <!-- This example requires Tailwind CSS v2.0+ -->
        <ul class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {#each products as {id, name, slug, size, unit, image}}
            <li class="col-span-1 flex flex-col text-center bg-white rounded-lg shadow-lg shadow-indigo-200/50 divide-y divide-gray-200">
                <a sveltekit:prefetch sveltekit:noscroll href='/product/{slug}/?id={id}'>
                    <div class="flex-1 flex flex-col p-8">
                        <img src="{pathAWS}{image[0].filename}"
                                alt="product"
                                class="w-32 h-32 object-contain flex-shrink-0 mx-auto">
                        <h3 class="mt-6 text-gray-900 text-xs font-medium">{ name }</h3>
                        <dl class="mt-1 flex-grow flex flex-col justify-between">
                            <dt class="sr-only">Title</dt>
                            <hr class="mt-4">
<!--                                                      <dd class="text-gray-500 text-sm">цена</dd>-->
                            <dt class="sr-only">Product</dt>
                            <dd class="mt-4">
                                <span class="px-2 py-1 text-indigo-800 text-base font-medium bg-indigo-100 rounded-full">{ size[0].price.price } р/{ unit }</span>
                            </dd>
                        </dl>
                    </div>
                </a>
                <div>
                    <div class="-mt-px flex divide-x divide-gray-200">
                        <div class="w-0 flex-1 flex">
<!--                            <button-->
<!--                                    v-if="!productsInCart.some(arrVal => product.id === arrVal)"-->
<!--                                    class="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"-->
<!--                                    @click.prevent.once="sendToCart (product.id)">-->
<!--                                &lt;!&ndash; Heroicon name: solid/phone &ndash;&gt;-->
<!--                                <svg-->
<!--                                        class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"-->
<!--                                        xmlns="http://www.w3.org/2000/svg">-->
<!--                                    <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" stroke-linecap="round" stroke-linejoin="round"-->
<!--                                          stroke-width="2"/>-->
<!--                                </svg>-->
<!--                                <span class="ml-3">В корзину</span>-->
<!--                            </button>-->
<!--                            <button v-else-->
<!--                                    class="focus:outline-none relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-50 font-medium border border-transparent rounded-bl-lg hover:text-gray-100 bg-indigo-900">-->
<!--                                &lt;!&ndash; Heroicon name: solid/phone &ndash;&gt;-->
<!--                                <svg class="w-5 h-5 text-gray-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"-->
<!--                                     xmlns="http://www.w3.org/2000/svg">-->
<!--                                    <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" stroke-linecap="round" stroke-linejoin="round"-->
<!--                                          stroke-width="2"/>-->
<!--                                </svg>-->
<!--                                <span class="ml-3">В корзине</span>-->
<!--                            </button>-->

                        </div>
                        <div  class="-ml-px w-0 flex-1 flex">
<!--                        <div v-if="productsInCart.some(arrVal => product.id === arrVal)" class="-ml-px w-0 flex-1 flex">-->
                            <a sveltekit:prefetch sveltekit:noscroll href='/product/{slug}/?id={id}' class="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border  border-transparent rounded-bl-lg hover:text-gray-500">
                                <!-- Heroicon name: solid/mail -->
                                <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" stroke-linecap="round" stroke-linejoin="round"
                                          stroke-width="2"/>
                                    <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" stroke-linecap="round" stroke-linejoin="round"
                                          stroke-width="2"/>
                                </svg>
                                <span class="ml-3">Подробнее</span>
                            </a>
                        </div>
                    </div>
                </div>
            </li>
            {/each}
        </ul>

    </div>
</div>
