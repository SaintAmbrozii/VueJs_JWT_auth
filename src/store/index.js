import {createApp} from "vue";
import {createStore} from "vuex";
import {auth} from "./auth.module";

const store = createStore({
    modules: {
        auth,
    },

})

const app = createApp();
app.use(store);

export default store