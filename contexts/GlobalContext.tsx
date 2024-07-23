import { Product } from "@/utils/types";
import React, {createContext, useContext, useState} from "react";

interface GlobalContextProps {
  selectedProduct: Product;
  setSelectedProduct: (p:Product) => void;
  cartProducts: Product[];
  setCartProducts: (ps:any) => void;
  addProductToCart: (product:any) => void;
  removeCartProduct: (productId:any) => void;
  updateQuantityFromCartProduct: (productId:any, quantity:any) => void;
}

export const GlobalContext = createContext<GlobalContextProps>({
  selectedProduct: { category: "", brand: "", cbd: 0, description: "", grams: 0, id: "", image: undefined, name: "", price: 0, quantity: 0, thc: 0, type: "" },
  setSelectedProduct: (p:Product) => {},
  
  cartProducts: [],
  setCartProducts: (ps) => {},

  addProductToCart: (product) => {},
  removeCartProduct: (productId) => {},
  updateQuantityFromCartProduct: (productId, quantity) => {},
});

export const GlobalContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedProduct, setSelectedProduct] = useState({category: "", brand: "", cbd: 0, description: "", grams: 0, id: "", image: undefined, name: "", price: 0, quantity: 0, thc: 0, type: "" });
  const [cartProducts, setCartProducts] = useState<Product[]>([]);

  const addProductToCart = (product:any) => {
    // if the product is already in the cart, just update the quantity
    let productFound = cartProducts.find((p:any) => p.id === product.id)
    if (productFound) {
      updateQuantityFromCartProduct(product.id, product.quantity + 1);
      return;
    }
    setCartProducts((prev:any) => [...prev, {...product, quantity: 1}]);
  }

  const removeCartProduct = (productId:any) => {
    setCartProducts((prev:any) => prev.filter((p:any) => p.id !== productId));
  }

  const updateQuantityFromCartProduct = (productId:any, quantity:any) => {
    setCartProducts((prev:any) => prev.map((p:any) => {
      if (p.id === productId) {
        return {...p, quantity};
      }
      return p;
    }));

    // update the quantity in the selected product
    if (selectedProduct.id === productId) {
      setSelectedProduct((prev:any) => ({...prev, quantity}));
    }
  }

  return (
    // please follow the pattern below to add more values to
    // the context to make easier read!
    // var, setter, realatedFuncs; endl
    <GlobalContext.Provider value={
      { 
        selectedProduct, setSelectedProduct, addProductToCart, removeCartProduct,
        cartProducts, setCartProducts, updateQuantityFromCartProduct
      }
    }>{children}</GlobalContext.Provider>
  );
};

export function useGlobalContext() {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error("userGlobalContext must be used within an GlobalContextProvider");
  }

  return context;
}
