import { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || [])
    const [quantity, setQuantity] = useState(1)

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    const removeItem = (product) => {
        const exist = cart.find(x => x.id === product.id);

        if (exist.quantity === 1) {
            setCart(cart.filter(x => x.id !== product.id));

        } else {
            setCart(cart.map((x) => x.id === product.id ? { ...exist, quantity: exist.quantity - 1 } : x))
        }
      }

    const handleAddToCart = (item) => {
        const exist = cart.find(x => x.id === item.id);

        if(exist) {
        setCart(cart.map(x => x.id === item.id ? { ...exist, quantity: exist.quantity + 1 } : x))
        

        } else {
            setCart([...cart, {...item, quantity: 1}])
            localStorage.setItem("cart", JSON.stringify(cart))
        }      
    }

    return (
        <CartContext.Provider value={{cart, setCart, removeItem, handleAddToCart, quantity, setQuantity}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)