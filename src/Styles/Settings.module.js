import { StyleSheet, Dimensions } from 'react-native'
const settings_styles = StyleSheet.create({
      scrollViewContainer: {
            flexGrow: 1,
      },
      dash_main: {
            backgroundColor: 'rgb(245, 245, 245)',
            padding: 16,
            borderRadius: 8,
            // marginTop: 16,
            shadowColor: '#000',
            shadowOpacity: 0.2,
            shadowRadius: 4,
            elevation: 4,
            width: '100%',
      },
      dash_info_card: {
            backgroundColor: 'white',
            position: 'relative',
            borderRadius: 10,
            marginTop: 16,
            shadowColor: '#000',
            shadowOpacity: 0.2,
            shadowRadius: 4,
            elevation: 4,
            width: '100%',
            height: 320,
            marginBottom: 30,
      },
      iconContainer: {
            flexDirection: 'row',
            alignItems: 'center',

            position: 'absolute',

            top: -60,
            left: 20,
            height: 100,
            width: '27%',
            // borderWidth: 1,
            borderColor: '#000',
            borderRadius: 50,
            // backgroundColor: 'red',
            marginTop: 20,

      },
      iconContainer_settings: {
            flexDirection: 'row',
            alignItems: 'center',

            position: 'absolute',

            top: -55,
            left: 20,
            height: 80,
            width: '22%',
            borderColor: '#000',
            borderRadius: 50,
            backgroundColor: '#8E0E00',
            marginTop: 20,
            

      },

      text: {
            fontSize: 30,
            fontWeight: '600',
            marginLeft: 20,
            width: '180%',
            marginTop: 20,
            paddingLeft: 12,
            marginTop: 25
      },
      account_info: {
            marginTop: 80,
            paddingLeft: 25,
            // marginBottom: 20,
            // paddingBottom:-100,
            // height: 300,
            marginBottom: -50,
            // borderWidth:2,
            // borderColor:'teal'
      },
      account_info_text: {
            opacity: 0.5,
      },
      account_user_info: {
            fontSize: 20,
            fontWeight: '400',
      },
      setting_card: {
            backgroundColor: 'white',
            position: 'relative',
            borderRadius: 10,
            marginTop: 16,
            shadowColor: '#000',
            shadowOpacity: 0.2,
            shadowRadius: 4,
            elevation: 4,
            width: '100%',
            height: 650,
            marginBottom: 30,
      },
      setting_card_info: {
            paddingTop: 35,
            margin: 20
      },
      trackButton: {
            backgroundColor: '#8E0E00',
            padding: 12,
            borderRadius: 8,
            marginBottom: 55,
            alignItems: 'center',
      },
      trackButtonText: {
            color: '#fff',
            fontWeight: 'bold',
      },
});

export default settings_styles