import { API } from '../config';
import queryString from "query-string";

export const getProducts = sortBy => {
    return fetch(`${API}/product/list?sortBy=${sortBy}&order=desc&limit=6`, {
        method: "GET"
    })
    .then(response => {
        if (!response.ok) {
            return response.json().then(data => {
                throw new Error(data.message);
            });
        }
        return response.json();
    })
    .catch(error => {
        console.error("Error fetching products:", error);
        throw new Error("Failed to fetch products");
    });
};


export const getCategories = () => {
    return fetch(`${API}/category/list`, {
        method: 'GET'
    }) 
        .then(response => {
            if (!response.ok) {
                return response.json().then(data => {
                    throw new Error(data.message);
                });
            }
            return response.json();
        })
        .catch(error => {
            console.error(error);
            throw new Error(error.message);
        });
};

export const getFilteredProducts = (skip, limit, filters = {}) => {
    const data = {
        limit,
        skip,
        filters
    };

    return fetch(`${API}/product/by/search`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            return response.json().then(data => {
                throw new Error(data.message || 'Failed to fetch filtered products');
            });
        }
        return response.json();
    })
    .catch(error => {
        console.error('Error fetching filtered products:', error);
        throw new Error('Failed to fetch filtered products');
    });
};

export const list = params => {
    const query = queryString.stringify(params);
    console.log("query", query);
    return fetch(`${API}/product/search?${query}`, {
        method: "GET"
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};
