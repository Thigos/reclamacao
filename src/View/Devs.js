import React, { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView, Linking } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import AppLoading from 'expo-app-loading';
import { devStyles, Global, loadFonts } from './Css/Styles';
import { Topbar, Footer } from './Fragments/Fragments';


export default function App({ navigation }) {
    let loaded = loadFonts();

    if (!loaded) {
        return <AppLoading />;
    } else {
        return (
            <View style={Global.container}>
                <Topbar></Topbar>

                <ScrollView style={devStyles.scrollView} contentContainerStyle={{flexGrow: 1, alignItems: 'center'}}>
                
                    <Text style={[Global.title, { textAlign: 'center' }]}>Desenvolvedores</Text>

                    {/* PROFILE 1 */}
                    <View style={devStyles.container}>
                        <View style={devStyles.topContainer}>
                            <View style={devStyles.imageContainer}>
                                <Image source={{ uri: 'https://github.com/Thigos.png' }} style={devStyles.image} />
                                <Image style={devStyles.emoji} source={{ uri: 'https://github.githubassets.com/images/icons/emoji/unicode/1f419.png' }} />
                            </View>
                            <View style={devStyles.infos}>
                                <Text style={devStyles.title}>Thiago M.</Text>
                                <Text style={devStyles.text}>Thigos</Text>
                                <Text style={[devStyles.text, { fontSize: 13 }]}>¯\_(ツ)_/¯</Text>
                            </View>
                        </View>
                        <View style={devStyles.buttonContainer}>
                            <TouchableOpacity
                                onPress={() => Linking.openURL('https://github.com/Thigos')}
                                style={devStyles.button}>
                                <Text style={[devStyles.text, { fontSize: 15 }]}>Visit Profile</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* PROFILE 2 */}
                    <View style={[devStyles.container]}>
                        <View style={devStyles.topContainer}>
                            <View style={devStyles.imageContainer}>
                                <Image source={{ uri: 'https://github.com/Felipesco.png' }} style={devStyles.image} />
                                <Image style={devStyles.emoji} source={{ uri: 'https://github.githubassets.com/images/icons/emoji/unicode/1f604.png' }} />
                            </View>
                            <View style={devStyles.infos}>
                                <Text style={devStyles.title}>Felipe{'\n'}Santos</Text>
                                <Text style={devStyles.text}>Felipesco</Text>
                            </View>
                        </View>
                        <View style={devStyles.buttonContainer}>
                            <TouchableOpacity
                                onPress={() => Linking.openURL('https://github.com/Felipesco')}
                                style={devStyles.button}>
                                <Text style={[devStyles.text, { fontSize: 15 }]}>Visit Profile</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* PROFILE 3 */}
                    <View style={[devStyles.container]}>
                        <View style={devStyles.topContainer}>
                            <View style={devStyles.imageContainer}>
                                <Image source={{ uri: 'https://github.com/kelvinjsus.png' }} style={devStyles.image} />
                            </View>
                            <View style={devStyles.infos}>
                                <Text style={devStyles.title}>kelvin</Text>
                                <Text style={devStyles.text}>kelvinjsus{'\n'}</Text>
                            </View>
                        </View>
                        <View style={devStyles.buttonContainer}>
                            <TouchableOpacity
                                onPress={() => Linking.openURL('https://github.com/kelvinjsus')}
                                style={devStyles.button}>
                                <Text style={[devStyles.text, { fontSize: 15 }]}>Visit Profile</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* PROFILE 4 */}
                    <View style={[devStyles.container]}>
                        <View style={devStyles.topContainer}>
                            <View style={devStyles.imageContainer}>
                                <Image source={{ uri: 'https://github.com/KakauFelix.png' }} style={devStyles.image} />
                                <Image style={devStyles.emoji} source={{ uri: 'https://github.githubassets.com/images/icons/emoji/unicode/1f609.png' }} />
                            </View>
                            <View style={devStyles.infos}>
                                <Text style={devStyles.title}>Kauanny{'\n'}Tenorio</Text>
                                <Text style={devStyles.text}>KakauFelix</Text>
                            </View>
                        </View>
                        <View style={devStyles.buttonContainer}>
                            <TouchableOpacity
                                onPress={() => Linking.openURL('https://github.com/KakauFelix')}
                                style={devStyles.button}>
                                <Text style={[devStyles.text, { fontSize: 15 }]}>Visit Profile</Text>
                            </TouchableOpacity>
                        </View>
                    </View>




                    {/* PROFILE 5 */}
                    <View style={[devStyles.container]}>
                        <View style={devStyles.topContainer}>
                            <View style={devStyles.imageContainer}>
                                <Image source={{ uri: 'https://github.com/Gabriel-Antonio-Souto.png' }} style={devStyles.image} />
                                <Image style={devStyles.emoji} source={{ uri: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4bb.png ' }} />
                            </View>
                            <View style={devStyles.infos}>
                                <Text style={devStyles.title}>Gabriel{'\n'}Antonio</Text>
                                <Text style={devStyles.text}>Gabriel{'\n'}Antonio</Text>
                            </View>
                        </View>
                        <View style={devStyles.buttonContainer}>
                            <TouchableOpacity
                                onPress={() => Linking.openURL('https://github.com/Gabriel-Antonio-Souto')}
                                style={devStyles.button}>
                                <Text style={[devStyles.text, { fontSize: 15 }]}>Visit Profile</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* PROFILE 6 */}
                    <View style={[devStyles.container]}>
                        <View style={devStyles.topContainer}>
                            <View style={devStyles.imageContainer}>
                                <Image source={{ uri: 'https://github.com/leOhsantos.png' }} style={devStyles.image} />
                            </View>
                            <View style={devStyles.infos}>
                                <Text style={devStyles.title}>Leonardo{'\n'}Santos  </Text>
                                <Text style={devStyles.text}>leOhsantos</Text>
                            </View>
                        </View>
                        <View style={devStyles.buttonContainer}>
                            <TouchableOpacity
                                onPress={() => Linking.openURL('https://github.com/leOhsantos')}
                                style={devStyles.button}>
                                <Text style={[devStyles.text, { fontSize: 15 }]}>Visit Profile</Text>
                            </TouchableOpacity>
                        </View>
                    </View>


                </ScrollView>


            </View>
        );
    }


}