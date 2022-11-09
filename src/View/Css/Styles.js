import {StyleSheet, Dimensions} from 'react-native';
import {
    useFonts,
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
} from '@expo-google-fonts/inter';

export function loadFonts() {
    const [fontsLoaded] = useFonts({
        Inter_400Regular,
        Inter_700Bold
    });

    return fontsLoaded;
}

const fontColor = '#fff';
const backgroundColor = '#204070';
const { width, height } = Dimensions.get('window');

export const Global =  StyleSheet.create({
    topBar: {
        flexDirection: 'column',        
        position: 'absolute',
        top: 0,
        width: '100%',
        height: 40,
        container: {
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 8,
        },
        title: {
            fontFamily: 'Inter_700Bold',
            fontSize: 28,
            color: fontColor,
        },
        image: {
            width: 48,
            height: 48,
            marginRight: 14,
            marginLeft: 21,
        },
        marginWhite: {
            backgroundColor: '#fff',
            height: 24,
            width: '100%',
        }
        
    },

    footer: {
        position: 'absolute',
        bottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        text: {
            color: fontColor,
            fontFamily: 'monospace',
            fontSize: 15,
        }
    },

    title: {
        fontFamily: 'Inter_700Bold',
        fontSize: 25,
        color: fontColor,
    },

    text: {
        fontFamily: 'Inter_400Regular',
        fontSize: 20,
        color: fontColor,
    },

    container: {
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: backgroundColor,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    button: {
        backgroundColor: '#50C3E8',
        width: 286,
        height: 40,
        justifyContent: 'center',
        borderRadius: 10,
        text: {
            fontFamily: 'Inter_400Regular',
            fontSize: 22,
            textAlign: 'center',
            fontWeight: 'bold',
            color: fontColor,
        }
    },

    label: {
        color: fontColor,
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 10,
    },

    input: {
        borderWidth: 2,
        borderColor: '#7ED6F2',
        width: '100%',
        height: 35,
        borderRadius: 10,
        marginBottom: 20,
        color: fontColor,
        paddingLeft: 10,
        
    }

});

export const Initial = StyleSheet.create({
    image: {
        width: 315,
        height: 192,
        marginBottom: 36,
    },

    title:{
        marginLeft: 21,
        marginRight: 21,
        textAlign: 'center',
    },

    text: {
        marginLeft: 37,
        marginRight: 37,
        marginTop: 31,
        marginBottom: 75,
        textAlign: 'center',
    },

    button: {
        width: 319,
        height: 56,
        borderRadius: 25,
    }
});

export const Choose = StyleSheet.create({
    button: {
        height: '20%',
        width: '70%',
        borderRadius: 33,
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,

        elevation: 15,
        alignItems: 'center',
    }
});

export const dataForms = StyleSheet.create({
    container: {
        width: width - 46,
        borderRadius: 15,
        borderWidth: 2,
        borderColor:  '#FFF',
        paddingLeft: 13, paddingRight: 13, paddingBottom: 50,
        marginTop: 21,

    },

    title: {
        position: 'relative',
        top: -20,
        backgroundColor: backgroundColor,
        marginLeft: 7,
    },

    scrollView: {
        marginTop: 121,
        height: height - 180,
    }

});

export const Main = StyleSheet.create({
    
    scrollView: {
        marginTop: 121,
    },

    pickerContainer: {
        borderWidth: 2,
        borderColor: '#7ED6F2',
        width: '100%',
        height: 40,
        borderRadius: 10,
        marginBottom: 20, marginTop: 5,
        justifyContent: 'center',
        picker: {
            color: fontColor,
            paddingLeft: 10,
        },
    },

    textArea: {
        height: 150,
        textDecorationColor: fontColor,
        textAlignVertical: 'top',

    }

});