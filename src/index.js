import Vue from 'vue';

import Breadcrumb from './component/Breadcrumb.vue';

Vue.use(VueRouter);

export default{
    Breadcrumb,
    install(Vue, options){
        const {
            moduleName = 'breadcrumbs-vue',            
            router,
            store
        } = options || {};


        if(!router && !store){
            throw Error('router and store must be passed in')
        }

        // Enhance store
        store && store.registerModule(moduleName, {

        });

        Vue.mixin({
            created(){

            },
            destroyed(){

            }
        });

        Vue.component(moduleName, Breadcrumb);
    }
};