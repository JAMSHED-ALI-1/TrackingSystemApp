import { StyleSheet } from "react-native";
import Theme from "../../Theme/theme";

const styles = StyleSheet.create({
  driver_container: {
    backgroundColor: Theme.offWhite,
    // justifyContent: 'center',
    // height: 60, 
    paddingTop: 15,
    borderWidth: .5,
    flex: 1,
    width: '100%'

  },

  add_driver_card: {
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 20,
    shadowColor: Theme.black,
    // shadowOffset: { width: 0, height: 1 },
    // shadowOpacity: 0.8,
    // shadowRadius: 4,
    // elevation: 1.5,
    borderRadius: 10,
    borderWidth: 1
  },

});

export default styles;