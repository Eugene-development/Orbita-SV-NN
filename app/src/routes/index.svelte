<script context="module">

</script>

<script>
	import {useActions} from "$lib/use/content/actions";
	const {mainAction, seasonalGoods} = useActions;

	const page = 'Главная';
	const title = 'База строительных и отделочных материалов "Орбита-Строй"'
	const description = 'Интернет-магазин строительных и отделочных материалов "Орбита-строй"\n'

</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content="{description}">
</svelte:head>

<div class="mt-12 max-w-7xl mx-auto sm:px-6 lg:px-8">
	<div class="lg:text-center">
		<p class="text-base leading-6 text-teal-800 font-semibold tracking-wide uppercase"></p>
		<h2 class=" mt-2 text-4xl leading-12 font-extrabold tracking-tight text-gray-800 sm:text-4xl sm:leading-10">
			Акция
		</h2>
		<p class="mt-4 max-w-5xl text-xl leading-7 text-gray-500 lg:mx-auto">
			Акционное ограниченное предложение. Актуальное наличие уточняйте у наших менеджеров по рабочим телефонам. Обращайте внимание на сроки проведения акций.
		</p>
	</div>
</div>

<div class="bg-white">
	<div class="mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
		<!-- Product -->
		<div class="lg:grid lg:grid-rows-1 lg:grid-cols-7 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
			<!-- Product image -->
			<div class="lg:row-end-1 lg:col-span-4">
				<div class="aspect-w-4 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden">
					<img src="{mainAction[0].img}" alt="action product" class="object-center object-cover">
				</div>
			</div>

			<!-- Product details -->
			<div class="max-w-2xl mx-auto mt-14 sm:mt-16 lg:max-w-none lg:mt-0 lg:row-end-2 lg:row-span-2 lg:col-span-3">
				<div class="flex flex-col-reverse">
					<div class="mt-4">
						<h1 class="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">{mainAction[0].action}</h1>

						<h2 id="information-heading" class="sr-only">Информация по акции</h2>
						<p class="text-sm text-gray-500 mt-2">Акция действует с {mainAction[0].startDate} 2022 года</p>
					</div>

					<div>
						<h3 class="sr-only">Reviews</h3>
						<div class="flex items-center">
							<!--
                              Heroicon name: solid/star

                              Active: "text-yellow-400", Default: "text-gray-300"
                            -->
							<svg class="text-red-500 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
								<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
							</svg>

							<!-- Heroicon name: solid/star -->
							<svg class="text-red-500 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
								<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
							</svg>

							<!-- Heroicon name: solid/star -->
							<svg class="text-red-500 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
								<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
							</svg>

							<!-- Heroicon name: solid/star -->
							<svg class="text-red-500 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
								<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
							</svg>

							<!-- Heroicon name: solid/star -->
							<svg class="text-gray-300 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
								<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
							</svg>
						</div>
						<p class="sr-only">4 out of 5 stars</p>
						<p class="text-base text-gray-500 mt-2">Наличие на складе</p>
					</div>
				</div>

				<p class="text-gray-500 mt-6">{mainAction[0].descriptionAction}</p>

				<div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
					<button type="button" class="w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500">{mainAction[0].newPrice} р/{mainAction[0].unit}</button>
					<button type="button" class="w-full bg-indigo-50 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-indigo-700 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500">В корзину</button>
				</div>

				<div class="border-t border-gray-200 mt-10 pt-10">
					<h3 class="text-sm font-medium text-gray-900">Характеристики:</h3>
					<div class="mt-4 prose prose-sm text-gray-500">
						<ul role="list">
							<li>Мешки по 20 кг</li>

							<li>Сыпучий материал</li>

						</ul>
					</div>
				</div>
			</div>

		</div>
	</div>
</div>




<div class="mt-12 max-w-7xl mx-auto sm:px-6 lg:px-8">
	<div class="lg:text-center">
		<p class="text-base leading-6 text-teal-800 font-semibold tracking-wide uppercase"></p>
		<h2 class=" mt-2 text-4xl leading-12 font-extrabold tracking-tight text-gray-800 sm:text-4xl sm:leading-10">
			Сезонные товары
		</h2>
		<p class="mt-4 max-w-7xl text-xl leading-7 text-gray-500 lg:mx-auto">
			Обратите внимание на наши топовые позиции с самыми привлекательными ценами, если вы хотите строительные материалы купить со скидкой. Наш строительный интеренет магазин предлагает комфортную ценовую политику для своих клиентов, поэтому это одна из лучших баз стройматериалов в Нижнем Новгороде.
		</p>
	</div>
</div>




<!--
  This example requires Tailwind CSS v2.0+

  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
-->
<div class="bg-white">
	<div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
		<h2 class="sr-only">Products</h2>

		<div class="grid grid-cols-1 gap-y-4 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">


			{#each seasonalGoods as {id, name, price, unit, img, link}}
			<a sveltekit:prefetch href="/{link}" class="group">
				<div class="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
					<img src="{img}" alt="{name}." class="w-full h-full object-contain object-center group-hover:opacity-75">
				</div>
				<h3 class="mt-4 text-sm text-gray-700">{name}</h3>
				<p class="mt-1 text-lg font-medium text-gray-900">{price} руб/{unit}</p>
			</a>
				{/each}


		</div>
	</div>
</div>






<div class="bg-white overflow-hidden">
	<div class="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
		<div class="hidden lg:block bg-indigo-50 absolute top-0 bottom-0 left-3/4 w-screen"></div>
		<div class="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
			<div>
				<h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">Строительная база</h2>
				<h3 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
					Орбита-строй</h3>
			</div>
		</div>
		<div class="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
			<div class="relative lg:row-start-1 lg:col-start-2">
				<svg class="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20" width="404" height="384" fill="none"
					 viewBox="0 0 404 384" aria-hidden="true">
					<defs>
						<pattern id="de316486-4a29-4312-bdfc-fbce2132a2c1" x="0" y="0" width="20" height="20"
								 patternUnits="userSpaceOnUse">
							<rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor"/>
						</pattern>
					</defs>
					<rect width="404" height="384" fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"/>
				</svg>
				<div class="relative text-base mx-auto max-w-prose lg:max-w-none">
					<figure>
						<div class="aspect-w-12 aspect-h-7 lg:aspect-none">
							<img class="rounded-lg shadow-lg object-cover object-center"
								 src="https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/pages/serv_4.jpg" alt="stroymat"
								 width="1184" height="1376">
						</div>
					</figure>
				</div>
			</div>
			<div class="mt-8 lg:mt-0">
				<div class="mt-1 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
					<p>Приобрести стройматериалы в Нижнем Новгороде высокого качества по конкурентным ценам можно в течение
						нескольких минут. База строительных и отделочных материалов «Орбита-Строй» занимает площадь более, чем 1
						км2 и предлагает продукцию от таких производителей, как:</p>
					<ul>
						<li>Tarkett;</li>
						<li>EK;</li>
						<li>Ceresit;</li>
						<li>Makroflex;</li>
					</ul>
					<p>Строительная база имеет удобный подъезд автотранспорта, развитую инфраструктуру и просторные
						выставочные павильоны. Строительный магазин предоставляет услуги по погрузке при оптовой покупке на
						бесплатных условиях, возможно осуществить стройматериалы с доставкой собственным автотранспортом компании.</p>
					<p>Строительный интернет-магазин подойдёт тем, кто ценит время и качество. Выбрать товар заблаговременно
						оплатить покупку стройматериалов в Нижнем Новгороде и заказать их доставку по указанному адресу – дело
						нескольких минут. Стройбаза идёт навстречу постоянным клиентам и предоставляет гибкие дисконтные
						скидки.</p>
					<p>«Орбита-Строй» - строительный интернет магазин в Нижнем Новгороде для тех, кто уважает качество материалов и
						труд. «Орбита-Строй» - правильный выбор на пути к комфорту и надёжности.</p>
				</div>
			</div>
		</div>
	</div>
</div>
