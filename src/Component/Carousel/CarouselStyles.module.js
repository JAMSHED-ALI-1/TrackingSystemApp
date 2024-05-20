import { StyleSheet } from "react-native";
import Theme from '../../Theme/theme';

const styles = StyleSheet.create({
    imageContainer: {
        // Add any common styles for the image container here
        paddingTop: 0,
        // borderWidth: 2,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        overflow: 'hidden',
        height: 200,
        // borderColor:'red'
        // marginHorizontal: 15
    },
    image: {
        height: 195,
        borderRadius: 15,
        // width:'100%',
        // borderWidth:1,
        // paddingHorizontal:15
        // borderBottomLeftRadius: 10,
        // borderBottomRightRadius: 10,
        // You can add other styles for the image here
    },
    dotIndicator: {
        height: 8,
        width: 8,
        borderRadius: 4,
        marginHorizontal: 4,
    },
    dotIndicatorActive: {
        backgroundColor: Theme.blue.primary,
    },
    dotIndicatorInactive: {
        backgroundColor: Theme.grey,
    },
    indicatorView: {
        position: "absolute",
        bottom: 10,
        flexDirection: "row",
        justifyContent: "center",
        width: "100%",
    }
});

export default styles;
