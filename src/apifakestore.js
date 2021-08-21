import axios from 'axios';

// const apifakestore = axios.create({
//     baseURL:
// });

// --- usar o metodo axios da forma abaixo nas paginas em que precisar, ou criar uma classe aqui e chamar nas paginas

// axios.get('https://api.github.com/users/ramosht/repos').then(response => console.log(response))
// axios.get(`https://api.github.com/${usuario}/ramosht/repos`).then(response => console.log(response))


// function puxarProdutos() {
//     axios.get('https://api.github.com/users/ramosht/repos').then(response => {
//         const repositories = response.data;
//         repositoriesName = [];
//         repositories.map((repository) => {
//             repositoriesName.push(repositories.name);
//         });
//         localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
//     });
// };

// export puxarProdutos()


class apiFakeStore {
    constructor() {
        this.api = axios.create({
            baseURL: 'https://fakestoreapi.com'
        })
    }
    getProducts = () => {
        return this.api.get('/products')
    }
    getProduct = (id) => {
        return this.api.get(`/products/${id}`)
    }
    getCategoriesProducts = (category) => {
        return this.api.get(`/products/category/${category}`)
    }
}

export default new apiFakeStore()


