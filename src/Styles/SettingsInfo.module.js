import { StyleSheet, Dimensions } from 'react-native'
const setting_info = StyleSheet.create({
  cardContainer: { 
  },
  sett_cardItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sett_iconContainer: {
    marginRight: 16,
    width: '14%',
    height: 45,
    borderColor: '#000',
    borderRadius: 50,
    backgroundColor: '#8E0E00',
    margin: 10,
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    paddingTop: 10
  },
  sett_textContainer: {
    flex: 1,
  },
  sett_title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  arrowContainer: {
    marginLeft: 16,

  },

});

export default setting_info
