
import { StyleSheet } from 'react-native';
import Theme from '../../../Theme/theme';

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    margin: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },
  admin_info_box: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 10,
    alignItems: 'center',
  },
  admin_image_box: {
    height: 30,
    width: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: Theme.font.small,
    fontWeight: Theme.font.fat,
    color: '#333322',
  },
  admin_details_box: {
    flexDirection: 'row',
    height: 75,
    gap: 23,
  },
  admin_vh_line_box: {
    borderWidth: 1,
    width: 1,
    marginLeft: 13,
    borderColor: '#F6F6F6',
    justifyContent: 'center',
    alignItems: 'center',
    height: 85,
  },
  admin_details_info_box: {
    flexDirection: 'column',
  },
  admin_details_user_info: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 5,
  },
  admin_line: {
    height: 12,
    marginTop: 2,
    width: 2,
    borderWidth: 0.5,
    borderColor: '#F6F6F6',
    backgroundColor: '#F6F6F6',
  },
  user_name_text: {
    color: Theme.blue.primary,
    fontSize: Theme.font.small,
    fontWeight: Theme.font.fat,
  },
  user_mobile_num_text: {
    color: Theme.blue.primary,
    fontSize: Theme.font.xsmall,
    fontWeight: Theme.font.fat,
  },
  user_email_password_text: {
    color: Theme.blue.primary,
    fontSize: Theme.font.xsmall,
    fontWeight: Theme.font.xthin,
  },
  check_icon_box: {
    height: 10,
    width: 10,
    borderRadius: 5,
    justifyContent: 'center',
    marginTop: 3,
    backgroundColor: '#0A8F47',
  },

  description: {
    fontSize: 16,
    marginBottom: 8,
  },
  map: {
    height: 200,
    marginTop: 8,
  },
  add_alert_box: {
    // borderWidth:1,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexGrow: 1,
    gap: 40,
  },
  add_alert_flex_child: {
    flexDirection: 'row',
    gap: 5,
    flexGrow: 1,
  },

  add_alert_text: {
    color: Theme.secondary,
    fontSize: 11,
    fontWeight: Theme.font.fat,
  },
})

export default styles;

