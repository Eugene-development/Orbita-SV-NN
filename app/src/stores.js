import { writable } from 'svelte/store';

export const informationMenu = writable(false);
export const mobileMenu = writable(false);
export const formPhone = writable(false)
export const formEmail = writable(true)

export const descriptionInfo = writable(true)
export const paymentInfo = writable(false)
export const deliveryInfo = writable(false)
