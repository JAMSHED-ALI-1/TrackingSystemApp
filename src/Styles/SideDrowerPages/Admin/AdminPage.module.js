import { StyleSheet } from 'react-native'
import Theme from '../../../Theme/theme'

const admin_styles = StyleSheet.create({
  header_box: {
    marginBottom: 1,
    // borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // justifyContent:'center',
    alignItems: 'center',
  },
  search_box: {
    marginRight: 18,
  },
  admin_details_box: {
    height: 52,
    borderBottomWidth: 1,
    backgroundColor: Theme.blue.primary,
    borderColor: Theme.secondary,
    flexDirection: 'row',
    // justifyContent:'center',
    justifyContent: 'flex-start',

    alignItems: 'center',
    gap: 10,
  },
  admin_image_box: {
    marginLeft: 10,
    height: 30,
    width: 30,
    // borderWidth:1,
    borderRadius: 15,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  admin_name_text: {
    fontSize: 16,
    color: Theme.white,
    fontWeight: Theme.font.fat,
  },
  type_of_user_text: {
    fontSize: Theme.font.xsmall,
    color: Theme.white,
    fontWeight: Theme.font.fat,
  },
})

export default admin_styles
