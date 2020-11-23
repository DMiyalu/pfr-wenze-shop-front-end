import { SET_PRODUCT_LIST } from './allProduct.types'


const INITIAL_STATE = {
    products : {
        legumes: [
            {
                productID: 1,
                title: "Matembele",
                description: "Patates douces, provenant du Kongo-Central",
                price: 5,
                number: 1,
                image: require('../../assets/product/matembele.jpg')
            },
            {
                productID: 2,
                title: "Pondu",
                description: "Pondu caoutchou, provenant de Bandundu",
                price: 5,
                number: 1,
                image: require('../../assets/product/pondu.jpg')
            },
            {
                productID: 1,
                title: "bitekuteku",
                description: "Legumes vertes, provenant du Kasai",
                price: 3,
                number: 1,
                image: require('../../assets/product/bitekuteku.jpg')
            }
        ],
        viandes: [
            {
                productID: 4,
                title: "Poulet Wiki",
                description: "Lorem ipsum dolor sit amet",
                price: 8,
                number: 1,
                image: require('../../assets/product/viande-poulet.jpg')
            },
            {
                productID: 5,
                title: "Viande Hachée",
                description: "Lorem ipsum dolor sit amet",
                price: 5,
                number: 1,
                image: require('../../assets/product/viande_hachee.jpg')
            },
            {
                productID: 6,
                title: "Matembele",
                description: "Lorem ipsum dolor sit amet",
                price: 5,
                number: 1,
                image: require('../../assets/product/cuisse.jpg')
            }
        ],
        boissons: [
            {
                productID: 7,
                title: "Coca",
                description: "Lorem ipsum dolor sit amet",
                price: 5,
                number: 1,
                image: require('../../assets/product/boissons.jpeg')
            },
            {
                productID: 8,
                title: "Fanta",
                description: "Lorem ipsum dolor sit amet",
                price: 5,
                number: 1,
                image: require('../../assets/product/boissons2.jpeg')
            },
            {
                productID: 9,
                title: "Djino",
                description: "Lorem ipsum dolor sit amet",
                price: 5,
                number: 1,
                image: require('../../assets/product/jus_de_fruit.jpeg')
            },
            {
                productID: 10,
                title: "Jus Fraizia",
                description: "Lorem ipsum dolor sit amet",
                price: 5,
                number: 1,
                image: require('../../assets/product/cuisse.jpg')
            }
        ],
        farine: [
            {
                productID: 11,
                title: "Riz Elephant",
                description: "Lorem ipsum dolor sit amet",
                price: 5,
                number: 1,
                image: require('../../assets/product/riz.jpg')
            },
            {
                productID: 12,
                title: "Riz AA",
                description: "Lorem ipsum dolor sit amet",
                price: 5,
                number: 1,
                image: require('../../assets/product/riz2.jpg')
            },
            {
                productID: 13,
                title: "Farine Midema",
                description: "Lorem ipsum dolor sit amet",
                price: 5,
                number: 1,
                image: require('../../assets/product/farine.jpg')
            },
            {
                productID: 14,
                title: "Farine Bel's",
                description: "Lorem ipsum dolor sit amet",
                price: 5,
                number: 1,
                image: require('../../assets/product/farine2.jpg')
            }
        ],
        cake: [
            {
                productID: 15,
                title: "Sandwich",
                description: "Lorem ipsum dolor sit amet",
                price: 5,
                number: 1,
                image: require('../../assets/product/sandwich.jpg')
            },
            {
                productID: 16,
                title: "Sandwich",
                description: "Lorem ipsum dolor sit amet",
                price: 5,
                number: 1,
                image: require('../../assets/product/sandwich2.jpg')
            },
            {
                productID: 17,
                title: "Sandwich",
                description: "Lorem ipsum dolor sit amet",
                price: 5,
                number: 1,
                image: require('../../assets/product/sandwich3.jpg')
            },
            {
                productID: 18,
                title: "Sandwich",
                description: "Lorem ipsum dolor sit amet",
                price: 5,
                number: 1,
                image: require('../../assets/product/sandwich4.jpg')
            }
        ]
    }
}


export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SET_PRODUCT_LIST:
            return {...state, products: action.payload}
        default:
            return state
    }
}
