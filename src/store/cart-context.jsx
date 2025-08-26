// Importation des hooks nécessaires de React
import { createContext, useReducer } from "react";

// Création du contexte du panier avec des valeurs par défaut
export const CartContext = createContext({
  items: [],
  addItem: () => {},
  updateQuantity: () => {},
  deleteItem: () => {},
});

// Reducer pour gérer les actions sur le panier
// Il reçoit l'état courant et une action, puis retourne le nouvel état
function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      // Recherche si le produit existe déjà dans le panier
      const itemIndex = state.items.findIndex(
        (itemInItems) => itemInItems.productName === action.payload.productName
      );
      if (itemIndex !== -1) {
        // Si le produit existe, on incrémente la quantité (max 10)
        const existingItem = state.items[itemIndex];
        const updateQuantity = existingItem.quantity + 1;
        if (updateQuantity > 10) {
          alert("Vous ne pouvez pas ajouter plus de 10 articles pour ce produit. ");
          return state;
        }
        // On crée un nouveau tableau d'items avec la quantité mise à jour
        return {
          ...state,
          items: [
            ...state.items.slice(0, itemIndex),
            {
              ...existingItem,
              quantity: updateQuantity,
            },
            ...state.items.slice(itemIndex + 1),
          ],
        };
      }
      // Si le produit n'existe pas, on l'ajoute avec une quantité de 1
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
      };
    }
    default:
      // Pour toute autre action, on retourne l'état inchangé
      return state;
  }
}

// Composant Provider qui englobe l'application et fournit le contexte du panier
export default function CartProvider({ children }) {
  // Initialisation du state du panier avec useReducer
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  // Valeur du contexte à fournir aux composants enfants
  const contextValue = {
    items: state.items, // Liste des produits dans le panier
    addItem: (item) => {
      // Fonction pour ajouter un produit au panier
      dispatch({ type: "ADD_ITEM", payload: item });
    },
    // updateQuantity et deleteItem peuvent être ajoutés ici si besoin
  };

  // Fournit le contexte à tous les composants enfants
  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
}