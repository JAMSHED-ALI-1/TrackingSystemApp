import { StyleSheet, Dimensions } from 'react-native';
import Theme from '../../Theme/theme';

const screenHeight = Dimensions.get('window').height,
    LoginStyles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: Theme.white,
        }, back: {
            ...StyleSheet.absoluteFillObject,
            zIndex: -1,
        }, keyboardAvoidingContainer: {
            flex: 1,
            zIndex: -1,
        },
        logoContainer: {
            zIndex: 1,
            position: 'absolute',
            top: screenHeight / 2,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            // marginTop: '10%',
            // alignContent: 'center',
            // borderWidth: .5
        },
        logoImage: {
            height: 100,
            width: 100,
            marginRight: 8,
            borderRadius: 53,
        },
        formContainer: {
            flex: 1,
            marginHorizontal: '11%',
            marginTop: '40%',

            // marginVertical: 32,
            // borderWidth: 1,
            // overflow: 'hidden'
        },
        greetingText: {
            fontSize: 22,
            fontWeight: 'bold',
            color: Theme.blue.secondary,
            alignSelf: 'center',
            marginBottom: 12,
        },
        inputContainer: {
            marginBottom: 12,
        },
        labelText: {
            fontSize: 13,
            fontWeight: '400',
            marginVertical: 8,
        },
        textInputWrapper: {
            width: '100%',
            height: 45,
            borderColor: Theme.black,
            // borderWidth: 1,
            borderRadius: 8,
            alignItems: 'center',
            justifyContent: 'center',
            // paddingLeft: 22,
        },
        textInput: {
            width: '100%',
            height: 45,
            borderColor: Theme.black,
            borderWidth: 1,
            borderRadius: 8,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 15
        },
        eyeIconContainer: {
            position: 'absolute',
            right: 12,
            borderWidth: 0,
        },
        checkboxContainer: {
            flexDirection: 'row',
            // marginVertical: 6,
        },
        checkbox: {
            marginRight: 8,
        },
        checkboxText: {
            fontSize: 16,
        },
        loginButton: {
            // marginTop: 18,
            borderRadius: 8,
            justifyContent: 'center',
            alignItems: 'center',
            height: 45,
            overflow: 'hidden',

            // borderWidth: 1
        },
        loginButtonGradient: {
            flex: 1,
            height: '100%',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            // borderWidth: 1,
            // paddingVertical: 10,
        },
        forgetPassword: {
            color: Theme.blue.secondary,
            alignSelf: 'flex-end',
        },
        loginButtonText: {
            fontSize: 17,
            fontWeight: 'bold',
            color: Theme.white,
            alignSelf: 'center',

        },

        additionalLinksContainer: {
            flex: 1,
            flexDirection: 'row',
            marginHorizontal: '11%',
            // marginTop: 42,
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '30%',
            // borderWidth: 1,
            // justifyContent: 'center',
        },
        linkButton: {
            // marginTop: 20,
            marginBottom: 4,
            borderRadius: 8,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            height: 40,
            overflow: 'hidden',
            // borderWidth: 1,
            // width: '0%',
        },
        linkButtonBorder: {
            borderWidth: 1
        },
        linkButtonWrapper: {
            flex: 1,
            flexDirection: 'row',
            height: '100%',
            width: '100%',
            borderRadius: 8,
            justifyContent: 'center',
            alignItems: 'center',
            // borderWidth: 1,
            // paddingVertical: 10,
        },
        linkButtonText: {
            fontSize: 15,
            color: Theme.blue.primary,
            fontWeight: 'bold',
            alignSelf: 'center',
            // color: Theme.black,
        },
        marginTopForContent: {
            marginTop: 15,
        },
        linkButtonTextContact: {
            fontSize: 15,
            color: Theme.black,
            fontWeight: 'normal',
            alignSelf: 'center',
        },
        modalBackground: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black background

            // borderWidth: .5,
        },
        modalContent: {
            backgroundColor: "white",
            borderRadius: 20,
            paddingTop: 10,
            paddingHorizontal: 40,
            // alignItems: "center",
            elevation: 5, // Shadow on Android
            shadowColor: "black",
            shadowOpacity: 0.5,
            shadowRadius: 5,
            shadowOffset: {
                width: 0,
                height: 2,
            },
            // borderWidth: 5,

        },
        contact_box: {
            justifyContent: "center",
            alignItems: "center",
            color: Theme.white,
            borderRadius: 5,
            height: 30,
            marginBottom: 15
        }, contact: {
            color: Theme.white
        },
        contactText: {
            // color: "white",     d
            fontSize: 18,
        },
        contactInfo: {
            // justifyContent: "center"
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 5,
            justifyContent: "center",
            // borderWidth: .5,
        },
        closeButton: {
            marginTop: 15,
            alignItems: "center",
            borderWidth: .5,
            borderRadius: 6,
            marginBottom: 15
        }
    });

export default LoginStyles;
