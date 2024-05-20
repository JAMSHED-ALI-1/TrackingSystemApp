import { StyleSheet } from "react-native";
import Theme from "../../../../Theme/theme";

const group_tracking_styles = StyleSheet.create({

    main_box:{
        // borderWidth:1,
        // paddingTop:15,
       
      },
      info_box:{
        width:"100%",
        alignSelf:'center',
        // borderWidth:1,
        backgroundColor:Theme.blue.primary,
        // padding:10
        paddingBottom:10,
        alignItems: 'center',
        
      },
      header_box:{
        flexDirection:'row',
        justifyContent:"space-between",
        alignItems:'center',
        width:'90%', 
        alignSelf:"center",
        marginTop:15
        // marginBottom:20,
        // justifyContent:"center",
        // borderWidth:1
    
      },
      header_flex_box:{
        flexDirection:"row",
        gap:10,
        alignItems:'center',
        width:'90%', 
        alignSelf:"center",
        // marginTop:15
      },
      heading_text:{
        fontSize:16,
        fontWeight: Theme.font.xbold,
        color:Theme.white,
      },
      main_cont_box:{
        // borderWidth:1,
        marginTop:15,
        width:"95%",
        alignSelf:'center'
      },
      animation_box:{
    
        // borderWidth:1,
        height:160,
        borderRadius:8,
        backgroundColor: Theme.gray53,
        marginBottom:15
    
      },
      filter_text_value:{
        fontSize:20,
        fontWeight: Theme.font.xxbold,
        color: Theme.black
      },
      
      filter_tracking_create_text:{
        fontSize: 16,
        fontWeight: Theme.font.xxbold,
        color: Theme.blue.primary,
      },

      scroll_filter_box:{
        // borderWidth:1,
        marginRight:10,
    // padding:5,
    paddingHorizontal:5,
        width: 100,
        height:35,
        justifyContent:"center",
        alignItems:"center",
        // borderWidth:
        borderRadius:16,
        overflow:"hidden"
      },

      scroll_filter_text:{
        fontSize: Theme.font.medium,
        fontWeight: Theme.font.fat,

      },

      edit:{
        fontSize: Theme.font.medium,
        fontWeight: Theme.font.fat,
        color: Theme.blue,

      },


      card:{
        // height:184,
        // borderWidth:1,
        marginTop:15,
        // borderTopLeftRadius:8,
        // borderTopRightRadius:8,
        backgroundColor:Theme.white,
        borderRadius:8,
        elevation:2,
        width:'90%',
        alignSelf:'center',
        // paddingBottom:10
      },
      vehicle_no_box:{
        width:'25%',
        justifyContent:"center",
        alignItems:'center',
        height:22,
        backgroundColor: '#29A7E433',
        borderTopLeftRadius:8
      },
      vehicle_no_text:{
        fontSize: Theme.font.small,
        fontWeight: Theme.font.xbold,
        color: Theme.black
      },
      validity_flex_box:{
        // borderWidth:1,
        flexDirection:'row',
        gap:10,
        // paddingHorizontal:15,
        // justifyContent:'center',
        // alignItems:'center',
      },
      validity_text:{
        fontSize: Theme.font.xsmall,
        fontWeight:Theme.font.fat,
        color: Theme.blue.primary,
      },
      img_box:{
        height:56,
        width:56,
        borderRadius:28,
        // borderWidth:1,
        backgroundColor: Theme.gray53
      },
      driver_info_flex_box:{
        // borderWidth:1,
        flexDirection:'row',
        gap:10,
        paddingHorizontal:10,
        alignItems:"center",
        // height:30
        // width:'100%'
        marginTop:5
      },
      driver_info_right_flex_box:{
        // borderWidth:1,
        width:"80%",
        flexDirection:'row',
        justifyContent:"space-between",
        alignItems:'center',
        // marginTop:10
    
      },
      driver_name_no_flex_box:{
        flexDirection:'row', 
        gap:10,
        alignItems:'center',
    
      },
      name_text:{
        fontSize:16,
        color: Theme.black,
        fontWeight: Theme.font.fat,
    
      },
      driver_number_text:{
        fontSize: Theme.font.small,
        fontWeight: Theme.font.xthin,
        color: Theme.black
    
      },
      address_box:{
        marginTop:5,
        // borderWidth:1, 
        width:'80%'
      },
      address_text:{
        fontSize: Theme.font.small,
        fontWeight: Theme.font.xthin,
        color: Theme.blue.primary
      },
    
      concent_box:{
        flexDirection:'row',
        marginHorizontal:15,
        justifyContent:'space-between',
        marginTop:10
      },
      concent_child_box:{
        flexDirection:'row',
        alignItems:'center',
        gap:3
      },
      concent_text:{
        fontSize: Theme.font.xsmall,
        fontWeight: Theme.font.xthin,
        color: Theme.green
    
      },
      check_box:{
        height:12,
        width:12,
        borderRadius:10,
        backgroundColor:Theme.green,
        justifyContent:"center",
        alignItems:"center"
      },
      last_update_text:{
        fontSize: Theme.font.xsmall,
        fontWeight: Theme.font.xthin,
        color: Theme.blue.primary
      },
      last_update_time:{
        fontSize: Theme.font.xsmall,
        fontWeight: Theme.font.xthin,
        color: Theme.blue.secondary
      },
      hishory_box:{
        height: 46,
        // borderWidth:1,
        backgroundColor:'#EBF2FC',
        borderBottomRightRadius:8,
        borderBottomLeftRadius:8,
        marginTop:15,
        flexDirection:'row',
        justifyContent:"space-between",
        // marginHorizontal:10
        paddingHorizontal:10,
        // justifyContent
        alignItems:"center",
      },
      icons_box:{
        // borderWidth:1,
        width:'20%',
        justifyContent:"center",
        alignItems:'center'
      },
      icons_text:{
        fontSize: Theme.font.xsmall,
        fontWeight: Theme.font.xthin,
        color: Theme.blue.primary,
        // marginTop:2
      }

});

export default group_tracking_styles;