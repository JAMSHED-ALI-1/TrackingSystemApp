import { StyleSheet, Dimensions } from 'react-native'
import Theme from '../../Theme/theme'

const windowWidth = Dimensions.get('window').width
const device_details_styles = StyleSheet.create({
  nearby_heading_box: {
    height: 50,
    // borderWidth:1
  },
  nearby_heading_text: {
    fontSize: 20,
    fontWeight: Theme.font.bold,
    color: Theme.greyDark,
  },

  nearby_main_container: {
    backgroundColor: Theme.white,
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    // justifyContent: 'center',
    // borderWidth: 2,
    // marginTop: statusBarHeight,
    // paddingTop: 10,
  },
  nearby_col: {
    height: 50,
    borderRadius: 4,
    borderColor: Theme.aqua,
    backgroundColor: Theme.white,
    // borderWidth: 1,
  },
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    // borderColor: 'blue',
    // borderWidth: 1,
  },

  nearby_text_box: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
    width: '96%',
    marginBottom: 2,
    borderRadius: 4,
    height: 18,
    backgroundColor: Theme.white,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: .5
  },
  nearby_text_child: {
    flex: 1,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Theme.aqua,
    width: '124%',
    borderRadius: 4,
    height: '100%',
    backgroundColor: Theme.white,
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: Theme.aqua,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
      },
      android: {
        elevation: 20,
      },
    }),
  },

  nearby_text: {
    fontSize: 12,
    fontWeight: '500',
    color: Theme.greyDark,
  },
  device_info_box: {
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    gap: 20,
  },
  modal_box: {
    borderColor: 'red',
    marginTop: '50%',
    backgroundColor: Theme.white,
    height: 300,
    // borderWidth: 1,
  },

  device_info_img: {
    padding: 2,
    width: windowWidth / 9.0,
    height: 35,
    borderWidth: 2,
  },
  close_icon: {
    zIndex: 1,
    marginTop: 45,
    // marginLeft: 320,
    alignItems: 'flex-end',
    marginHorizontal: 10,
    marginBottom: 10,
  },
  modal_child_box: {
    width: '100%',
    flexDirection: 'column',
  },

  modal_close_box: {
    width: '100%',
    alignItems: 'flex-end',
    marginRight: 30,
  },
  close_box: {
    // borderWidth:1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    height: 30,
    // width:70,
    // paddingHorizontal:10
  },
  close_text: {
    fontSize: Theme.font.medium,
    fontWeight: Theme.font.fat,
    color: Theme.blue.primary,
    // marginTop:10
  },
  flex_box: {
    flexDirection: 'row',
    gap: 5,
  },
  render_box:{
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  }
})

export default device_details_styles
