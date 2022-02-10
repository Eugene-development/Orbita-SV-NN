<script>
    import {clickOutside} from "../../use/click_outside.js";

    import MobileMenu from "./mobile/index.svelte"
    import {useHead} from "../../use/content/header";
    const {head, information} = useHead; //TODO влоенную деструктуризацию примени
    const {left: leftInfo, right: rightInfo} = information[0]

    import {useVisible} from "../../use/visible";
    import {informationMenu} from '../../stores.js';

    const {invert} = useVisible;

    const changeVisibleInformationMenu = () => informationMenu.update(invert)
    let visibleInformationMenu;
    informationMenu.subscribe(value => visibleInformationMenu = value);

    // const setId = (id) => localStorage.setItem('inCart', id);

</script>

<header>
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="relative bg-gradient-to-tr from-indigo-500 via-indigo-600 to-indigo-500">
        <div class="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
            <div class="pr-16  sm:text-center sm:px-16">
                <div class="font-medium text-white text-base">
                    <span class="md:hidden">тел.: <strong>8 (800) 555-8-111</strong> (звонок бесплатный)</span>
                    <span class="hidden md:inline">тел.: <strong>8 (800) 555-8-111</strong> (звонок бесплатный)</span>
                    <span class="block sm:ml-5 sm:inline-block">почта: <strong>info@orbita-stroy.com</strong></span>
                    <span class="block sm:ml-5 sm:inline-block">режим: Пн-Пт 8:00-17:30; Сб 9:00-16:00</span>
                </div>
            </div>
        </div>
    </div>


    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="relative bg-white">
        <div class="absolute inset-0 shadow z-30 pointer-events-none" aria-hidden="true"></div>
        <div class="relative z-20">
            <div class="max-w-7xl mx-auto flex justify-between items-center px-4 py-4 sm:px-6 sm:py-3 lg:px-8 md:justify-start md:space-x-10">
                <div>
                    <a href="/" class="flex">
                        <span class="sr-only">Logo</span>
                        <img class="h-14 w-auto sm:h-14" src="https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/logo/logo.png" alt="Logo">
                    </a>
                </div>
                <div class="-mr-2 -my-2 md:hidden">
                    <button type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
                        <span class="sr-only">Open menu</span>
                        <!-- Heroicon name: outline/menu -->
                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
                <div class="hidden md:flex-1 md:flex md:items-center md:justify-between">
                    <nav class="flex space-x-10">
                        <a href="/company" class="text-lg font-medium text-gray-600 hover:text-gray-900"> Компания </a>
                        <div>
                            <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" -->
                            <button on:click={changeVisibleInformationMenu} type="button" class="text-gray-600 group bg-white rounded-md inline-flex items-center text-lg font-medium focus:outline-none focus:text-red-700" aria-expanded="false">
                                <span>Информация</span>
                                <!--
                                  Heroicon name: solid/chevron-down

                                  Item active: "text-gray-600", Item inactive: "text-gray-400"
                                -->
                                <svg class="text-red-700 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                            </button>

                            <!--
                              'More' flyout menu, show/hide based on flyout menu state.

                              Entering: "transition ease-out duration-200"
                                From: "opacity-0 -translate-y-1"
                                To: "opacity-100 translate-y-0"
                              Leaving: "transition ease-in duration-150"
                                From: "opacity-100 translate-y-0"
                                To: "opacity-0 -translate-y-1"
                            -->
                            {#if visibleInformationMenu}
                                <div class="hidden md:block absolute z-10 top-full inset-x-0 transform shadow-lg">
                                    <div class="absolute inset-0 flex">
                                        <div class="bg-white w-1/2"></div>
                                        <div class="bg-gray-50 w-1/2"></div>
                                    </div>
                                    <div class="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
                                        <nav class="grid gap-y-10 px-4 py-8 bg-white sm:grid-cols-2 sm:gap-x-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-12">
                                            <div>
<!--                                                <h3 class="text-sm font-medium tracking-wide text-gray-500 uppercase">Company</h3>-->
                                                <ul role="list" class="mt-5 space-y-6" use:clickOutside on:outclick={changeVisibleInformationMenu}>
                                                    {#each leftInfo as {href, displayName}}
                                                    <li class="flow-root">
                                                        <a href="{href}" on:click={changeVisibleInformationMenu}  class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">
                                                            <!-- Heroicon name: outline/information-circle -->
                                                            <svg class="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                            </svg>
                                                            <span class="ml-4">{displayName}</span>
                                                        </a>
                                                    </li>
                                                    {/each}
                                                </ul>
                                            </div>
                                            <div>
<!--                                                <h3 class="text-sm font-medium tracking-wide text-gray-500 uppercase">Resources</h3>-->
                                                <ul role="list" class="mt-5 space-y-6">
                                                    {#each rightInfo as {href, displayName}}
                                                        <li class="flow-root">
                                                            <a href="{href}" on:click={changeVisibleInformationMenu} on:outclick={changeVisibleInformationMenu} class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">
                                                                <!-- Heroicon name: outline/information-circle -->
                                                                <svg class="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                                </svg>
                                                                <span class="ml-4">{displayName}</span>
                                                            </a>
                                                        </li>
                                                    {/each}
                                                </ul>
                                            </div>
                                        </nav>
                                        <div class="bg-gray-50 px-4 py-8 sm:py-12 sm:px-6 lg:px-8 xl:pl-12">
                                            <div>
                                                <h3 class="text-sm font-medium tracking-wide text-gray-500 uppercase">Последнее из блога</h3>
                                                <ul role="list" class="mt-6 space-y-6">
                                                    <li class="flow-root">
                                                        <a href="#" class="-m-3 p-3 flex rounded-lg hover:bg-gray-100">
                                                            <div class="hidden sm:block flex-shrink-0">
                                                                <img class="w-32 h-20 object-cover rounded-md" src="https://images.unsplash.com/photo-1558478551-1a378f63328e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2849&q=80" alt="">
                                                            </div>
                                                            <div class="w-0 flex-1 sm:ml-8">
                                                                <h4 class="text-base font-medium text-gray-900 truncate">Boost your conversion rate</h4>
                                                                <p class="mt-1 text-sm text-gray-500">Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.</p>
                                                            </div>
                                                        </a>
                                                    </li>

                                                    <li class="flow-root">
                                                        <a href="#" class="-m-3 p-3 flex rounded-lg hover:bg-gray-100">
                                                            <div class="hidden sm:block flex-shrink-0">
                                                                <img class="w-32 h-20 object-cover rounded-md" src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2300&q=80" alt="">
                                                            </div>
                                                            <div class="w-0 flex-1 sm:ml-8">
                                                                <h4 class="text-base font-medium text-gray-900 truncate">How to use search engine optimization to drive traffic to your site</h4>
                                                                <p class="mt-1 text-sm text-gray-500">Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.</p>
                                                            </div>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="mt-6 text-sm font-medium">
                                                <a href="/blog" on:click={changeVisibleInformationMenu} class="text-red-700 hover:text-red-800"> Перейти в блог <span aria-hidden="true">&rarr;</span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            {/if}
                        </div>
                        <a href="/blog" class="text-lg font-medium text-gray-600 hover:text-gray-900"> Блог </a>
                        <a href="/information/contact" class="text-lg font-medium text-gray-600 hover:text-gray-900"> Контакты </a>
                        <a href="https://vk.com/orbita_stroy" target="_blank" class="text-lg font-medium text-gray-600 hover:text-gray-900"> VK </a>
                    </nav>
                    <div class="flex items-center md:ml-12">
                        <a href="shop/cart" class="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-700/50"> Корзина <div class="ml-1 animate-pulse"> (0)</div> </a>
                    </div>
                </div>
            </div>
        </div>

        <MobileMenu/>

    </div>


    <div class="bg-gray-50 pt-6 sm:pt-8">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-4xl mx-auto text-center">
                <h2 class="text-3xl font-extrabold text-gray-800 sm:text-4xl">
                   Доставка строительных и отделочных материалов до объекта
                </h2>
                <p class="mt-3 text-xl text-indigo-800 sm:mt-4">
                    При заказе через каталог стройматериалов на сайте для вас скидка 5%
                </p>
            </div>
        </div>
        <div class="mt-6 pb-4 bg-white sm:pb-8">
            <div class="relative">
                <div class="absolute inset-0 h-1/2 bg-gray-50 border-b border-gray-200"></div>
                <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="w-full mx-auto">

                        <div class="rounded-lg bg-white shadow-xl shadow-indigo-700/50 lg:grid lg:grid-cols-7 ">
                            {#each head as {id, slug, name}}
                                    <a href='/rubric/{slug}/?id={id}'

                                       class="flex flex-col bg-gradient-to-tr hover:bg-gradient-to-bl from-indigo-500 via-indigo-700 to-indigo-600 border-b border-gray-100 p-4 text-center sm:border-0 sm:border-r sm:border-l hover:bg-red-800">
                                        <span class="order-2 mt-1 text-base leading-6 font-medium text-gray-50">
                                            { name }
                                        </span>
                                        <input type="hidden" name="id" bind:value={id}>
                                    </a>

                            {/each}
                        </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>

</header>

