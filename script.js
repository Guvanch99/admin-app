const data = {
    "users": [
        {
            "id": "90a10494-07c7-4c4d-94ee-c4b4d644553f",
            "userName": "Guvanch",
            "email": "awediyewguwanc@gmail.com",
            "password": "R3V2YW5jaDk5",
            "restrictedPromoCodes": [
                "HALYAVA"
            ]
        },
        {
            "id": "2557c52d-0a89-4fb4-bb54-2c1085fa55af",
            "userName": "Meret",
            "email": "wakejohns777@gmail.com",
            "password": "R3V2YW5jaDk5",
            "restrictedPromoCodes": []
        }
    ],
    "orders": [
        {
            "timeOrder": "30 09 2021 02:30:14",
            "deliveryTime": "30 09 2021 03:00:14",
            "user": {
                "userName": "Guvanch",
                "email": "awediyewguwanc@gmail.com"
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
        },
        {
            "timeOrder": "01 10 2021 10:58:09",
            "deliveryTime": "01 10 2021 11:28:09",
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
                }
            ],
            "gift": [],
            "address": {
                "street": "www",
                "house": "1",
                "entrance": "2",
                "storey": "3",
                "payment": "cash"
            },
            "totalItems": 1,
            "totalAmount": 20,
            "id": 3
        }
    ]
}


/*const {totalCombo, totalDurum, totalBeverage, total} = subTotalTypes.reduce(
    ({totalCombo, totalDurum, totalBeverage, total}, {subCombo, subDurum, subBeverage}) => {
        totalCombo += subCombo
        totalDurum += subDurum
        totalBeverage += subBeverage
        total += subCombo + subDurum + subBeverage

        return {totalCombo, totalDurum, totalBeverage, total}
    }, {
        totalCombo: 0,
        totalDurum: 0,
        totalBeverage: 0,
        total: 0
    }
)*/


const info = data.orders.filter(({user}) => user.email==='wakejohns777@gmail.com')
const b=info.reduce(
    (total, {totalAmount})=>{
        total+=totalAmount
        return total
    },0)
