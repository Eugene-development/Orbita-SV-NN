import { forEach, find } from "lodash";
export const get = async ({ params }) => {
  const { slugHead } = params;
  const headers = {
    Authorization: `Bearer ${ import.meta.env.VITE_TOKEN }`
  }
  const domain = import.meta.env.VITE_API_CRUD;
  const urlHead = `${ domain }/get-all-head/`;
  const heads = await fetch(urlHead, { headers });
  forEach(heads, async function (value) {
    const {id} = find(value, {'slug': slugHead});
    if (id){
      const url = `${ domain }/get-head/${ id }`;
      const res = await fetch(url, { headers });
      const rubrics = await res.json();
      return { body: { rubrics } }
    }
  });
}
