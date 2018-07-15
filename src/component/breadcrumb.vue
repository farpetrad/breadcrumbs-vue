<template>
    <div class="container row">         
        <div v-if="doBreadcrumb" v-for="link in routes" :key="link.path"
             v-bind:class="{'col-sm-1 col-md-1 col-lg-1': crumbSizeSmall(link), 
                            'col-sm-3 col-md-3 col-lg-3' : crumbSizeMedium(link) , 
                            'col-sm-6 col-md-6 col-lg-6' : crumbSizeLarge(link)}">
            <span>
                <router-link :to="{ name: link.name, params: routeParams(link)}">{{link.meta.bcLinkText}} :</router-link>
            </span>
            <span v-if="linkText(link) !== ''">{{linkText(link)}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'breadcrumb',
        props: ['route'],
        computed: {            
            routes() {
                var currentIndex = this.$router.options.routes.findIndex(item => item.name == this.route.name);
                var routes = this.$router.options.routes.slice();   // make a copy so we don't effect the routes in the router
                routes.length = currentIndex+1;
                return routes;
            },
            linkText() {                
                return (link) => this.computeLinkText(link);  // wrap computeLinkText to make reactive
            },
            doBreadcrumb() {
                // only show breadcrumbs if we have more than just 1
                var data = this.routes;
                return data.length > 1;
            },
            routeParams() {
                return (link) => {
                    // attempt to go through the params if they exist and try to use the vuex getters defined to create the route params
                    if (link.meta.bcLinkParams) {
                        var params = { ...link.meta.bcLinkParams };
                        // each property defined in the bcLinkParams meta data defines a vuex getter to call so update its value to the resulting data
                        for (var key in params) {
                            params[key] = this.$store.getters[params[key]];
                        }
                        return params;
                    }
                    else
                        return {};
                };
            },
            // used to determine which css bootstrap column size we should apply
            crumbSizeSmall() {  // must use arrow functions to pass in params
                return (link) => {
                    var linkText = this.computeLinkText(link);
                    var size = this.sizeLink(link);
                    return size <= 6;
                };
            },
            crumbSizeMedium() {
                return (link) => {  // must use arrow functions to pass in params
                    var linkText = this.computeLinkText(link);
                    var size = this.sizeLink(link);
                    return size > 6 && size <= 29;
                };
            },
            crumbSizeLarge() {
                return (link) => {  // must use arrow functions to pass in params
                    var linkText = this.computeLinkText(link);
                    var size = this.sizeLink(link);
                    return size > 29;
                };
            }
        },
        methods: {
            sizeLink(link) {
                // Determine the length of the text were going to display
                var linkText = this.computeLinkText(link);
                var size = link.meta.bcLinkText.length + linkText.length;
                return size;
            },
            computeLinkText(link) {
                // try to call the vuex store getter defined in the route meta data or an empty string, avoid returning undefined so return a ''
                return link.meta.bcGetter ? (this.$store.getters[link.meta.bcGetter] === undefined ? '' : this.$store.getters[link.meta.bcGetter]) : '';
            }
        }
    }
</script>
