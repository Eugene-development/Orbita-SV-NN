export const get = async ({ params }) => {
    const { idCategory } = params;
    const domain = import.meta.env.VITE_API_CRUD;
    const url = `${ domain }/get-category/${ idCategory }`;
    const headers = {
        Authorization: `Bearer ${ import.meta.env.VITE_TOKEN }`
    }
    const res = await fetch(url, { headers });
    const products = await res.json();
    const pathAWS = import.meta.env.VITE_IMAGE_PRODUCTS
    return { body: { products, pathAWS } }
}
