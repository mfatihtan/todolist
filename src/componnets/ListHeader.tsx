import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import themeColors from '../theme/themeColors';
import { height, width } from '../theme/themeDimensions';

const ListHeader = () => {
    const categories = ["Kişisel Gelişim", "Sağlık", "Günlük İşler", "Eğitim", "İş", "Sosyal", "Eğlence"];
    return (
        <ScrollView showsHorizontalScrollIndicator={false} horizontal style={styles.listHeader}>
            {
                categories.map((valeu, index) =>
                    <TouchableOpacity activeOpacity={0.7} key={index} style={styles.listHeaderItem}>
                        <Text style={styles.text}>{valeu}</Text>
                    </TouchableOpacity>)
            }
        </ScrollView>
    )
}

export default ListHeader

const styles = StyleSheet.create({
    listHeader: {
        backgroundColor: themeColors.white,
        width: width,
        paddingBottom: 5,
    },
    listHeaderItem: {
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        minWidth: width * 0.13,
        height: height * 0.055,
        marginVertical: 10,
        marginHorizontal: 5,
        backgroundColor: themeColors.blue,
    },
    text: {
        fontSize: 16,
        fontWeight: "500",
        color: themeColors.white,
    },
})