import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            name: 'Kim',
            age: 20,
            likes: 30,
            isLiked: false,
        }
    },
    mutations: {
        changeName(state) {
            state.name = 'park'
        },
        addAge(state, payload) {
            state.age+=payload;
        },
        changeLike(state) {
            if (state.isLiked) state.likes--;
            else state.likes++;
            state.isLiked = !state.isLiked
        }
    }
})

export default store;