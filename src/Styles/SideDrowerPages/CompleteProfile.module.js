import { StyleSheet } from 'react-native'
import Theme from '../../Theme/theme'

const com_profile_styles = StyleSheet.create({
  profile_box: {
    height: 180,
    // borderWidth:1,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  profile_log: {
    flexDirection: 'row',
    gap: 15,
    marginTop: 15,
    marginLeft: 15,
  },
  heading_text: {
    color: Theme.white,
    fontSize: 16,
    fontWeight: Theme.font.xthin,
  },
  profile_image_box: {
    // borderWidth:1,
    marginTop: 12,
    // height:'80%'
    justifyContent: 'center',
    alignItems: 'center',
  },
  img_box: {
    borderWidth: 3,
    height: 85,
    width: 85,
    borderRadius: 42,
    backgroundColor: Theme.gray53,
    borderColor: Theme.white,
  },
  change_photo_text: {
    fontSize: Theme.font.small,
    fontWeight: Theme.font.fat,
    color: Theme.white,
    marginTop: 12,
  },
  input_main_box: {
    width: '90%',
    alignSelf: 'center',
    marginTop:20
  },
  lable_text:{
    fontSize: Theme.font.small,
    fontWeight: Theme.font.xthin,
    color: Theme.lightBlack,
  },

  input_box: {
    borderBottomWidth: 1,
    borderRadius: 6,
    fontSize: Theme.font.medium,
    fontWeight: Theme.font.fat,
    color: Theme.lightBlack,
    borderColor:'#E8E8E8'
    // marginBottom:20
   
    // width:'95%',
    // alignSelf:'center',
    // height:40,
  },

  password_box: {
    flexDirection: 'row',
    gap: 10,
    borderBottomWidth: 1,
    // marginTop:20
    borderColor: '#E8E8E8'
  },
  upload_box: {
    marginTop: 20,
  },
  upload_linear_box: {
    height: 40,
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:6
  },
  upload_text:{
    color: Theme.white,
    fontSize: 16,
    fontWeight: Theme.font.fat,
  }
})

export default com_profile_styles
