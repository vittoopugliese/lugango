import {useRouter, useSegments} from "expo-router";
import React, {createContext, useContext, useState, useEffect} from "react";

type AuthContextType = {
  userAuthenticated: boolean;
  setUserAuthenticated: (value: boolean) => void;
  userLogIn: () => void;
  userLogOut: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthContextProvider({children}: {children: React.ReactNode}) {
  const [userAuthenticated, setUserAuthenticated] = useState(true); //
  const rootSegment = useSegments()[0];
  const router = useRouter();

  useEffect(() => {
    const checkAuthAndRedirect = async () => {
      if (!userAuthenticated && rootSegment !== "(auth)") {
        router.replace("/(auth)/login");
      } else if (userAuthenticated && rootSegment !== "(app)") {
        router.replace("/404");
      }
    };

    checkAuthAndRedirect();
  }, [userAuthenticated, rootSegment]);

  const userLogIn = async () => {
    setUserAuthenticated(true);
    await new Promise((resolve) => setTimeout(resolve, 0));
    router.replace("/home");
  };

  const userLogOut = () => {
    setUserAuthenticated(false);
    router.replace("/(auth)/login");
  };

  return (
    // please follow the pattern below to add more values to
    // the context to make easier read!
    // var, setter, realatedFuncs; endl
    <AuthContext.Provider value={
      {
        userAuthenticated, setUserAuthenticated, userLogIn, userLogOut
      }
      }>{children}</AuthContext.Provider>
  );
}

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuthContext must be used within an AuthContextProvider");
  }

  return context;
}