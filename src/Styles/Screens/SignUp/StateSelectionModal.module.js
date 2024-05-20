import { StyleSheet } from 'react-native'
import Theme from '../../../Theme/theme'

const state_styles = StyleSheet.create({
  main_box: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderWidth: 0,
    // borderColor: 'red',
    height: 100,
  },
  scroll_box: {
    backgroundColor: Theme.white,
    padding: 20,
    borderRadius: 8,
    width: '95%',
    borderWidth: 0,
    borderColor: 'pink',
    marginTop: 220,
    marginBottom: 50,
  },
  select_text: {
    fontSize: 16,
    marginBottom: 10,
    color: Theme.gray31,
    fontWeight: Theme.font.fat,
  },
  state_text: {
    fontSize: Theme.font.medium,
    fontWeight: Theme.font.fat,
    marginBottom: 5,
    color: '#7C7C7C80',
  },
})

export default state_styles
