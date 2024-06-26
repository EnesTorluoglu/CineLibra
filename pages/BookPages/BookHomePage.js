import React, { Component, useState } from "react";
import {StyleSheet, View, Text, ImageBackground, SafeAreaView, Platform, StatusBar, Dimensions} from "react-native";
import BookSearchBar from "../../components/BookPageComponents/BookSearchBar";
import Lists from "../../components/MoviePageComponents/Lists";
import LeftBar from "../../components/MoviePageComponents/LeftBar";
import { useNavigation } from "@react-navigation/native";
import {BookColors} from "../../components/MoviePageComponents/colorProfile"
import { Button } from "react-native-web";
import BookLists from "../../components/BookPageComponents/BookLists";

const bg_filter_color = BookColors.bg_filter_color
const opacity_color = BookColors.opacity_color
const windowHeight = Dimensions.get('window').height;


export default function BookHomePage(props) {
    const navigation = useNavigation();
    const background = require('../../assets/bg.jpg')
    // console.log("book HomePage içindeyiiiim");

    return (
        <ImageBackground source={background} blurRadius={200} style={{flex:1}}>
            <SafeAreaView style={styles.safeArea}>

                <View style={styles.leftBarRow}>
                    <LeftBar/>
                    <BookSearchBar style={styles.searchBar} value={'SearchHome'}></BookSearchBar>
                    <View>


                    </View>

                </View>

                <View style={styles.listView}>
                    <BookLists style={styles.lists}></BookLists>
                </View>

            </SafeAreaView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    leftBarRow: {
        height: '7%',
        flexDirection: "row",
        marginHorizontal: '3%',
        justifyContent:'space-between'
    },
    searchBar: {
        height: '80%',
        width: '80%',
        backgroundColor: opacity_color,
    },
    lists: {
        height: '100%',
        width: '100%',
    },
    listView: {
        flex:1
    },
    safeArea: {
        minHeight:windowHeight,
        flex:1,
        backgroundColor:bg_filter_color,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight+20 : 0,
    }
});
