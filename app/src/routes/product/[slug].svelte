<script context="module">
    export const load = async ({fetch, params, url}) => {
        const idProduct = url.searchParams.get('id');
        const slugProduct = params.slug;

        let res;
        if (idProduct) {
            res = await fetch(`/api/catalog/productID/${idProduct}`)
        } else {
            res = await fetch(`/api/catalog/productSLUG/${slugProduct}`)
        }

        const resJSON = await res.json();
        const data = resJSON.product.data[0]
        const id = data.id
        const nameProduct = data.name
        const descriptionProduct = data.description
        const idCategory = data.category.id
        const nameCategory = data.category.name
        const slugCategory = data.category.slug
        const pathAWS = resJSON.pathAWS
        const image = data.image
        const unit = data.unit
        const size = data.size

        const seoTitle =  data.seo ? data.seo.title : 'Строительные и отделочные материалы'
        const seoDescription = data.seo ? data.seo.description : "Строительные и отделочные материалы в Нижнем Новгороде"
        const title = nameProduct + ' в Нижнем Новгороде || ' + seoTitle
        const description = nameProduct + ' в наличии в Нижнем Новгороде. ' + seoDescription

        return {
            props: {
                id,
                title,
                description,
                nameProduct,
                descriptionProduct,
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
    import { useVisible } from "$lib/use/functions/visible";
    import { descriptionInfo, paymentInfo, deliveryInfo, lengthCart, InCart } from "../../stores.js";
    import { concat } from "lodash";
    import axios from "axios";
    import { useReturn } from "$lib/use/functions/return";
    import { onMount } from "svelte";
    import { browser } from "$app/env";
    const { currentValue } = useReturn;


    const { invertToTrue, invertToFalse } = useVisible;

    const changeVisibleDescriptionInfo = () => {
      descriptionInfo.update(invertToTrue)
      paymentInfo.update(invertToFalse)
      deliveryInfo.update(invertToFalse)
    }
    let visibleDescription;
    descriptionInfo.subscribe(value => visibleDescription = value);

    const changeVisiblePaymentInfo = () => {
      descriptionInfo.update(invertToFalse)
      paymentInfo.update(invertToTrue)
      deliveryInfo.update(invertToFalse)
    }
    let visiblePayment;
    paymentInfo.subscribe(value => visiblePayment = value);

    const changeVisibleDeliveryInfo = () => {
      descriptionInfo.update(invertToFalse)
      paymentInfo.update(invertToFalse)
      deliveryInfo.update(invertToTrue)
    }
    let visibleDelivery;
    deliveryInfo.subscribe(value => visibleDelivery = value);


    const sendToCart = async (id) => {
        if (localStorage.getItem("inCart") === null) {
            localStorage.setItem("inCart", JSON.stringify([id]));
        } else {
            const itemsCart = JSON.parse(localStorage.getItem("inCart"));
            const newItemsCart = concat(itemsCart, id);
            localStorage.setItem("inCart", JSON.stringify(newItemsCart));
        }
        const productsInCart = JSON.parse(localStorage.getItem("inCart"));
        const visibleLengthCart = productsInCart.length;
        lengthCart.update(() => currentValue(visibleLengthCart));
        InCart.update(() => productsInCart);


        const url = `/store-cart`;
        const payloadCart = {
            product_id: id,
            sessionUser: localStorage.getItem("dataS")
        };
        const apiCart = {
            baseURL: "https://adminexpo.com:7711/",
            headers: {
                Authorization: `Bearer 1`
            }
        };
        await axios.post(url, payloadCart, apiCart);
    };

    let idProductsInCart;
    onMount(async () => {
        if (browser && localStorage.getItem("inCart") !== null) {
            idProductsInCart = JSON.parse(browser && localStorage.getItem("inCart"));
        }
    });
    InCart.subscribe(value => idProductsInCart = value);


    export let title
    export let description
    export let id
    export let nameProduct
    export let descriptionProduct
    export let idCategory
    export let slugCategory
    export let nameCategory
    export let pathAWS
    export let image
    export let unit
    export let size

</script>

<svelte:head>
    <title>{title}</title>
    <meta name="description" content="{description}">
</svelte:head>

<div>
    <div>
        <div class="p-10 mx-auto sm:px-6 lg:px-8 bg-gradient-to-b from-white via-indigo-50 to-white shadow-lg shadow-indigo-200/50 mb-4 ">
            <div class="flex flex-col text-center w-full">
                <h1 class=" text-5xl font-medium title-font text-slate-900">{ nameProduct }</h1>
            </div>
        </div>

        <section class="text-slate-600 body-font overflow-hidden">
            <div class="container px-2 py-24 mx-auto">
                <div class="lg:w-4/5 mx-auto flex flex-wrap">
                    <div class="lg:w-1/2 w-full lg:pr-12 lg:py-6 mb-6 lg:mb-0">
                        <h2 class="text-sm title-font text-slate-500 tracking-widest">НАИМЕНОВАНИЕ</h2>
                        <h1 class="text-slate-900 text-3xl title-font font-medium mb-4">{ nameProduct }</h1>
                        <div class="flex mb-4">
                            <button on:click={changeVisibleDescriptionInfo}
                                    class="focus:outline-none flex-grow border-b-2 border-slate-300 py-2 text-lg px-1 {visibleDescription ? 'font-bold' : 'font-normal'}"
                            >Описание</button>
                            <button on:click={changeVisiblePaymentInfo}
                                    class="focus:outline-none flex-grow border-b-2 border-slate-300 py-2 text-lg px-1 {visiblePayment ? 'font-bold' : 'font-normal'}"
                            >Оплата</button>
                            <button on:click={changeVisibleDeliveryInfo}
                                    class="focus:outline-none flex-grow border-b-2 border-slate-300 py-2 text-lg px-1 {visibleDelivery ? 'font-bold' : 'font-normal'}"
                            >Доставка</button>
                        </div>


                        {#if visibleDescription}
                        <p class="leading-relaxed mb-4 ">{@html descriptionProduct}</p>
                        {:else if visiblePayment}
                        <p class="leading-relaxed mb-4">
                            Предлагаем следующие варианты оплаты: <br>
                            - наличными курьеру при получении товара;<br>
                            - картой через терминал, либо наличными в нашем офисе;<br>
                            - безналичный расчет (через банк для юридических лиц). Мы отправим счёт на оплату с нашими реквизитами на указанный вами электронный адрес. Доставка (самовывоз) товара осуществляется после получения денежных средств на наш расчётный счёт.</p>
                        {:else if visibleDelivery}
                        <p class="leading-relaxed mb-4" >Для удобства мы предлагаем доставку товара на адрес объекта.
                            <br>Наша компания осуществляет доставку строительных и отделочных материалов как по Дзержинску, так и по Нижнему Новгороду и области. Стоимость доставки по Дзержинску составляет 450 рублей до 1500 кг, в Нижний Новгород от 1200 рублей. Более подробную информацию о стоимости за пределы города вы можете уточнить у менеджеров.</p>
                        {/if}

                        <a sveltekit:prefetch sveltekit:noscroll href='/products/{slugCategory}/?id={idCategory}'>
                            <div class="flex border-t border-slate-200 py-2">
                                <span class="text-slate-500">Категория:</span>
                                <span class="ml-auto text-red-900 hover:text-red-800">{ nameCategory }</span>
                            </div>
                        </a>

                        <div class="flex border-t border-slate-200 py-2">
                            <span class="text-slate-500">Единица измерения:</span>
                            <span class="ml-auto text-slate-900">{ unit }</span>
                        </div>
                        <div class="flex border-t border-b mb-6 border-slate-200 py-2">
                            <span class="text-slate-500">Наличие на складе:</span>
                            <span class="ml-auto text-slate-900">Уточняйте у менеджера</span>
                        </div>
                        <div class="flex">
                            <span class="title-font font-medium text-4xl text-slate-900">{ size[0].price.price } р/{ unit }.</span>
                            {#if !(idProductsInCart).some(arrVal => id === arrVal)}
                            <button
                              on:click|preventDefault|once={sendToCart(id)}
                              type="button"
                              class="ml-auto bg-indigo-50 border border-transparent rounded-md py-2 px-6 flex items-center justify-center text-base font-medium text-indigo-700 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-50 focus:ring-indigo-500">
                                В корзину
                            </button>
                            {:else }
                            <button
                              class="flex ml-auto text-white bg-red-700 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-900 rounded">
                                В корзине
                            </button>
                            {/if}
<!--                            <button-->
<!--                                    class="rounded-full w-10 h-10 bg-slate-100 p-0 border-0 inline-flex productsID-center justify-center text-slate-500 ml-4 hover:bg-red-900"-->
<!--                                    wfd-id="156">-->
<!--                                <svg class="w-5 h-5" fill="currentColor" stroke-linecap="round" stroke-linejoin="round"-->
<!--                                     stroke-width="2" viewBox="0 0 24 24">-->
<!--                                    <path-->
<!--                                            d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>-->
<!--                                </svg>-->
<!--                            </button>-->
                        </div>
                    </div>

                    <img alt="ecommerce" class="lg:w-1/2 p-8 max-w-xl object-contain object-center rounded shadow-lg shadow-indigo-200/50 border-2 border-indigo-50 ring-offset-1 ring-1 ring-indigo-50" src="{pathAWS}{image[0].filename}">

                </div>
            </div>
        </section>

    </div>
</div>

