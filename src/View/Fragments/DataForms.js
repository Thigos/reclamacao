import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import AppLoading from 'expo-app-loading';
import { dataForms, Global, loadFonts } from '../Css/Styles';
import { Topbar, Footer } from './Fragments';


export default function App({ setNome, nome, setTurma, turma, setPeriodo, periodo, setCurso, curso, setState }) {

    return (
      <View style={[Global.container]}>
        <Topbar></Topbar>

        <ScrollView style={dataForms.scrollView}>
        
        <View style={dataForms.container}>
        <View style={{ alignSelf: 'flex-start'}} >
            <Text style={[Global.title, dataForms.title]}>DADOS</Text>
          </View>

          {/* Forms */}


          <Text style={Global.label}>Nome:</Text>
            <TextInput style={[Global.input]}
              onChangeText={nome => setNome(nome)}
              defaultValue={nome}/>

            <Text style={Global.label}>Período:</Text>
            <TextInput style={[Global.input]}
              onChangeText={periodo => setPeriodo(periodo)}
              defaultValue={periodo}/>


            <Text style={Global.label}>Turma:</Text>
            <TextInput style={[Global.input]}
              onChangeText={turma => setTurma(turma)}
              defaultValue={turma}/>

            <Text style={Global.label}>Curso:</Text>
            <TextInput style={[Global.input]}
              onChangeText={curso => setCurso(curso)}
              defaultValue={curso}/>


            <TouchableOpacity style={[Global.button, {width: '100%'}]} 
                onPress={() => setState('reclamar')}>
                <Text style={Global.button.text}>AVANÇAR</Text>
            </TouchableOpacity>


                 

        </View>

        </ScrollView>

      </View>
    );

}