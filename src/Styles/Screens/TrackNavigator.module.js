import { StyleSheet } from "react-native";

const track_nav_styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: Theme.white,
        marginTop: 0,
        marginBottom: 5,
        width: '100%',
        overflow: 'hidden',
        // borderTopWidth: 6, 
      },
      main_header_box:{
        // height:55, 
        // marginTop:15,
        // paddingTop:15,
        // borderWidth
      },
      tabBar: {
        flexDirection: 'row',
        // paddingTop: StatusBar.currentHeight,
        // borderWidth: 1,
        // borderColor: Theme.mykonos,
        // paddingTop: -15,
        marginHorizontal: 8,
        // marginVertical: 3,
        marginTop: 0,
        // borderRadius: 10,
        // overflow: 'hidden',
        height: 40,
      },
      tabItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        // gap:20,
        marginLeft: 10,
        overflow: 'hidden',
      },
});

export default track_nav_styles;