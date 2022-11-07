import {View, Text, Image} from 'react-native';
import { Global } from '../Css/Styles';

export const Topbar = () => {
    return (
        <View style={Global.topBar}>
            <View style={Global.topBar.marginWhite}></View>
            <View style={Global.topBar.container}>
                <Image style={Global.topBar.image} source={require('../Img/logo.png')}/>
                <Text style={Global.topBar.title}>PMPCL</Text>
            </View>
            
        </View>
        
    )
}


export const Footer = () => {
    return (
        <View style={Global.footer}>
            <Text style={Global.footer.text}>Etec de Guaianazes - © 2022</Text>
        </View>
        
    )
}