
import React from 'react';
import { BlurView } from 'expo-blur';
import { View, StyleSheet, Modal, TouchableWithoutFeedback } from 'react-native';
// const { height: screenHeight } = Dimensions.get('window');

export const CustomeModal = ({ children, visible, onRequestClose, onPressOverlay, style }) => {
    // console.log(children);
    // const modalHeight = (screenHeight * modalHeightPercentage) / 100;
    return (
        <Modal
            visible={visible}
            transparent={true}
            animationType='fade'
            onRequestClose={onRequestClose}
        >
            <TouchableWithoutFeedback onPress={onPressOverlay}>
                <BlurView
                    style={{ ...StyleSheet.absoluteFill }}
                    tint='light'
                    intensity={0}
                />
            </TouchableWithoutFeedback>
            <View style={[styles.container, style]}>
                {children}
            </View>
        </Modal>

    );
};

const styles = StyleSheet.create({
    container: {
        // height: '40%',
        width: '96%',
        marginTop: 5,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        alignSelf: 'center',
        // borderWidth:1,
        // marginLeft: 20,
        // backgroundColor: 'red',
        // flexDirection: 'column',
        // borderWidth: 1,
        // borderColor: 'green',
        // marginTop:'55%'
    },

  
});