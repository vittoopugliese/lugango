import {Tabs} from "expo-router";
import React from "react";

import {TabBarIcon} from "@/components/navigation/TabBarIcon";
import {Colors} from "@/constants/Colors";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.pdsRedLight,
        headerShown: true, // // // // sacar // // // //
        tabBarStyle: {
          backgroundColor: Colors.sidebarBackgroundColor,
          borderWidth: 0,
        },
        headerStyle: {
          backgroundColor: Colors.sidebarBackgroundColor,
          borderWidth: 0,
        },
        headerTitleStyle: {
          color: Colors.white,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({color, focused}) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="products/index"
        options={{
          title: "Products",
          tabBarIcon: ({color, focused}) => (
            <TabBarIcon
              name={focused ? "airplane" : "airplane-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="cart/index"
        options={{
          title: "Cart",
          tabBarIcon: ({color, focused}) => (
            <TabBarIcon
              name={focused ? "cart" : "cart-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile/index"
        options={{
          title: "Profile",
          tabBarIcon: ({color, focused}) => (
            <TabBarIcon
              name={focused ? "person" : "person-outline"}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="products/[id]"
        options={{
          title: "Product Information",
          href: null,
        }}
      />
    </Tabs>
  );
}
