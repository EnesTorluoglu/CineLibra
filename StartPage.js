import { Button, Image, ImageBackground, StyleSheet, Text, View ,StatusBar, TextInput, TouchableOpacity, SafeAreaView} from 'react-native';


import { AntDesign } from '@expo/vector-icons';

import { LoginButton } from './LoginButton';
import {LoginTextfield} from "./LoginTextfield";

const background = require('./bg.jpg')
export default function App() {
    return (
        <View style={{flex:5}}>
            <ImageBackground source={background} style={{height:'100%', width:'100%', flex: 5, justifyContent:'center'}}>
                <Text style={{fontWeight:'bold',opacity:0.75, fontSize:60, color:'white',paddingLeft:'15%', paddingTop:'25%'}}>CineLibra</Text>
            </ImageBackground>
            <View style={{flex:8, backgroundColor:'white'}}>
                <SafeAreaView style={styles.container}>
                    <View style={{flexDirection:'column', justifyContent:'space-evenly', flex:5, paddingVertical:'5%', paddingHorizontal:'10%', backgroundColor:'white'}}>
                        <Text style={{alignSelf:'center', fontWeight:'bold', fontSize:20, paddingVertical:'5%'}}>Welcome! Lets get you started.</Text>
                        <LoginTextfield value={'e-mail'}/>
                        <LoginTextfield value={'password'}/>
                        <View style={{flexDirection:'row', justifyContent:'space-between', backgroundColor:'white'}}>
                            <LoginButton message={'Continue With Google'}/>
                            <LoginButton message={'Log In'}/>
                        </View>

                        <LoginButton message={'Sign Up'}/>
                        <Text style={{alignSelf:'center'}}>Don't have an account? Sign Up!</Text>
                    </View>
                </SafeAreaView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,//flex 1 tum ekrani kaplayacak
        justifyContent:'center',
        alignItems:'center',

    }
});
