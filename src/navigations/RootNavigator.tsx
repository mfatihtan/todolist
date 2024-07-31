import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, WelcomeScreen } from '../screens';
import themeColors from '../theme/themeColors';
import { Image, Text, View } from 'react-native';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                options={{
                    headerShown: false,
                }}
                name='welcome' component={WelcomeScreen} />
            <Stack.Screen
                options={{
                    headerBackVisible: false,
                    headerTitleAlign: "center",
                    headerTitle: () => <View style={{ backgroundColor: "white", flexDirection: "row", alignItems: "center", justifyContent: "center", paddingVertical: 5, paddingHorizontal: 10, borderRadius: 5, }}><Image source={require("../../assets/bgImages/list.png")} style={{ height: 40, width: 40 }} /><Text>To Do List</Text></View>,
                    headerStyle: { backgroundColor: themeColors.blue },
                    headerShadowVisible: false,
                }}
                name='home' component={HomeScreen} />
        </Stack.Navigator>
    )
}

export default RootNavigator;