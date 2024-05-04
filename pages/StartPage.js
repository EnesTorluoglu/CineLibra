import {
    ImageBackground,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    SafeAreaView,
    Appearance,
    KeyboardAvoidingView
} from 'react-native';

import { LoginButton } from '../components/LoginButton';
import {LoginPasswordField} from '../components/LoginPasswordField'
import {LoginTextfield} from "../components/LoginTextfield";
import {useNavigation} from "@react-navigation/native"
import {colorProfile} from "../components/colorProfile"

const background = require('../assets/bg_alt.jpg')

export default function StartPage() {

    const navigation = useNavigation()

    return (
        <KeyboardAvoidingView style={{flex:5}}>
            <ImageBackground source={background} blurRadius={35} style={styles.backgroundImage}>
                <Text style={styles.titleText}>CineLibra</Text>
            </ImageBackground>
            <View style={styles.cardStyle}>
                <SafeAreaView style={styles.container}>
                    <View style={styles.loginLayout}>

                        <Text style={{color:'black' ,alignSelf:'center', fontWeight:'bold', fontSize:20, paddingVertical:'5%'}}>Welcome! Lets get you started.</Text>
                        <LoginTextfield value={'e-mail'} style={{keyboardType:'email-address'}}/>
                        <LoginPasswordField value={'password'}/>

                        <TouchableOpacity onPress={()=> {console.log("login pressed"); navigation.navigate('HomePage')}}>
                            <LoginButton message={'Log In'}/>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <LoginButton message={'Continue W/ Google'}/>
                        </TouchableOpacity>

                        <View style={{margin:'10%' , flexDirection:'row'}}>
                            <Text style={{alignSelf:'center', color:'black'}}>Don't have an account?</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('AltSignupPage')}>
                                <Text style={{marginLeft:'10%', fontWeight:'bold', color:'rgb(255, 103, 0)' }}> Sign Up!</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </SafeAreaView>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center',

    },
    loginLayout: {
        minWidth:'100%',
        flexDirection:'column',
        justifyContent:'space-evenly',
        flex:1,
        rowGap:'10%',
        paddingTop:'5%',
        paddingHorizontal:'10%',
    },
    backgroundImage: {
        height:'110%',
        width:'100%',
        flex: 5,
        justifyContent:'center'
    },
    titleText: {
        textShadowOffset: {height: 2} ,
        textShadowRadius:5 ,
        textShadowColor:'black',
        fontWeight:'bold',opacity:0.75,
        fontSize:60, color:'white',
        alignSelf:'center',
        paddingTop:'10%'
    },
    cardStyle: {
        flex:8,
        backgroundColor:'white',
        borderRadius:15, shadowColor:'black',
        shadowRadius:30,
        shadowOffset:{height:5},
        shadowOpacity:1
    }
});
