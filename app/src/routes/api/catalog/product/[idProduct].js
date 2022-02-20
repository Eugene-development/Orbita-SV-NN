export const get = async ({ params }) => {
    const { idProduct } = params;
    const domain = import.meta.env.VITE_API_CRUD;
    const url = `${ domain }/get-product/${ idProduct }`;
    const headers = {
        Authorization: `Bearer ${ import.meta.env.VITE_TOKEN }`
    }
    const res = await fetch(url, { headers });
    const product = await res.json();
    return { body: { product } }
}
