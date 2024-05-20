import { View, Text, StyleSheet, Button } from "react-native"

const Vehicle = ({ navigation }) => {
    return (

        <View style={styles.container}>
            <Button
                title="Home"
                onPress={() => navigation.navigate("Home")}
                style={{
                    marginTop: 22,
                    width: "100%"
                }}
            />
            <Text>
                Vehicle
            </Text>
        </View>
    )
}

export default Vehicle;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'dodgerblue',
        // borderWidth: 2,
        // width: '90%',
    },
});