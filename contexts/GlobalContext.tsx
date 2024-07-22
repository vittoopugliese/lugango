import React, {createContext, useContext, useState} from "react";

interface GlobalContextProps {
  selectedProduct: any;
  setSelectedProduct: (p:any) => void;
  cartProducts: any[];
  setCartProducts: (ps:any) => void;
  removeCartProduct: (productId:any) => void;
  updateQuantityFromCartProduct: (productId:any, quantity:any) => void;
}

export const GlobalContext = createContext<GlobalContextProps>({
  selectedProduct: "",
  setSelectedProduct: (p) => {},
  cartProducts: [],
  setCartProducts: (ps) => {},
  removeCartProduct: (productId) => {},
  updateQuantityFromCartProduct: (productId, quantity) => {},
});

export const GlobalContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedProduct, setSelectedProduct] = useState("");
  const [cartProducts, setCartProducts] = useState([]);

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
  }

  return (
    // please follow the pattern below to add more values to
    // the context to make easier read!
    // var, setter, realatedFuncs; endl
    <GlobalContext.Provider value={
      { 
        selectedProduct, setSelectedProduct,
        cartProducts, setCartProducts, removeCartProduct, updateQuantityFromCartProduct
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
