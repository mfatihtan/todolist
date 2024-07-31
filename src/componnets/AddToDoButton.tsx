import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import themeColors from '../theme/themeColors';
import IconAd from 'react-native-vector-icons/AntDesign';

const AddToDoButton = () => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={styles.addToDoButton}>
            <IconAd name='pluscircle' size={65} color={themeColors.blue} />
        </TouchableOpacity>
    )
}

export default AddToDoButton

const styles = StyleSheet.create({
    addToDoButton: {
        width: 70,
        height: 70,
        borderRadius: 50,
        backgroundColor: themeColors.white,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        bottom: 30,
        right: 25,
    },
})