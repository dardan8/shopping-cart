# Shopping-cart

Shopping cart using ReactJS.
Check it out live at https://dardan8.github.io/shopping-cart/

## How it works?

There are two pages. Home and Store.
In the store the store items are displayed and can be added to the cart. Quantity can be increased or reduced. Clicking on the cart icon, the shopping cart panel opens that displays all items that are added to the cart.

## React Components / Pages

### 1. Home

The Home page simply displays some texts and images and links to the Store page

### 2. Store

The Store page calls the StoreItem component and displays all the products.
The products come from the items.json file. Imported as storeItems object.
The object is mapped and every single item is passed to the StoreItem component

### 3. StoreItem

Store item esentially creates the card element that is used to display the products.
It takes the following props: id, name, price, imgUrl.
Inside the component we are also calling the useShoppingCart context to use the following functions that are needed:
getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart.
They are used in the card element to display quantity, add/decrease quantity or remove an item from the cart

### 4. ShoppingCart

ShoppingCart is the component that displays the right-side panel with the shopping cart items.
It accepts the isOpen prop which decides is the panel will be open or not. useShoppingCart context is imported to use the closeCart and cartItems.
We then map through the cartItems and display them in the panel through the CartItem component.

### 5. CartItem

The CartItem is the component that displays the items in the Shopping Cart panel.
It accepts two props: id and quantity.
The id is used to get the item that has been added to the cart. The id is compared to the items in the items.json file and we use that data to display the right item.
useShoppingCart context is also called here to get the remove item function.
The rest is just styling the display the items nicely.

### 5. ShoppingCartContext

Creating the context: ShoppingCartContext.
To use it in other components, created and exported the useShoppingCart function so will be using that instead of useContext(ShoppingCartContext).

The Provider provides the following data:

openCart / closeCart - sets the isOpen state for the shopping cart item.
cartItems - gets the items in the cart from the local storage.
cartQuantity - gets the number of the items in the cart through the reduce function.

getItemQuantity - takes the item id as a parameter. Finds the item in the cartItems array and if the items exists, it gets the quantity parameter.

increaseCartQuantity - Takes the item id as a parameter. It searches through the current Items in the array. If it doesnt find an item (find returns null) it adds one.
Otherwise, if it finds an item, it adds +1 to the quantity property.

decreaseQuantity - Takes the item id as a paramter. If it finds an item with quanitty 1, it removes that item from the array (filter).
Otherwise it maps through the array elements, it finds the item with the needed id and decreases quantity by 1.

removeFromCart - Takes the item id as parameter and removes it/filters it out if the id matches.

### 6. Navbar

The Navbar component that appears on top.
