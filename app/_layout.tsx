import {Colors} from "@/constants/Colors";
import { GlobalContextProvider } from "@/contexts/GlobalContext";
import {useFonts} from "expo-font";
import {Stack} from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import {useEffect} from "react";
import "react-native-reanimated";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    Poppins: require("../assets/fonts/Poppins-Medium.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <GlobalContextProvider>
      <StatusBar style="auto" />
      <Stack screenOptions={{headerShown: false}} />
    </GlobalContextProvider>
  );
}
