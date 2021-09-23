import {
    ROUTER_FEATURED_PRODUCTS,
    ROUTER_GALLERY,
    ROUTER_LOGIN,
    ROUTER_PRODUCTS,
    ROUTER_USERS
} from "./constants/routers";

export const DATA = {
    navLinks: [
        {
            name: 'Products',
            url: ROUTER_PRODUCTS,
            color: '#a620d1'
        },
        {
            name: 'Users',
            url: ROUTER_USERS,
            color:'#28a745'
        },
        {
            name: 'Featured-products',
            url: ROUTER_FEATURED_PRODUCTS,
            color:'#3E424B'
        },
        {
            name: 'Gallery',
            url: ROUTER_GALLERY,
            color:'#E11584'
        },
        {
            name: 'LogOut',
            url: ROUTER_LOGIN,
            color:' #cf1717'
        },

    ],
    tableHeaderRow:["ID","Name","Edit","Delete"]
}
