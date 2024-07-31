import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import themeColors from '../theme/themeColors';
import { height, width } from '../theme/themeDimensions';
import IconAd from 'react-native-vector-icons/AntDesign';

const ListItem = ({ item }: any) => {
    const [toDo, setToDo] = useState(false);
    return (
        <Pressable key={item.title + item.time} style={styles.listItem}>
            <View style={styles.info}>
                <Pressable onPress={() => setToDo(!toDo)} style={styles.check}>
                    {toDo && <IconAd name='check' color={themeColors.blue} size={24} />}
                </Pressable>
                <View style={styles.texts}>
                    <Text style={[styles.title, toDo && { textDecorationLine: "line-through" }]}>{item.title}</Text>
                    <Text style={styles.desc}>{item.description}</Text>
                </View>
            </View>
            <Text>{item.time}</Text>
        </Pressable>

    )
}

export default ListItem

const styles = StyleSheet.create({
    listItem: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: themeColors.white,
        width: width,
        height: height * 0.13,
        paddingHorizontal: 10,
        marginVertical: 5,
    },
    info: {
        flexDirection: "row",
        width: width * 0.65,
        alignItems: "center",
    },
    check: {
        width: 30,
        height: 30,
        borderWidth: 1,
        borderColor: themeColors.blue,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
    },
    texts: {
        marginLeft: 15,
    },
    title: {
        fontSize: 20,
        fontWeight: "600",
        color: themeColors.darkBlue,
    },
    desc: {
        fontSize: 16,
        fontWeight: "400",
        color: themeColors.darkBlue,
    },
})