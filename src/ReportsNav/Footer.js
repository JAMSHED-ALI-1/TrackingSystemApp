import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import FilledGraph from '../../assets/Filled_graph-box.svg';
import Download_icon from '../../assets/download.svg';
import Theme from '../Theme/theme';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Footer = ({ download, viewGraph }) => {
    return (
        <View style={styles.container}>
            {/* <Text>Footer</Text> */}
            <View style={styles.box}>
                <TouchableOpacity onPress={() => viewGraph()} style={styles.flex}>
                    <FilledGraph fill={Theme.blue.primary} />
                    <Text>View Graph</Text>
                </TouchableOpacity>
            </View>
            {/* <View style={styles.box}>
                <Text>Footer</Text>
            </View> */}
            <View style={styles.box}>
                <TouchableOpacity onPress={() => download()} style={styles.flex}>
                    <Download_icon fill={Theme.blue.primary} />
                    <Text>Download PDF</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Footer


const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        // borderWidth: 1,
        // elevation: 10,
        // shadowOffset: 10,
        // alignItems: 'center',
    },
    box: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        // borderWidth: .5,
    },
    flex: {
        flexDirection: 'row'
    }
})