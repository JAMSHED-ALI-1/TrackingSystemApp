import { StyleSheet , Dimensions} from "react-native";
import Theme from "../../Theme/theme";
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    main_box: {
      flexDirection: 'row',
      alignSelf: 'center',
      width: windowWidth / 0.71,
      justifyContent: 'center',
      alignItems: 'center',
      gap: 15,
    },
    checkBox: {
      justifyContent: 'center',
      alignItems: 'center',
      width: '22%',
    },
    customBox: {
      width: '18%', 
    },
    selected_box: {
      borderRadius: 5,
      height: 34,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    not_selected_box: {
      borderRadius: 5,
      height: 34,
      width: '105%',
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: Theme.sliderGrey,
      borderWidth: 1,
    },
    selected_text: {
      color: 'white',
    },
    not_selected_text: {
      color: Theme.sliderGrey,
    },
    icon_text_container: {
      flexDirection: 'row',  
  gap:5
    },
    search_box:{
      marginTop:20,
      flexDirection: 'row',
      justifyContent: 'flex-end', 
      gap:100,
      alignItems:'center'
     
      
    },
    search_text_box:{
      width:80,
      height:32,
       justifyContent:'center',
      alignItems:'center',
      borderRadius:4,
  
    }, 
    back_btn:{
      color:Theme.historyBlue,
      
    }
  });
export default styles;  