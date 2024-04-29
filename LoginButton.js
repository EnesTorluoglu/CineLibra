import { Text, TouchableWithoutFeedback, View } from "react-native"
import { TouchableOpacity } from "react-native"



export  const LoginButton = ({message}) =>{
    return(
        <View style={{padding: 0}}>
            <View style={{width:'100%',
                height:50,
                paddingHorizontal:'3%',
                backgroundColor:'#EB916E',
                borderRadius:15,
                shadowRadius:5,
                shadowColor:'gray',
                shadowOpacity:0.5,
                shadowOffset:{height: '5%'},
                justifyContent:"center",
                alignItems:"center",
                borderWidth:2,
                borderColor:'#DA805D',
            }} >
                <Text style={{fontSize:20,fontWeight:"bold", color:'white'}} >{message}</Text>
            </View>
        </View>
    )

}
