import {StyleSheet} from 'react-native';
import Theme from '../Theme/theme';
const time_date_styles = StyleSheet.create({

    time_date_select_box:{
        borderWidth: 1,
        flexDirection: 'row',
        gap: 10,
        borderRadius: 4,
        padding: 5,
        marginBottom:8,
        backgroundColor: Theme.white,
        height:30,
        borderColor: '#EAEAEA'
        // paddingHorizontal:15,
        // marginHorizontal:10
      },
      date_time_text:{
        color: Theme.blue.primary,
        fontSize: Theme.font.small,
        fontWeight: Theme.font.bold,
      }
});

export default time_date_styles;
