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

        <Text style={[Global.title, Initial.title]}>Projeto Manutenção de  PCs dos Laboratórios</Text>
        
        <Text style={[Global.text, Initial.text]}>Esse projeto foi desenvolvido com a finalidade de auxiliar a organização e melhoria dos laboratórios da nossa escola.
 
 Ele foi criado em conjunto por alunos do 3ºMtec de desenvolvimento de sistemas de 2022 em um projeto interdiciplinar de PW3 e PAM2.</Text>
        <TouchableOpacity style={[Global.button, Initial.button]} 
            onPress={() => navigation.navigate('Devs')}>
            <Text style={Global.button.text}>DEVs</Text>
        </TouchableOpacity>

        <Footer></Footer>
      </View>
    );
  }


}