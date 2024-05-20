import { StyleSheet } from 'react-native'
import Theme from '../../Theme/theme'

const geofence_styles = StyleSheet.create({
  main_box: {
    // padding:10,
    paddingHorizontal: 10,
    height: '85%',
    // borderWidth:1
    //  marginBottom:40
    // backgroundColor:'transparent',
  },
  heading_box: {
    width: '100%',
    height: 60,
    paddingHorizontal: '2.5%',
    // borderWidth:1,
    flexDirection: 'row',
    // gap:10,
    justifyContent: 'space-between',
    // borderWidth:1,
  },
  heading_left_box: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hr_line: {
    height: 1,
    color: Theme.hrLine,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: Theme.hrLine,
    marginBottom: 15,
  },
  geo_card: {
    backgroundColor: Theme.white,
    // borderWidth: 2,
    // paddingBottom: 7,
    padding: 12,
    borderRadius: 10,
    // marginTop: 2,
    marginBottom: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    shadowColor: Theme.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
    // borderColor:'red',
    width: '100%',
  },
  flex_box1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    // gap: 8,
    // borderWidth: 1,
    // justifyContent:"center",
    // alignItems: "center"
    // borderWidth:1
  },
  flex_box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // width: '90%',
    // gap: 8,
    // borderWidth: 1,
    // justifyContent:"center",
    // alignItems: "center"
    // borderWidth:1
  },
  type_flex_box: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 10,
    marginTop: 10,
    // borderWidth:1,
  },
  text: {
    fontSize: Theme.font.medium,
    fontWeight: Theme.font.fat,
    color: Theme.gray31,
  },
  nameText: {
    fontSize: Theme.font.large,
    fontWeight: Theme.font.xbold,
    color: Theme.gray31,
  },
  addressText: {
    fontSize: Theme.font.small,
    fontWeight: Theme.font.fat,
    color: Theme.gray31,
    // textAlign: 'center',
  },
  address_box: {
    width: '75%',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: Theme.white,
    borderColor: '#D7D7D7',
    padding: 8,
    // height: 38,
    // padding:5
    // marginLeft: 10
    // justifyContent:'center',
    // alignItems:'center'
  },

  option_box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 5,
  },
  option_text: {
    fontSize: Theme.font.medium,
    fontWeight: Theme.font.xbold,
    color: Theme.secondary,
  },

  create_box: {
    // position:'absolute',
    // zIndex:1,
    // // bottom:40,
    // bottom:'100%',
    // left:'85%',
    // right:0,
    marginTop: -30,
    right: 15,
    // flexDirection:'row',
    // justifyContent:'flex-end',
    marginLeft: '85%',
    height: 50,
    width: 50,
    // alignItems:'flex-end'
    backgroundColor: Theme.blue.primary,
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth:1,
    // marginBottom:20
    // backgroundColor:"transparent",
  },

  geo_box: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    right: 10,
    position: 'absolute',
    bottom: 0,
  },
  geo_text: {
    fontSize: Theme.font.small,
    color: Theme.secondary,
    fontWeight: Theme.font.fat,
  },
  heading_text:{
    fontSize: Theme.font.medium,
    fontWeight: Theme.font.bold,
    color: Theme.blue.primary,

  }
})

export default geofence_styles
