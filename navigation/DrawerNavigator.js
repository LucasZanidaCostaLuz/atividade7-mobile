import React from "react"; 
import { createDrawerNavigator } from "@react-navigation/drawer"; 
import HomeScreen from "../pages/HomeScreen";
import Home from "../pages/Home"; 

const Drawer = createDrawerNavigator(); 

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator initialRouteName="Home Screen">
            <Drawer.Screen name="Home Screen" component={HomeScreen} />
            <Drawer.Screen name="Home" component={Home} />
        </Drawer.Navigator>
    );
}