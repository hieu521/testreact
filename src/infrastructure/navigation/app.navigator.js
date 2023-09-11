import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";

import { SafeArea } from "../../components/utility/safe-area.component";
import SettingScreen from "../../features/setting/screens/setting.screen";
import BookScreen from "../../features/crudBook/screens/book.screen";

const Tab = createBottomTabNavigator();
const createScreenOptions = ({ route }) =>{
    const iconName = TAB_ICON[route.name];
    return {
        tabBarIcon: ({size, color}) =>
        (
            <Ionicons name={iconName} size={size} color={color} />
        ),
    };
};
const TAB_ICON = {
    Book : "book",
    Settings: "md-settings"
}
export const AppNavigator = () => (
    <NavigationContainer>
        <Tab.Navigator 
            screenOptions={createScreenOptions}
            tabBarOptions={{
                activeTintColor: "#00FF00",
                inactiveTintColor: "gray",
            }}
        >
            <Tab.Screen name="Book" component={BookScreen} />
            <Tab.Screen name="Settings" component={SettingScreen} />

        </Tab.Navigator>
    </NavigationContainer>
);
