//write a function to fetch the products from the api 'https://fakestoreapi.com/products' and return the data

export const  fetchAllProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    return data;
}
export const fetchCategories = async () => {
    const response = await fetch('https://fakestoreapi.com/products/categories');
    const data = await response.json();
    return data;
}
export const getProductsByCategory = async (category) => {
    const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
    const data = await response.json();
    return data;
}
export const getProductById = async (id) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();
    return data;
}