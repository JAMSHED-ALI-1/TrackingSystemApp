import { StyleSheet } from 'react-native'
import Theme from '../../Theme/theme'

const trip_map_styles = StyleSheet.create({
  scroll_view_box: {
    marginBottom: 20,
    height: 470,
  },
  trip_value: {
    fontSize: Theme.font.small,
    color: '#333322',
    fontWeight: Theme.font.fat,
    marginLeft: 15,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 8,
    margin: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },

  trip_vehicle_info_box: {
    flexDirection: 'row',
    gap: 10,
    alignSelf: 'center',
    justifyContent: 'space-between',
  },

  trip_vehicle_no_text: {
    fontSize: Theme.font.medium,
    fontWeight: Theme.font.bold,
    marginBottom: 5,
  },

  vehicle_distance_duration_box: {
    flexDirection: 'row',
    gap: 2,
    marginBottom: 4,
  },

  vehicle_distance_duration_map_box: {
    flexDirection: 'row',
    gap: 2,
    marginBottom: 10,
  },

  trip_duration_box: {
    width: '45%',
  },

  trip_distance_duration_text: {
    fontSize: Theme.font.xsmall,
    fontWeight: Theme.font.fat,
    width: '50%',
    color: Theme.sliderGrey,
  },

  trip_distance_duration_map_text: {
    fontSize: Theme.font.xsmall,
    fontWeight: Theme.font.fat,
    width: '50%',
    color: Theme.historyBlue,
  },

  trip_running_map_text: {
    fontSize: Theme.font.xsmall,
    fontWeight: Theme.font.fat,
    width: '50%',
    color: Theme.green,
  },

  trip_ideal_map_text: {
    fontSize: Theme.font.xsmall,
    fontWeight: Theme.font.fat,
    width: '50%',
    color: Theme.yellow,
  },

  vehicle_distance_duration_text: {
    fontSize: Theme.font.xsmall,
    fontWeight: Theme.font.fat,
    width: '50%',
    color: '#4F4F4F',
  },

  trip_over_harsh_map_text: {
    fontSize: Theme.font.xsmall,
    fontWeight: Theme.font.fat,
    width: '50%',
    color: Theme.red,
  },

  trip_vehicle_location_box: {
    // borderWidth:1,
    width: '100%',
    height: 43,
    marginTop: 6,
  },
  trip_vehicle_location_text: {
    fontSize: Theme.font.xsmall,
    fontWeight: Theme.font.bold,
    color: '#4F4F4F',
  },

  trip_second_box: {

    width: '45%',
  },

  admin_info_box: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 10,
    alignItems: 'center',
  },
  admin_image_box: {
    height: 20,
    width: 20,
    backgroundColor: Theme.green,
    borderRadius: 15,
  },
  trip_push_box: {
    height: 20,
    width: 20,
    backgroundColor: Theme.red,

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
    height: 40,
    // borderWidth: 1,
    gap: 23,
  },
  admin_vh_line_box: {
    borderWidth: 1,
    width: 1,
    marginLeft: 9,
    borderColor: '#F6F6F6',
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
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
  user_email_password_text: {
    color: Theme.sliderGrey,
    fontSize: Theme.font.xsmall,
    fontWeight: Theme.font.xthin,
  },

  trip_view_on_map_text: {
    color: Theme.historyBlue,
    fontSize: Theme.font.xsmall,
    fontWeight: Theme.font.bold,
    marginTop: 1,
  },

  trip_map_view_box: {
    marginTop: 8,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    gap: 5,
  },
})

export default trip_map_styles
