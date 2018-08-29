import './assets/css/main.scss';
import Vue from 'vue';
import HelloWorld from './components/helloworld/HelloWorld.vue';

Vue.config.devtools = true
let app = new Vue({
    el: '#app',
    data: {
        ViewComponent: { render: h => h('div', 'loading...') }
    },
    render (h) { return h(this.ViewComponent) }
});

app.ViewComponent = HelloWorld;