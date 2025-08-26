import { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Main from "./layouts/Main";
import  CartProvider  from "./store/cart-context"
import { useState } from "react"

const Home = lazy(() => import("./pages/Home"));
const Shop = lazy(() => import("./pages/Shop"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: (
          <Suspense>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/shop",
        element: (
          <Suspense>
            <Shop />
          </Suspense>
        ),
      },
    ],
  },
]);

function App() {
  // States on va ajouter une state pour pouvoir ajouter des produits dans notre panier // 

  const [ items, setItems ] = useState([]); 
 
  // Variables // 
  // const contextValue = {
  //   items,
  //   addItem: (item) => {
  //     // Check if item.productName  already : 
  //     // On vérfie le produit existe déjàsi oui alors on va incrémenter la quantité
  //     // Sinon on ajoutera la propriétée quantité // 
  //     const itemIndex = items.findIndex(
  //       itemInItems => itemInItems.productName === item.productName
        
  //     )
  //     if(itemIndex !== -1){
  //       if(items[itemIndex].quantity === 10 ) {
  //         alert (
  //           "Vous ne pouvez pas ajouter plus de 10 articles pour ce produit. "
  //         ); 
  //         return; 
  //       }
  //       const newItems = [...items]; 
  //       newItems[itemIndex].quantity++; 
  //       setItems(newItems); 
  //       return; 
  //     }

  //     // Si le produit n'existe pas alors // 
  //     setItems(prevItems => [...prevItems, {...item, quantity: 1}]); 
      
  //   }, 
  //   updateQuantity:(productName, quantity) => {
  //     const itemIndex = items.findIndex(
  //       (itemInItems) => itemInItems.productName === productName, 

  //     );
  //     if(itemIndex !== -1){
  //       if(quantity > 10){
  //         alert('Vous ne pouvez pas ajouter plus de 10 articles pour ce produit.')
  //         return; 
  //       }
  //       const newItems =  [...items]; 
  //       newItems[itemIndex].quantity = Number(quantity);
  //       setItems(newItems); 

  //     }
  //   }, 
  //   deleteItem:(productName) => {
  //     const itemIndex = items.findIndex(
  //       (itemInItems) => itemInItems.productName === productName, 

  //     );
  //     if(itemIndex !== -1){
  //       const newItems = [...items]; 
  //       newItems.splice(itemIndex, 1); 
  //       setItems(newItems); 
  //     }
  //   }
  // }
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;
