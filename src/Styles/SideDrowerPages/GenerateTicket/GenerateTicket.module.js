import { StyleSheet } from 'react-native'
import Theme from '../../../Theme/theme'

const ticket_styles = StyleSheet.create({
  vehicle_select_box: {
    height: 40,
    // borderWidth: 1,
    marginTop: 15,
    marginBottom: 15,
  },

  ticket_type_text: {
    // borderWidth: 1,
    marginBottom: -15,
    fontSize: Theme.font.medium,
    fontWeight: Theme.font.fat,
    color: Theme.lightBlack,
  },
  ticket_mess_text: {
    // borderWidth: 1,
    marginBottom: 5,
    // marginTop:
    fontSize: Theme.font.medium,
    fontWeight: Theme.font.fat,
    color: Theme.lightBlack,
  },
  ticket_mess_input_text: {
    height: 60,
      borderWidth: 1,
      borderColor: Theme.silver,
      borderRadius: 6,
      paddingHorizontal: 8,
      color: Theme.silverDark,
      // color:'red',
      fontSize:Theme.font.medium,
      fontWeight: Theme.font.xthin
  },

  ticke_img_upload_box:{
    flexDirection:'column',
    width:"100%",gap:10,height:124 ,
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
  },

  image_upload_button:{
    height: 40,
    borderRadius: 8,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
    justifyContent:"center",
    alignItems:'center',
    gap:10,
    // borderWidth:1,
  },
  ticket_upload_img_text:{
    color: Theme.silverDark,
    fontSize : Theme.font.medium,
    fontWeight : Theme.font.xthin,
  },
  Sub_button:{

    height: 40,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf:'center',
    marginTop: 15,
    width:'100%'

  },

cancel_button:{

    height: 40,
    borderRadius: 5,
    borderWidth:1,
    borderColor:'#DCDCDC',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf:'center',
    marginTop: 15,
    width:'100%',
    color:Theme.greyLight,


  },
  cancel_btn_text:{
    color:Theme.greyLight,
   
  }

})

export default ticket_styles
