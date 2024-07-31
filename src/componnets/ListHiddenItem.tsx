import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { height } from '../theme/themeDimensions'

const ListHiddenItem = ({ item }: any) => {
    return (
        <View style={styles.listHiddenItem}>
            <TouchableOpacity style={styles.button}>
                <Image source={require("../../assets/bgImages/tool.png")} style={styles.image} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Image source={require("../../assets/bgImages/delete.png")} style={styles.image} />
            </TouchableOpacity>
        </View>
    )
}

export default ListHiddenItem

const styles = StyleSheet.create({
    listHiddenItem: {
        alignItems: "center",
        justifyContent: "flex-end",
        flexDirection: "row",
    },
    button: {
        alignItems: "center",
        justifyContent: "center",
        width: 90,
        height: height * 0.13,
    },
    image: {
        width: 60,
        height: height * 0.09,
        resizeMode: "stretch",
    },
})