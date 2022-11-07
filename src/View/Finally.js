import React, { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import AppLoading from 'expo-app-loading';
import { Initial, Global, loadFonts } from './Css/Styles';
import { Topbar, Footer } from './Fragments/Fragments';


export default function App( { navigation } ) {
  let loaded = loadFonts();

  if (!loaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={Global.container}>
        <Topbar></Topbar>

        <AntDesign name="checkcircle" size={100} style={{marginBottom: 20,}} color="white" />
        <Text style={[Global.title, Initial.title]}>Reclamação Feita!</Text>
        
        <Text style={[Global.text, Initial.text]}>Assim que possível o problema será resolvido.</Text>
        <TouchableOpacity style={[Global.button, Initial.button]} 
            onPress={() => navigation.navigate('Initial')}>
            <Text style={Global.button.text}>INÍCIO</Text>
        </TouchableOpacity>

        <Footer></Footer>
      </View>
    );
  }


}