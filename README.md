# breadcrumbs-vue
Breadcrumbs for vuejs2 and vue-router through the vuex store

---
## Useage
Breadcrumbs can be enabled through adding meta data properties to routes.  Breadcrumbs are made of one or two parts.  A static text part and an optional dynamic text part that can be pulled from the vuex store.  Think Category and Sub category.  The breadcrumb provides an anchor tag on the static part of the breadcrumb for navigation.  When making use of breadcrumbs all routes must be named.

Example: 

Assuming the vuex getter currentCategory will return 'Science Fiction'

```
export default new VueRouter({
    routes: [
        {
            path: '/',
            props: false,
            name: 'Home',
            component: 'book-categories',
            meta:{
                bcLinkText: 'Home'
            }
        },
        {
            path: '/Books',
            name: 'Books',
            component: 'books',
            props: false,
            meta: {
                bcGetter: 'currentCategory',
                bcLinkText: 'Books'

            }
        }
    ]
})
```
This would render as

Home

And after navigation to the Books route

Home -> Books: Science Fiction



---

## Route Meta Data

#### bcDynamic : boolean

#### bcGetter : string
The getter to call on the vuex store to retrieve the dynamic part of the breadcrumb

#### bcLinkText : string
The static text part of the breadcrumb

#### bcLinkParams : object
An object for constructing the link for the breadcrumb.  Each property name is the route parameter name and its value is a vuex store getter to call to get that value.

Example:

Assuming the vuex getter currentCategory will return 'Science Fiction' and that the getter currentCategoryId returns 4

```
export default new VueRouter({
    routes: [
        {
            path: '/',
            props: false,
            name: 'Home',
            component: 'book-categories',
            meta:{
                bcLinkText: 'Home'
            }
        },
        {
            path: '/Books/:categoryId',
            name: 'Books',
            component: 'books',
            props: false,
            meta: {
                bcGetter: 'currentCategory',
                bcLinkText: 'Books'
                bcLinkParams: { categoryId: 'currentCategoryId' }
            }
        },
    ]
})
```

The rendering of the breadcrums would be the same as above however when the user selects a book and navigates to the Book route and is viewing a book the breadcrumb would provide a link in the form of /RouteName/paramName/value.

See samples.