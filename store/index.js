export const state = () => ({
    categories: [],
    products: [],
    order: {
        products: [],
        total: 0.0,
        totalQty: 0,
        date: new Date()
    }
})

export const mutations = {
    setCategories(state, categories) {
        state.categories = categories;
    },
    setProducts(state, products) {
        state.products = products;
    },
    setProductOrder(state, newProduct) {
        let order = { ...this.state.order }
        let products = this.state.products;
        const productInfo = products.find(item => item.id === newProduct.id);
        console.log("AddPRoduct:", productInfo)

        if (productInfo == undefined) return false;

        const productIndex = order.products.findIndex(product => product.id === newProduct.id)
        if (productIndex > -1) {
            order.products[productIndex].qty += newProduct.qty;
            order.totalQty += newProduct.qty;
        } else {
            productInfo.qty = 1;
            order.products.push(productInfo)
            order.totalQty += 1
        }
        order.total += productInfo.price;

        state.order = order;
    }
}

export const actions = {
    async getCategories({ commit }) {
        try {
            await this.$axios.$get("http://localhost:1337/categories/")
                .then(res => {
                    console.log(res)
                    commit('setCategories', res)
                });

        } catch (error) {
            console.log(error)
        }

    },

    async getProducts({ commit }) {
        try {
            await this.$axios.$get("http://localhost:1337/products/")
                .then(response => {
                    console.log(response)
                    commit('setProducts', response)
                });

        } catch (error) {
            console.log(error)
        }

    },
    async updateOrder({ commit }, newProduct) {
        commit('setProductOrder', newProduct)
    }

}
export const getters = {
    getProductById: state => (id) => {
        return state.products.find(product => product.id === id);
    },
    getOrder: state => {
        return state.order
    }
}