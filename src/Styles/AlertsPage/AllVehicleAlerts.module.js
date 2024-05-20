import { StyleSheet } from 'react-native';
import Theme from '../../Theme/theme';

const main_alerts_styles = StyleSheet.create({
  main_box: {
    width: '95%',
    alignSelf: 'center',
  },
  header_box: {
    flexDirection: 'row',
    // justifyContent:'',
    gap: 20,
    // borderWidth:1,
    alignItems: 'center',
    marginBottom: 30,
    alignItems: 'center',
  },
  notifaction_text: {
    fontSize: 25,
    color: Theme.secondary,
  },
  scroll_view: {
    borderWidth: 0,
    marginBottom: 20,
    height: 725,
  },
  card: {
    width: '95%',
    // borderWidth:.5,
    // marginTop:15,
    alignSelf: 'center',
    borderRadius: 7,
    padding: 10,
    // paddingVertical:5,
    backgroundColor: Theme.white,
    borderColor: Theme.secondary,
    elevation: 2,
    marginBottom: 15,
  },
  flex_box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 7,
  },
  vehicle_number_text: {
    color: Theme.blue.primary,
    fontSize: Theme.font.medium,
    fontWeight: Theme.font.bold,
  },
  ignition_text: {
    fontSize: Theme.font.small,
    fontWeight: Theme.font.fat,
  },
  time_text: {
    fontSize: Theme.font.small,
    fontWeight: Theme.font.bold,
    color: Theme.gray31,
  },
})

export default main_alerts_styles
