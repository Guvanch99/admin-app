 orders= [
    {
        "timeOrder": "30 09 2021 02:30:14",
        "deliveryTime": "30 09 2021 03:00:14",
        "user": {
            "userName": "Guvanch",
            "email": "wakejohns777@gmail.com"
        },
        "cart": [
            {
                "id": 1,
                "name": "products.1.name",
                "price": "20",
                "amount": 4,
                "src": "https://i.ibb.co/vhs7GF2/kombo-cow.jpg",
                "type": "combo",
                "subTotal": 80
            },
            {
                "id": 2,
                "name": "products.2.name",
                "price": 8,
                "amount": 3,
                "src": "https://i.ibb.co/WxdDstk/kombo-chicken.jpg",
                "type": "combo",
                "subTotal": 24
            },
            {
                "id": 4,
                "name": "products.4.name",
                "price": 9,
                "amount": 3,
                "src": "https://i.ibb.co/KLDyxjX/Mega-Doner.jpg",
                "type": "durum",
                "subTotal": 27
            },
            {
                "id": 6,
                "name": "products.6.name",
                "price": 5.5,
                "amount": 3,
                "src": "https://i.ibb.co/WsDJvjr/Doner-Tukey.png",
                "type": "durum",
                "subTotal": 16
            }
        ],
        "gift": [
            {
                "id": 2,
                "name": "products.2.name",
                "src": "https://i.ibb.co/WxdDstk/kombo-chicken.jpg",
                "amount": 1,
                "price": 0,
                "description": "products.2.description",
                "type": "combo",
                "promoCode": "HALYAVA"
            }
        ],
        "address": {
            "street": "aaaaaa",
            "house": "11",
            "entrance": "2",
            "storey": "3",
            "payment": "cash"
        },
        "totalItems": 14,
        "totalAmount": 147.5,
        "id": 1
    },
    {
        "timeOrder": "30 09 2021 02:34:49",
        "deliveryTime": "30 09 2021 03:04:49",
        "user": {
            "userName": "Meret",
            "email": "wakejohns777@gmail.com"
        },
        "cart": [
            {
                "id": 1,
                "name": "products.1.name",
                "price": "20",
                "amount": 1,
                "src": "https://i.ibb.co/vhs7GF2/kombo-cow.jpg",
                "type": "combo",
                "subTotal": 20
            },
            {
                "id": 8,
                "name": "products.8.name",
                "price": 6.5,
                "amount": 1,
                "src": "https://i.ibb.co/BC88NNp/Doner-bbq.png",
                "type": "durum",
                "subTotal": 6
            },
            {
                "id": 11,
                "name": "products.11.name",
                "price": 2,
                "amount": 2,
                "src": "https://i.ibb.co/1MnR86b/coca-cola-vanilla.png",
                "type": "beverage",
                "subTotal": 4
            },
            {
                "id": 2,
                "name": "products.2.name",
                "price": 8,
                "amount": 2,
                "src": "https://i.ibb.co/WxdDstk/kombo-chicken.jpg",
                "type": "combo",
                "subTotal": 16
            }
        ],
        "gift": [],
        "address": {
            "street": "qwww",
            "house": "12",
            "entrance": "1",
            "storey": "2",
            "payment": "card"
        },
        "totalItems": 6,
        "totalAmount": 46.5,
        "id": 2
    }
]

const subTotalTypes=orders.map(({cart})=>cart.reduce(
        ({subCombo,subDurum,subBeverage}, {type,subTotal}) => {
            type==='combo' ? subCombo+=subTotal:null
            type==="durum" ? subDurum+=subTotal:null
            type==="beverage" ? subBeverage+=subTotal:null

            return {subCombo,subDurum,subBeverage}
        },
        {
            subCombo: 0,
            subDurum: 0,
            subBeverage: 0
        }
    )
)

const TotalTypes=subTotalTypes.reduce(
    ({totalCombo,totalDurum,totalBeverage}, {subCombo,subDurum,subBeverage}) =>{
        totalCombo+=subCombo
        totalDurum+=subDurum
        totalBeverage+=subBeverage

        return {totalCombo,totalDurum,totalBeverage}
    }, {
     totalCombo: 0,
     totalDurum: 0,
     totalBeverage: 0
 }
)

const GetTotals=()=>{
    const subTotalTypes=orders.map(({cart})=>cart.reduce(
            ({subCombo,subDurum,subBeverage}, {type,subTotal}) => {
                type==='combo' ? subCombo+=subTotal:null
                type==="durum" ? subDurum+=subTotal:null
                type==="beverage" ? subBeverage+=subTotal:null

                return {subCombo,subDurum,subBeverage}
            },
            {
                subCombo: 0,
                subDurum: 0,
                subBeverage: 0
            }
        )
    )

    const TotalTypes=subTotalTypes.reduce(
        ({totalCombo,totalDurum,totalBeverage}, {subCombo,subDurum,subBeverage}) =>{
            totalCombo+=subCombo
            totalDurum+=subDurum
            totalBeverage+=subBeverage

            return {totalCombo,totalDurum,totalBeverage}
        }, {
            totalCombo: 0,
            totalDurum: 0,
            totalBeverage: 0
        }
    )

}
