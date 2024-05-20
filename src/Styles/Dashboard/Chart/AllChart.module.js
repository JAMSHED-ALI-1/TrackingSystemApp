import { StyleSheet } from 'react-native'
import Theme from '../../../Theme/theme'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
    gap: 20,
    marginHorizontal: 10,
    borderWidth: 1,
    // flexDirection: 'row',
    gap: 5,
    backgroundColor: Theme.white,
    borderRadius: 6,
    borderColor: '#F8F8F8',
    overflow: 'hidden',
    // marginRight:50
    paddingRight:20
  },

  trip_cont: {
    // flex: 1,
    // alignSelf: 'center',
    marginHorizontal: 10,
    flexDirection: 'row',
    backgroundColor: Theme.white,
    borderRadius: 6,
    //   borderColor: '#F8F8F8',
    overflow: 'hidden',
    // borderWidth:.5
    paddingRight:20
  },
  bar_chart_box: {
    alignSelf: 'center',
    overflow: 'visible',
    alignSelf: 'center',
    justifyContent: 'center',
    // borderWidth: 1,
    overflow: 'hidden',
  },
  trip_text_box: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  heading_box: {
    flexDirection: 'row',
    gap: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading_text2: {
    fontSize: 9,
    fontWeight: Theme.font.fat,
    color: Theme.sliderGrey,
    marginTop:10
  },

  trip_text: {
    fontSize: Theme.font.small,
    fontWeight: Theme.font.fat,
    color: Theme.lightBlack,
    //   marginBottom: 15,
    // marginTop: 10,
    // paddingLeft:10
  },
  heading_text: {
    fontSize: Theme.font.small,
    fontWeight: Theme.font.fat,
    color: Theme.lightBlack,
    marginTop: 5,
    // marginBottom:0,
  },

  // alert styles

  alert_ingnation_text: {
    color: Theme.blue.primary,
    fontSize: Theme.font.xsmall,
    fontWeight: Theme.font.fat,
    marginTop: 10,
  },
  alert_bottom_text: {
    color: Theme.blue.primary,
    fontSize: 6,
    fontWeight: Theme.font.fat,
    marginBottom: 10,
  },
})

export default styles
