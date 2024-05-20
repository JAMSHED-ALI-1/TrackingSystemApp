import { StyleSheet } from "react-native";

const language_styles = StyleSheet.create({
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 4,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#888888',
        elevation:1
      },
      innerCheckbox: {
        width: 14,
        height: 14,
        borderRadius: 10,
        borderWidth:2,
        borderColor:'white',
        
      },
      language_main_box:{
        flexDirection: 'row',
        padding: 20,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'space-between', 
        height:60,
        width: '90%',
        alignSelf: 'center',
        marginVertical: 10,
      }

});

export default language_styles;