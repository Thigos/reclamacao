import React, { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'; 
import AppLoading from 'expo-app-loading';
import { Choose, Global, loadFonts } from '../Css/Styles';
import { Topbar, Footer } from './Fragments';



export default function App({ setState }) {
    return (
      <View style={Global.container}>
        <Topbar></Topbar>

        <TouchableOpacity style={[Global.button, Choose.button]} 
            onPress={() => setState('aluno')}>
                <Ionicons name="person" size={48} color="white" />
                <Text style={Global.button.text}>Aluno</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={[Global.button, Choose.button]} 
            onPress={() => setState('professor')}>
                <MaterialCommunityIcons name="badge-account-horizontal" size={48} color="white" />
                <Text style={Global.button.text}>Professor</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[Global.button, Choose.button]} 
            onPress={console.log('sobre')}>
                <Ionicons name="information-circle" size={48} color="white" />
                <Text style={Global.button.text}>Sobre o Sistema</Text>
        </TouchableOpacity>

        <Footer></Footer>
      </View>
    );

}