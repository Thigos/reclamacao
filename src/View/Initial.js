import React, { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
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

        <Image style={Initial.image} source={require('./Img/main-logo.png')}/>
        <Text style={[Global.title, Initial.title]}>Projeto Manutenção de  PCs dos Laboratórios</Text>
        
        <Text style={[Global.text, Initial.text]}>Ajude a melhorar os computadores dos nossos laboratórios, informe-nos se algo está faltando, quebrado ou se está com mal funcionamento, para podermos melhora-los!</Text>
        <TouchableOpacity style={[Global.button, Initial.button]} 
            onPress={() => navigation.navigate('Main')}>
            <Text style={Global.button.text}>AJUDAR</Text>
        </TouchableOpacity>

        <Footer></Footer>
      </View>
    );
  }


}