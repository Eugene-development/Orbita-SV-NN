<script context="module">
    export const load = async ({fetch, url}) => {
        const idProduct = url.searchParams.get('id');
        const res = await fetch(`/api/catalog/product/${idProduct}`)
        const resJSON = await res.json();
        const data = resJSON.product.data[0]
        const nameProduct = data.name
        const idCategory = data.category.id
        const nameCategory = data.category.name
        const slugCategory = data.category.slug
        const pathAWS = resJSON.pathAWS
        const image = data.image
        const unit = data.unit
        const size = data.size
        return {
            props: {
                nameProduct,
                idCategory,
                slugCategory,
                nameCategory,
                pathAWS,
                image,
                unit,
                size
            }
        }
    }
</script>

<script>
    export let nameProduct
    export let idCategory
    export let slugCategory
    export let nameCategory
    export let pathAWS
    export let image
    export let unit
    export let size
</script>

<div>
    <div>
        <div class="p-10 mx-auto sm:px-6 lg:px-8 bg-gradient-to-b from-white to-indigo-50 shadow-lg mb-4">
            <div class="flex flex-col text-center w-full">
                <h1 class=" text-5xl font-medium title-font text-gray-900">{ nameProduct }</h1>
            </div>
        </div>

        <section class="text-gray-600 body-font overflow-hidden">
            <div class="container px-5 py-24 mx-auto">
                <div class="lg:w-4/5 mx-auto flex flex-wrap">
                    <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                        <h2 class="text-sm title-font text-gray-500 tracking-widest">НАИМЕНОВАНИЕ</h2>
                        <h1 class="text-gray-900 text-3xl title-font font-medium mb-4">{ nameProduct }</h1>
                        <div class="flex mb-4">
<!--                            <button-->
<!--                                    @click="changeVisibleDescription"-->
<!--                                    class="focus:outline-none flex-grow border-b-2 border-gray-300 py-2 text-lg px-1"-->
<!--                                    :class="{ 'text-indigo-900 border-indigo-900': visibleDescription }"-->
<!--                            >Описание</button>-->
<!--                            <button-->
<!--                                    @click="changeVisiblePayment"-->
<!--                                    class="focus:outline-none flex-grow border-b-2 border-gray-300 py-2 text-lg px-1"-->
<!--                                    :class="{ 'text-indigo-900 border-indigo-900': visiblePayment }"-->
<!--                            >Оплата</button>-->
<!--                            <button-->
<!--                                    @click="changeVisibleDelivery"-->
<!--                                    class="focus:outline-none flex-grow border-b-2 border-gray-300 py-2 text-lg px-1"-->
<!--                                    :class="{ 'text-indigo-900 border-indigo-900': visibleDelivery }"-->
<!--                            >Доставка</button>-->
                        </div>


<!--                        <p v-show="visibleDescription" class="leading-relaxed mb-4" v-html="product.description"></p>-->
<!--                        <p v-show="visiblePayment" class="leading-relaxed mb-4">-->
<!--                            Предлагаем следующие варианты оплаты: <br>-->
<!--                            - наличными курьеру при получении товара;<br>-->
<!--                            - картой через терминал, либо наличными в нашем офисе;<br>-->
<!--                            - безналичный расчет (через банк для юридических лиц). Мы отправим счёт на оплату с нашими реквизитами на указанный вами электронный адрес. Доставка (самовывоз) товара осуществляется после получения денежных средств на наш расчётный счёт.</p>-->
<!--                        <p v-show="visibleDelivery" class="leading-relaxed mb-4" >Для удобства мы предлагаем доставку товара на адрес объекта.-->
<!--                            <br>Наша компания осуществляет доставку строительных и отделочных материалов как по Дзержинску, так и по Нижнему Новгороду и области. Стоимость доставки по Дзержинску составляет 450 рублей до 1500 кг, в Нижний Новгород от 1200 рублей. Более подробную информацию о стоимости за пределы города вы можете уточнить у менеджеров.</p>-->


                        <a sveltekit:prefetch sveltekit:noscroll href='/products/{slugCategory}/?id={idCategory}'>
                            <div class="flex border-t border-gray-200 py-2">
                                <span class="text-gray-500">Категория</span>
                                <span class="ml-auto text-gray-900">{ nameCategory }</span>
                            </div>
                        </a>

                        <div class="flex border-t border-gray-200 py-2">
                            <span class="text-gray-500">Единица измерения</span>
                            <span class="ml-auto text-gray-900">{ unit }</span>
                        </div>
                        <div class="flex border-t border-b mb-6 border-gray-200 py-2">
                            <span class="text-gray-500">Наличие на складе</span>
                            <span class="ml-auto text-gray-900">Уточняйте у менеджера</span>
                        </div>
                        <div class="flex">
                            <span class="title-font font-medium text-4xl text-gray-900">{ size[0].price.price } р/{ unit }.</span>
<!--                            <button-->

<!--                                    class="flex ml-auto text-white bg-indigo-50 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-900 rounded"-->
<!--                                    >В корзину-->
<!--                            </button>-->
                            <button type="button" class="ml-auto bg-indigo-50 border border-transparent rounded-md py-2 px-6 flex items-center justify-center text-base font-medium text-indigo-700 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500">В корзину</button>

                            <!--                            <button v-else-->
<!--                                    class="flex ml-auto text-white bg-red-900 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-900 rounded"-->
<!--                                    wfd-id="157">В корзине-->
<!--                            </button>-->
<!--                            <button-->
<!--                                    class="rounded-full w-10 h-10 bg-gray-100 p-0 border-0 inline-flex products-center justify-center text-gray-500 ml-4 hover:bg-red-900"-->
<!--                                    wfd-id="156">-->
<!--                                <svg class="w-5 h-5" fill="currentColor" stroke-linecap="round" stroke-linejoin="round"-->
<!--                                     stroke-width="2" viewBox="0 0 24 24">-->
<!--                                    <path-->
<!--                                            d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>-->
<!--                                </svg>-->
<!--                            </button>-->
                        </div>
                    </div>

                    <img

                            alt="ecommerce" class="lg:w-1/2 max-w-xl object-contain object-top rounded"
                            src="{pathAWS}{image[0].filename}">

                </div>
            </div>
        </section>

    </div>
</div>

