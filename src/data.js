import {
    ROUTER_FEATURED_PRODUCTS, ROUTER_FILEUPLOAD,
    ROUTER_GALLERY,
    ROUTER_LOGIN,
    ROUTER_PRODUCTS, ROUTER_STATISTICS,
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
            color: '#28a745'
        },
        {
            name: 'Featured-products',
            url: ROUTER_FEATURED_PRODUCTS,
            color: '#3E424B'
        },
        {
            name: 'Gallery',
            url: ROUTER_GALLERY,
            color: '#E11584'
        },
        {
            name: 'Statistics',
            url: ROUTER_STATISTICS,
            color: '#FD6A02'
        },
        {
            name: 'File-Upload',
            url: ROUTER_FILEUPLOAD,
            color: '#3498db'
        },
        {
            name: 'LogOut',
            url: ROUTER_LOGIN,
            color: ' #cf1717'
        }
    ],

    tableHeaderRow: ["ID", "Name", "Edit", "Delete"],

    selectOptionType: ['combo', 'doner', 'beverage'],

    typeContainer: [
        {
            color: "red",
            text: "Beverage"
        },
        {
            color: "green",
            text: "Combo"
        },
        {
            color: "brown",
            text: "Durum"
        }
    ],

    instructions: [
        {
            text: "1. Lorem ipsum bla bla bla Lorem ipsum bla bla bla Lorem ipsum bla bla bla ",
        },
        {
            text: "2. Lorem ipsum bla bla bla Lorem ipsum bla bla bla Lorem ipsum bla bla bla",
        },
        {
            text: "3. Lorem ipsum bla bla bla Lorem ipsum bla bla bla Lorem ipsum bla bla bla",
        }
    ]


}
