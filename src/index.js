import Vue from "vue"
import store from "./store"
import App from "./app"
new Vue({
    el: `#yohane`,
    template: `<App/>`,
    components: {App},
    store
})
