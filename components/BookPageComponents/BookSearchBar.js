import React, { Component } from "react";
import { StyleSheet, View, Text, Touchable, TouchableOpacity, TextInput, KeyboardAvoidingView } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {useNavigation} from "@react-navigation/native";

import {BookColors} from "../MoviePageComponents/colorProfile"
const text_color = BookColors.text_color
const text_color_weak = BookColors.text_color_weak

function BookSearchBar(props) {
    const navigation = useNavigation()
    console.log("booksearch bar")
    return (
        <View style={[styles.container, props.style]}>
            <KeyboardAvoidingView>
                <TextInput style={styles.search} placeholder = {'Search...'} placeholderTextColor={text_color_weak} />
            </KeyboardAvoidingView>

            <TouchableOpacity onPress={() => {console.log("book searchdeki search bara tıklandıı");navigation.navigate('bookSearchPage')}}>
                <Icon name="magnify" style={styles.inputLeftIcon1}></Icon>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 20
    },
    search: {
        color: text_color_weak,
        opacity: 0.6,
        margin: 10
    },
    inputLeftIcon1: {
        color: text_color_weak,
        fontSize:20,
        alignSelf: "center",
        margin: 8,

    }
});

export default BookSearchBar;
