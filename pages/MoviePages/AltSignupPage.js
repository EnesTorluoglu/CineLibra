import {
    Button,
    Image,
    ImageBackground,
    StyleSheet,
    Text,
    View,
    StatusBar,
    TextInput,
    TouchableOpacity,
    SafeAreaView,
    Dimensions
} from 'react-native';


import { AntDesign } from '@expo/vector-icons';

import { LoginButton } from '../../components/MoviePageComponents/LoginButton';
import {LoginTextfield} from "../../components/MoviePageComponents/LoginTextfield";
import {StackActions, useNavigation} from "@react-navigation/native";
import {colors} from "../../components/MoviePageComponents/colorProfile";
import {LoginPasswordField} from "../../components/MoviePageComponents/LoginPasswordField";
import React from 'react';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { updateProfile } from 'firebase/auth';

const background = require('../../assets/bg_alt.jpg')
const windowHeight = Dimensions.get('window').height;

const main_strong = colors.main_strong
const main_weak = colors.main_weak
const accent_weak = colors.accent_weak
const accent_strong = colors.accent_strong
const text_color = colors.text_color
const main_color = colors.main
const accent_color = colors.accent

export default function AltStartPage() {
    const [userName,setUserName] = React.useState('');
    const [email,setEmail] = React.useState('');
    const [password,setPassword] = React.useState('');
    const navigation = useNavigation();
    const handleSignUp = async () => {
	navigation.dispatch(StackActions.pop(1));
        console.log("starting SignUp handler");
        console.log("user-name "+userName);
        console.log("e-mail "+email);
        console.log("password "+password);
         try {
             const authUserInfos = await createUserWithEmailAndPassword(auth, email, password, userName);
             const user = authUserInfos.user;
              await updateProfile(user, {
                 displayName: userName,
               });
               console.log("Username set to: " + userName);
               navigation.navigate('HomePage')
             console.log(user.email + " Successfully signed up");
             navigation.navigate('HomePage')
         } catch (error) {
             alert(error.message);
         }

         }




    return (
        <View style={{flex:5, minHeight:windowHeight}}>
            <View style={{flex:5, backgroundColor:'transparent'}}>

            </View>
            <View style={styles.cardStyle}>
                <SafeAreaView style={styles.container}>
                    <View style={styles.signupLayout}>
                        <Text style={{color:text_color ,alignSelf:'center', fontWeight:'bold', fontSize:20, paddingVertical:'5%'}}>Sign up now to continue.</Text>
                         <LoginTextfield
                        placeholder={"user-name"}
                        inputValue={userName}
                        setUserName={setUserName}

                         />
                          <LoginTextfield
                        placeholder={"e-mail"}
                        inputValue={email}
                        setEmail={setEmail}
                        />

                        <LoginPasswordField value={'Password'}
                        placeholder={'password'}
                        password={password}
                        setPassword={setPassword}
                        />

                        <TouchableOpacity onPress={()=> handleSignUp()}>
                            <LoginButton message={'Sign Up'}/>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <LoginButton message={'Continue W/ Google'}/>
                        </TouchableOpacity>

                    </View>
                </SafeAreaView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center',

    },
    cardStyle: {
        flex:8,
        elevation:1,
        backgroundColor:main_weak,
        borderRadius:15,
        shadowColor:'black',
        shadowRadius:20,
        shadowOffset:{height:5},
        shadowOpacity:1
    },
    signupLayout: {
        minWidth:'100%',
        flexDirection:'column',
        justifyContent:'space-evenly',
        flex:1,
        paddingTop:'2%',
        marginBottom:'2%',
        paddingHorizontal:'8%'
    },

});
