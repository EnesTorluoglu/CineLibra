// SwitchPanel.js
import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import Profile from '../../screens/Profile';
import SignOutScreen from '../../screens/SignOutScreen';
import CustomDrawer from '../../components/CustomDrawer';
import Ionicons from 'react-native-vector-icons/Ionicons'
import CustomSwitchIcon from '../../components/CustomSwitchIcon';
import HomePage from '../HomePage';
import SearchPage from '../SearchPage';
import AltStartPage from '../AltSignupPage';
import ItemDetailPage from '../ItemDetailPage';
import StartPage from '../StartPage';

const Drawer = createDrawerNavigator();



const SwitchSearchPage = () => {
  return (
    <Drawer.Navigator   drawerContent={props=> <CustomDrawer {...props}  />} sscreenOptions={{headerShown:false,swipeEnabled: false}} >

<Drawer.Screen name="Current" component={SearchPage}  options={{
       drawerIcon: ({color})=> (
        <Ionicons name="arrow-back" size={20} color={color}/>
       )
      }} />
      <Drawer.Screen name="Search" component={HomePage}  options={{
       drawerIcon: ({color})=> (
        <Ionicons name= "search-outline" size={20} color={color}/>
       )
      }} />
    
    <Drawer.Screen name="Profile" component={Profile}  options={{
       drawerIcon: ({color})=> (
        <Ionicons name= "person-outline" size={20} color={color}/>
       )
      }} />
   
      
      <Drawer.Screen name="SignOut" component={SignOutScreen}  options={{
       drawerIcon: ({color})=> (
        <Ionicons name="log-out" size={20} color={color} />
       )
      }}/>
    </Drawer.Navigator>
  );
};

export default SwitchSearchPage;