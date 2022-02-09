export const get = async ({ params }) => {
    const head = 5;
    // const { head } = params;
    const domain = import.meta.env.VITE_API_CRUD;
    const url = `${ domain }/get-head/${ head }`;
    const headers = {
        Authorization: `Bearer ${ import.meta.env.VITE_TOKEN }`
    }
    const res = await fetch(url, { headers });
    const rubricsXXX = await res.json();
    return { body: { rubricsXXX } }
}
