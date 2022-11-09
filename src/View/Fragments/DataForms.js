import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import AppLoading from 'expo-app-loading';
import { dataForms, Global, loadFonts } from '../Css/Styles';
import { Topbar, Footer } from './Fragments';


export default function App({ setNome, nome, setTurma, turma, setPeriodo, periodo, setCurso, curso, setState }) {

      console.log("Nome Forms", nome)

      var data = {
        "nome": "",
        "periodo": "",
        "turma": "",
        "curso": ""
      }
    
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
                onChangeText={nome => data["nome"] = nome}
                defaultValue={nome}/>
  
              <Text style={Global.label}>Período:</Text>
              <TextInput style={[Global.input]}
                onChangeText={periodo => data["periodo"] = periodo}
                defaultValue={periodo}/>
  
  
              <Text style={Global.label}>Turma:</Text>
              <TextInput style={[Global.input]}
                onChangeText={turma => data["turma"] = turma}
                defaultValue={turma}/>
  
              <Text style={Global.label}>Curso:</Text>
              <TextInput style={[Global.input]}
                onChangeText={curso => data["curso"] = curso}
                defaultValue={curso}/>
  
  
              <TouchableOpacity style={[Global.button, {width: '100%'}]} 
                  onPress={() => {
                    setNome(data["nome"] != "" ? data["nome"] : nome);
                    setCurso(data["curso"] != "" ? data["curso"] : curso);
                    setTurma(data["turma"] != "" ? data["turma"] : turma);
                    setPeriodo(data["periodo"] != "" ? data["periodo"] : periodo);
                    setState('reclamar')
                    }}>
                  <Text style={Global.button.text}>AVANÇAR</Text>
              </TouchableOpacity>
  
  
                   
  
          </View>
  
          </ScrollView>
  
        </View>
      );
  
    
    
}