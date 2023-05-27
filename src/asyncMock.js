
const products = [
    { id: 1, name: "Fernet", img: "https://i.im.ge/2023/05/27/hLgKpS.fernet-branca-1lt.jpg", price: 5000, stock: 5, category: "fernet" },
    { id: 2, name: "Gancia", img: "https://i.im.ge/2023/05/27/hL8Fe1.gancia-americano-aperitivo-950ml11-bf7834f088aa34805b16661029164377-640-0.jpg", price: 6000, stock: 1, category: "gancia" },
    { id: 3, name: "Vino", img: "https://i.im.ge/2023/05/27/hL8ucP.Vino-Tinto-Toro-1-lt-1-4658.webp ", price: 3000, stock: 2, category: "vino" }
]

const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

const getProductsByCategory = (CategoryId) => {
    const category = products.map((product)=> product.category===CategoryId)
    return category
}
const getProductById = (ItemId) => {
    const Item = products.map((product)=> product.id===ItemId)
    return Item
}



export { getProducts, getProductsByCategory, getProductById }
