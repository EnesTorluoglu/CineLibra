import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image, ImageBackground, Platform, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import { auth, fetchWatchLaterMovieIDs, fetchWatchedMovieIDs } from '../firebase';
import ProfileLists from "../components/MoviePageComponents/ProfileLists";
import { fetchFavoriteMovies, fetchMovieDetails, fetchWatchLaterMovies, fetchWatchedMovies } from '../api/tmdbAPI/APICalls';
import {BookColors, colors} from '../components/MoviePageComponents/colorProfile';

const text_color = BookColors.text_color
const text_color_weak = BookColors.text_color_weak
const bg_filter_color = BookColors.bg_filter_color
const bg_filter_color_strong = BookColors.bg_filter_color_strong
import { listTypes } from '../components/MoviePageComponents/MovieList';
import ProfileBookLists from "../components/BookPageComponents/ProfileBookLists";

export default function BookProfile() {
    const navigation = useNavigation();
    const [favoriteMovies, setFavoriteMovies] = useState([]);
    const user = auth.currentUser;






    // useEffect(() => {x
    //     const getUserProfile = () => {
    //         const currentUser = auth.currentUser;
    //         if (currentUser) {
    //             console.log("Sign-in provider: " + currentUser.providerId);
    //             console.log("  Provider-specific UID: " + currentUser.uid);
    //             console.log("  Name: " + currentUser.displayName);
    //             console.log("  Email: " + currentUser.email);
    //             console.log("  Photo URL: " + currentUser.photoURL);
    //         }
    //     };
    //     getUserProfile();
    // }, []);

    // useEffect(() => {
    //     const fetchFavoriteMovies = async () => {
    //         console.log("Fetching favorite movie IDs...");
    //         const movieIDs = await fetchWatchedMovieIDs(); // Step 1: Fetch favorite movie IDs
    //         //console.log("Favorite movie IDs:", movieIDs);

    //         console.log(movieIDs.map(movie => ({ id: movie.id, name: movie.name })));
    //         const movieDetailsPromises = movieIDs.map(id => {
    //             console.log("Fetching details for movie ID:", id);
    //             return fetchMovieDetails(id);
    //         }); // Step 2: Create promises for movie details
    //         const movieDetails = await Promise.all(movieDetailsPromises); // Step 3: Await all promises and return the results
    //         console.log("Favorite movie details:", movieDetails);
    //         setFavoriteMovies(movieDetails);
    //     };

    //     if (user) {
    //         fetchFavoriteMovies();
    //     }
    // }, [user]);



    return (
        <ImageBackground style={{flex:1}} blurRadius={200} source={require('../assets/bg.jpg')}>
            <View style={{backgroundColor:bg_filter_color, flex:1}}>
                <SafeAreaView style={styles.safeAreaStyle}>
                    <TouchableOpacity  onPress={()=> navigation.goBack()}>
                        <AntDesign name="arrowleft" size={35} style={styles.arrowLeft} />
                    </TouchableOpacity>

                    <View style={{flex:1 , alignItems:'center',justifyContent:'center',flexDirection:'row' , marginBottom:"7%"}}>
                        <Image source={require('../assets/bg.jpg')} style={styles.image}/>
                        <Text style={{fontSize:22, color:text_color_weak}}> {user.displayName}</Text>
                    </View>

                    <View style={{flex:4}}>
                        <ProfileBookLists></ProfileBookLists>
                    </View>


                </SafeAreaView>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({

    arrowLeft: {
        marginLeft: 15,
        color: text_color_weak
    },
    image: {
        width: '35%',
        height: "100%",
        borderRadius: 200,
        marginLeft:'2%',
    },
    safeAreaStyle: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 20 : 0,
    }
});
