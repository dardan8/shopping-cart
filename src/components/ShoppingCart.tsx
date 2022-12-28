import { useShoppingCart } from "../context/ShoppingCartContext"
import { formatCurrency } from "../utilities/formatCurrency"
import { CartItem } from "./CartItem"
import storeItems from "../data/items.json"

type ShoppingCartProps = {
    isOpen: boolean
}

export function ShoppingCart({isOpen}: ShoppingCartProps) {

    const {closeCart, cartItems} = useShoppingCart()
  return (
    <div>
        {
            isOpen ? (
                <>
                 <button onClick={closeCart}>
                Close
            </button>
            <div>
                {cartItems.map(item => (
                    <CartItem key={item.id} {...item}/>

                ))}
                <div>
                    Total:

                    {
                    formatCurrency(cartItems.reduce((total, cartItem) =>
                   {
                    const item = storeItems.find(i => i.id === cartItem.id)
                    return total + (item?.price || 0)* cartItem.quantity
                   }, 0)
                   )}


                </div>
            </div>

            </>

            ) : ""
               
        }

    </div>
  )
}

