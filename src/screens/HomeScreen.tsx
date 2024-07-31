import { Image, Pressable, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import themeColors from '../theme/themeColors';
import { height, width } from '../theme/themeDimensions';
import { SwipeListView } from 'react-native-swipe-list-view';
import { AddToDoButton, ListHeader, ListHiddenItem, ListItem } from '../componnets';

type ListItem = {
    time: string,
    toDo: boolean,
    title: string,
    description: string,
    category: string,
}
const list: ListItem[] = [
    {
        time: "31.07.2024",
        toDo: false,
        title: "Kitap okuma",
        description: "Roman okumak",
        category: "Kişisel Gelişim"
    },
    {
        time: "01.08.2024",
        toDo: false,
        title: "Spor yapma",
        description: "Yarım saat koşu",
        category: "Sağlık"
    },
    {
        time: "01.08.2024",
        toDo: false,
        title: "Alışveriş",
        description: "Market alışverişi yapmak",
        category: "Günlük İşler"
    },
    {
        time: "02.08.2024",
        toDo: false,
        title: "Ödev tamamlama",
        description: "Matematik ödevi bitirilecek",
        category: "Eğitim"
    },
    {
        time: "02.08.2024",
        toDo: false,
        title: "Toplantı hazırlığı",
        description: "Sunum hazırlamak",
        category: "İş"
    },
    {
        time: "03.08.2024",
        toDo: false,
        title: "Temizlik yapma",
        description: "Ev temizliği",
        category: "Günlük İşler"
    },
    {
        time: "03.08.2024",
        toDo: false,
        title: "Arkadaşlarla buluşma",
        description: "Kahve içmek",
        category: "Sosyal"
    },
    {
        time: "04.08.2024",
        toDo: false,
        title: "Ders çalışma",
        description: "Tarih dersine çalışmak",
        category: "Eğitim"
    },
    {
        time: "04.08.2024",
        toDo: false,
        title: "Film izleme",
        description: "Favori filmi izlemek",
        category: "Eğlence"
    },
    {
        time: "05.08.2024",
        toDo: false,
        title: "Yoga yapma",
        description: "1 saat yoga",
        category: "Sağlık"
    }
];

const HomeScreen = () => {
    const date = new Date();

    return (
        <View style={styles.root}>
            <ListHeader />
            <SwipeListView
                contentContainerStyle={styles.list}
                data={list}
                renderItem={({ item }) => <ListItem item={item} />}
                renderHiddenItem={(item, rowMap) => (<ListHiddenItem itme={item} />)}
                disableRightSwipe
                leftOpenValue={180}
                rightOpenValue={-180}
                stopLeftSwipe={-180}
                closeOnRowBeginSwipe
                closeOnScroll={true}
                keyExtractor={(item: any) => item.title + item.time}
            />
            <AddToDoButton />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: themeColors.lightBlue,
    },
    list: {
        width: width,
        alignItems: "center",
    },
})