import { API } from '../config';

export const getProducts = sortBy => {
    return fetch(`${API}/product/list?sortBy=${sortBy}&order=desc&limit=6`, {
        method: "GET"
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};