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

const borderDevStyle = '#f0f6fc1a';

export const devStyles = StyleSheet.create({
    scrollView: {
        marginTop: 100,
        width: '100%',
    },
    container: {
        marginTop: 20,
        marginBottom: 20,
        width: '80%',
        backgroundColor: '#161b22',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
        borderRadius: 33,
    },
    topContainer: {
        paddingBottom: 10, paddingTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    image: {
        width: 65,
        height: 65,
        borderColor: borderDevStyle, borderWidth: 2,
        borderRadius: 100,
    },
    emoji: {
        position: 'absolute',
        backgroundColor: '#0d1117',
        borderRadius: 100,
        width: 15,
        height: 15,
        right: 2,
        bottom: 2,
    },
    title: {
        color: '#c9d1d9',
        fontSize: 24,
        maxWidth: 259,
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'Inter_700Bold',
    },
    text: {
        color: '#8b949e',
        maxWidth: 286,
        textAlign: 'center',
        fontSize: 20,
        fontFamily: 'Inter_400Regular',
    },
    buttonContainer: {
        alignItems: 'center',
        width: '100%',
        marginBottom: 10, marginTop: 5,
    },
    button: {
        backgroundColor: '#21262d',
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 30,
        borderRadius: 6,
        borderColor: borderDevStyle,
        borderWidth: 2,
    }
});