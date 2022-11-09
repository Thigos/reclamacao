import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import AppLoading from 'expo-app-loading';
import { Main, Global, loadFonts } from './Css/Styles';
import { Topbar, Footer } from './Fragments/Fragments';
import Choose from './Fragments/Choose';
import DataForms from './Fragments/DataForms';
import { Picker } from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    console.log("Write", jsonValue)
    await AsyncStorage.setItem('@UserData', jsonValue);
  } catch (e) {
    // saving error
  }
}




export default function App({ navigation }) {
  let loaded = loadFonts();
  const [state, setState] = useState('');
  const [nome, setNome] = useState('');
  const [turma, setTurma] = useState('');
  const [periodo, setPeriodo] = useState('');
  const [curso, setCurso] = useState('');
  const [lab, setLab] = useState('');
  const [computador, setComputador] = useState('');
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const getData = async () => {
    try {
      var jsonValue = await AsyncStorage.getItem('@UserData')
      jsonValue = jsonValue != null ? JSON.parse(jsonValue) : null;

      console.log("Read", jsonValue)
      if (jsonValue != null && jsonValue[0] != "") {
        setNome(jsonValue["nome"]);
        setTurma(jsonValue["turma"]);
        setPeriodo(jsonValue["periodo"]);
        setCurso(jsonValue["curso"]);
      }


    } catch (e) {
      console.log("Erro na Leitura:", e);
    }
  }


  if (!loaded) {
    return <AppLoading />;
  } else {


    if (state === '') {
      // MENU
      getData();
      return Choose({ setState });

    } else if (state === 'aluno' || state === 'professor') {
      // FORMULÁRIO DOS DADOS

      return DataForms({ setNome, nome, setTurma, turma, setPeriodo, periodo, setCurso, curso, setState });

    } else if (state === 'about') {
      setState("");
      navigation.navigate('About')

    }
    let userData = {
      "nome": nome,
      "turma": turma,
      "periodo": periodo,
      "curso": curso
    };
    storeData(userData);



    return (
      <View style={Global.container}>
        <Topbar></Topbar>
        <ScrollView style={Main.scrollView}>
          <Text style={Global.title}>Pedido de Manutenção</Text>

          <Text style={Global.label}>Laboratório</Text>
          <View style={Main.pickerContainer}>
            <Picker
              selectedValue={lab}
              style={Main.pickerContainer.picker}
              onValueChange={(itemValue, itemIndex) =>
                setLab(itemValue)
              }>
              <Picker.Item label="Selecione..." value="" />
              <Picker.Item label="Lab 1" value="lab1" />
              <Picker.Item label="Lab 2" value="lab2" />
              <Picker.Item label="Lab 3" value="lab3" />
              <Picker.Item label="Lab 4" value="lab4" />
              <Picker.Item label="Lab 5" value="lab5" />
              <Picker.Item label="Lab 6" value="lab6" />
            </Picker>
          </View>

          <Text style={Global.label}>Computador</Text>
          <TextInput style={[Global.input]}
            onChangeText={computador => setComputador(nome)}
            defaultValue={''} />

          <Text style={Global.label}>Titulo Do Pedido</Text>
          <TextInput style={[Global.input]}
            onChangeText={titulo => setTitulo(titulo)}
            defaultValue={''} />

          <Text style={Global.label}>Descriçao</Text>
          <TextInput style={[Global.input, Main.textArea]}
            multiline={true}
            placeholderTextColor="#fff"
            placeholder='Descreva com Detalhes o(s) Problema(s)'
            onChangeText={descricao => setDescricao(descricao)}
            defaultValue={''} />


          <TouchableOpacity style={[Global.button]}
            onPress={() => reclamar()}>
            <Text style={Global.button.text}>RECLAMAR</Text>
          </TouchableOpacity>

        </ScrollView>

      </View>
    );

  }

  function reclamar() {
    // POST API
    var InsertAPIURL = "http://10.0.2.2:80/SignIn/SignUp.php";   //API to render signup

    var headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };

    var data = {
      "nome": nome,
      "periodo": periodo,
      "turma": turma,
      "curso": curso
    }

    // FETCH func 
    fetch(InsertAPIURL, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data) //convert data to JSON
    })
      .then((response) => response.json())
      .then((response) => {
        let message = response[0].message
        console.log(message);
        if (message === "OK") {
          // NAVIGATE TO FINALLY
          navigation.navigate('Finally');
        }

      })
      .catch((error) => {
        alert("Error Occured" + error);
      })



  }

}