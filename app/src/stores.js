import { writable } from 'svelte/store';
import { browser} from "$app/env";

export const informationMenu = writable(false);
export const mobileMenu = writable(false);
export const formPhone = writable(false)
export const formEmail = writable(true)

export const descriptionInfo = writable(true)
export const paymentInfo = writable(false)
export const deliveryInfo = writable(false)

export const lengthCart = writable(0)

// export const InCart = writable(browser && localStorage.getItem('inCart') )
 export const InCart = writable([])


import { v4 as uuid } from '@lukeed/uuid';

// if (!(browser &&localStorage.getItem('dataS'))){
//   writable(browser && localStorage.setItem('dataS', uuid()))
// }
