import { StyleSheet, Dimensions } from 'react-native';
import Theme from '../Theme/theme';
// const windowWidth =  Dimensions.get('window').width;

const windowWidth = Dimensions.get('window').width
const card_styles = StyleSheet.create({
  cardContainer: {
    marginTop: 15,
    // borderWidth: .5

  },
  container: {
    flex: 1,
    // backgroundColor: 'white',
    // borderWidth: .5,
    width: '100%',

  },
  card_container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 20,


  },
  column: {
    flex: 1,
    marginBottom: 16,

  },
  card: {
    // backgroundColor: 'white',
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardContent: {
    fontSize: 16,
  },

  //   grid box

  grid_box: {
    // flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    // borderWidth: 1
    // justifyContent: 'space-between',
    // gap: 20

  },

  box: {
    // margin: 5,
    width: windowWidth / 3.59,
    // height: 110,
    shadowColor: '#',
    shadowRadius: 3.84,
    borderRadius: 8,
    // backgroundColor: 'white',
    borderRadius: 8,
    padding: 11,
    marginHorizontal: 8,
    alignItems: 'center',
    // justifyContent: 'center',
    justifyContent: 'space-between',
    // ...Platform.select({
    //   ios: {
    //     shadowColor: 'black',
    //     shadowOffset: { width: 0, height: 2 },
    //     //   shadowOpacity: 0.2,
    //     shadowRadius: 4,
    //   },
    //   android: {
    //     elevation: 4,
    //   },
    // }),
    // borderWidth: 1,
  },
  iconImage: {
    width: 25,
    height: 25,
    // color:'red'
  },
  cardTitle: {
    fontSize: 20,

  },
  Report_text: {
    fontSize: 16,
    // margin: 8,
    padding: 10,
    fontWeight: Theme.font.bold,
    color: Theme.blue.primary,
    // textAlign:'center',

  },
  heading: {

    fontSize: Theme.font.small,
    fontWeight: Theme.font.fat,
    color: Theme.blue.primary,
    textAlign: 'center',
    marginTop: 5
  }

})

export default card_styles;
