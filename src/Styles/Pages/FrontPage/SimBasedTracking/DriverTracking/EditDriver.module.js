import { StyleSheet } from 'react-native'
import Theme from '../../../../../Theme/theme'

const edit_driver_styles = StyleSheet.create({
  main_box: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
    borderWidth: 1,
  },
  edit_box: {
    backgroundColor: Theme.white,
    padding: 20,
    borderRadius: 10,
    // borderWidth: 1,
    width: '85%',
  },
  close_box: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 10,
    gap: 5,
    // borderWidth:1,
    // height:30,
    alignItems: 'flex-end',
    alignItems:'center',
  },
  close_text: {
    fontSize: Theme.font.medium,
    color: Theme.blue.primary,
    color: Theme.blue.primary,
  },
  label:{
    fontSize: Theme.font.medium,
    color: Theme.blue.primary,
    fontWeight: Theme.font.fat,
    marginBottom:10

  },

  input: {
    borderWidth: 0.5,
    borderColor: Theme.gray53,
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal:15,
    marginBottom: 10,
  },
  img_picker_btn: {
    backgroundColor: '#C7DEFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
    justifyContent:'center',
    alignContent:'center'
    // borderWidth:1,
  },
  img_picker_btn_text: {
    color: Theme.blue.primary,
    fontWeight: Theme.font.fat,
    textAlign:'center'
    
  },
  selected_image: {
    width: 80,
    height: 80,
    resizeMode: 'cover',
    borderRadius: 5,
    marginBottom: 10,
    borderRadius:40,
    // borderWidth:1,
  },
  save_box:{
    backgroundColor: Theme.blue.primary,
    // borderWidth:1,
    padding:10,
    borderRadius:6,
    justifyContent: 'center',  
    alignItems: 'center',
  },
  save_text:{
    fontSize: Theme.font.small,
    color: Theme.white,
  }
})

export default edit_driver_styles
