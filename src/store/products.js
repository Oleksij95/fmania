export default {
    state: {
        products: [],
        product: {},
    },
    mutations: {
        setProducts(state, products){
            state.products = products
        },
        setProduct(state, product){
            state.product = product
        }
    },
    actions: {
        async fetchProducts({commit}){
            try{
                await fetch("/product.json").then((response) => {
                    return response.json()
                  }).then((data) => {
                    commit('setProducts', data)
                  });
            } catch (e) {
                console.log(e)
            }
        },

        async fetchProductInfo({commit}, product_id) {
            try{
                await fetch("http://zvizduli.ddns.net:8000/?id=" + product_id, {
                    method: 'GET',
                    headers: {
                      'Content-Type': 'application/json'
                    }
                }).then((response) => {
                    return response.json()
                }).then((data) => {
                    console.log(data.error)
                    if (!data.error) {
                        commit('setProduct', data)
                    }
                    
                }) 
            } catch (e) {
                console.log(e)
            } 
        }

    },
    getters: {
        products: s => s.products,
        product: s => s.product
    }
}
