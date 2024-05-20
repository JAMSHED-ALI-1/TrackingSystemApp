import { StyleSheet } from 'react-native'
import Theme from '../../../Theme/theme'

const create_trip_styles = StyleSheet.create({
  backBox: {
    borderWidth: 0,
    justifyContent: 'center'
  },
  main_box: {
    width: '95%',
    alignSelf: 'center',
    marginTop: 15,
    // marginBottom: '10%',
    // borderWidth: 1,
    flex: 1,
  },
  label_text: {
    fontSize: Theme.font.medium,
    fontWeight: Theme.font.xthin,
    color: Theme.gray53,
    marginBottom: 10,
    paddingLeft: 10
  },

  input_box: {
    height: 40,
    borderColor: Theme.greyLight,
    borderWidth: .3,
    marginBottom: 15,
    padding: 10,
    borderRadius: 8,
    fontSize: 14,
    fontWeight: Theme.font.fat,
    color: Theme.gray31,
  },

  consignor_main_box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  consignor_input: {
    width: '46%',
  },

  // grid boxes

  grid_main_box: {
    flexDirection: 'row',
    // borderWidth: 1,
    height: 120,
    marginBottom: 15,
    // justifyContent: 'center',
    // alignItems: 'center',
    // justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: 20,
  },

  icon_box: {
    height: 100,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6
  },

  row_box_main: {
    width: '29.6%',
  },
  image_type_text: {

    fontSize: Theme.font.medium,
    fontWeight: Theme.font.xthin,
    color: Theme.gray53,
    textAlign: 'center'


  },


  submit_btn_box: {
    flexDirection: 'row',
    // borderWidth: 1,
    justifyContent: 'space-evenly',
    // marginTop:100,
    marginBottom: 50,
  },
  save_box: {
    // borderWidth: 1,
    width: '42%',
    // borderColor: 'red',
  },
  touchable_opacity_save_box: {
    width: '100%',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Theme.secondary,
    borderRadius: 6,
    height: 40,
  },
  save_text: {
    fontSize: 16,
    fontWeight: Theme.font.fat,
    color: Theme.secondary,
  },
  create_gradient_box: {
    width: '42%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
})

export default create_trip_styles
