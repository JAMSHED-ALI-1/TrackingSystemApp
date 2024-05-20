import { StyleSheet } from 'react-native';
import Theme from '../../Theme/theme';

const all_vehicle = StyleSheet.create({
  all_vehicle_main_box: {
    marginTop: 15,
  },
  all_vehicle_header_box: {
    marginBottom: 15,
    flexDirection: 'row',
    // borderWidth: 1,
    justifyContent: 'space-between',
  },
  right_header_box: {
    flexDirection: 'row',
    gap: 5,
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight:16,
  },
  header_text:{
  color: Theme.secondary,
    fontSize: Theme.font.small,
    fontWeight: Theme.font.bold,
  }
})

export default all_vehicle;
