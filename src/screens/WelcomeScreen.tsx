import { StatusBar, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import IconO from 'react-native-vector-icons/Octicons';
import themeColors from '../theme/themeColors';
import { height, width } from '../theme/themeDimensions';
import FastImage from 'react-native-fast-image';

const WelcomeScreen = ({ navigation }: any) => {
    return (
        <View style={styles.root}>
            <StatusBar translucent backgroundColor={themeColors.blue} barStyle={"default"} />
            <Text style={styles.header}>To-Do-List</Text>
            <FastImage source={require("../../assets/bgImages/welcome.gif")} style={styles.image} />
            <TouchableOpacity
                onPress={() => navigation.navigate("home")}
                activeOpacity={0.8}
                style={styles.button}>
                <Text style={styles.buttonText}>Hemen Başla</Text>
                <IconO style={styles.icon} name='arrow-right' size={30} color={themeColors.white} />
            </TouchableOpacity>
        </View>
    )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    root: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        backgroundColor: themeColors.white,
        alignItems: "center",
        justifyContent: "space-around",
    },
    header: {
        fontSize: 34,
        fontWeight: "bold",
        color: themeColors.blue,
    },
    image: {
        width: width * 0.9,
        height: height * 0.5,
        resizeMode: "stretch",
    },
    button: {
        width: width * 0.9,
        padding: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: themeColors.blue,
        borderRadius: 15,
    },
    buttonText: {
        fontSize: 20,
        fontWeight: "600",
        color: themeColors.white,
    },
    icon: {
        position: "absolute",
        right: 30,
    },
})