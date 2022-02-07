<script context="module">
	export async function load({ params, fetch, session, stuff }) {

		const res = await fetch("/api/header/heads")
		const heads = await res.json();

		const data = heads.heads.data
		return {
			props: {
				data
			}
		}

	}
</script>

<script>
	export let data;
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>


{#each data as {name}}
	<p class="px-2 border text-2xl bg-white w-full m-3">{name}</p>
{/each}

<div class="mt-20 max-w-7xl mx-auto sm:px-6 lg:px-8">
	<div class="lg:text-center">
		<p class="text-base leading-6 text-teal-800 font-semibold tracking-wide uppercase"></p>
		<h2 class=" mt-2 text-4xl leading-12 font-extrabold tracking-tight text-gray-800 sm:text-4xl sm:leading-10">
			Сезонное предложение
		</h2>
		<p class="mt-4 max-w-7xl text-xl leading-7 text-gray-500 lg:mx-auto">
			Если вы хотите строительные материалы купить со скидкой, то обратите внимание на наши топовые позиции с самыми привлекательными ценами. Наш строительный интеренет магазин предлагает комфортную ценовую политику для своих клиентов, поэтому это одна из лучших баз стройматериалов в Нижнем Новгороде.
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

		<div class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
			<a href="#" class="group">
				<div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
					<img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg" alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." class="w-full h-full object-center object-cover group-hover:opacity-75">
				</div>
				<h3 class="mt-4 text-sm text-gray-700">Earthen Bottle</h3>
				<p class="mt-1 text-lg font-medium text-gray-900">$48</p>
			</a>

			<a href="#" class="group">
				<div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
					<img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg" alt="Olive drab green insulated bottle with flared screw lid and flat top." class="w-full h-full object-center object-cover group-hover:opacity-75">
				</div>
				<h3 class="mt-4 text-sm text-gray-700">Nomad Tumbler</h3>
				<p class="mt-1 text-lg font-medium text-gray-900">$35</p>
			</a>

			<a href="#" class="group">
				<div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
					<img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg" alt="Person using a pen to cross a task off a productivity paper card." class="w-full h-full object-center object-cover group-hover:opacity-75">
				</div>
				<h3 class="mt-4 text-sm text-gray-700">Focus Paper Refill</h3>
				<p class="mt-1 text-lg font-medium text-gray-900">$89</p>
			</a>

			<a href="#" class="group">
				<div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
					<img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg" alt="Hand holding black machined steel mechanical pencil with brass tip and top." class="w-full h-full object-center object-cover group-hover:opacity-75">
				</div>
				<h3 class="mt-4 text-sm text-gray-700">Machined Mechanical Pencil</h3>
				<p class="mt-1 text-lg font-medium text-gray-900">$35</p>
			</a>

			<!-- More products... -->
		</div>
	</div>
</div>






<div class="bg-white overflow-hidden">
	<div class="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
		<div class="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen"></div>
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
