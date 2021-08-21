import axios from 'axios';

const apifakestore = axios.create({
    baseURL:
});




// --- usar o metodo axios da forma abaixo nas paginas em que precisar, ou criar uma classe aqui e chamar nas paginas

// axios.get('https://api.github.com/users/ramosht/repos').then(response => console.log(response))
// axios.get(`https://api.github.com/${usuario}/ramosht/repos`).then(response => console.log(response))


function puxarProdutos() {
    axios.get('https://api.github.com/users/ramosht/repos').then(response => {
        const repositories = response.data;
        repositoriesName = [];
        repositories.map((repository) => {
            repositoriesName.push(repositories.name);
        });
        localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
    });
};



export puxarProdutos()