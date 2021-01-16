export const state = () => ({
    categories: [],
    products: [],
    order: null
})

export const mutations = {
    setCategories(state, categories) {
        state.categories = categories
    },
    setProducts(state, products) {
        state.products = products
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

}
export const getters = {
    getProductById: state => (id) => {
        return state.products.find(product => product.id === id);
    }
}