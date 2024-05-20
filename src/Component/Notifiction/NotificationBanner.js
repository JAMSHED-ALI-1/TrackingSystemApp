import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const NotificationBanner = ({ notification, onPress }) => {
    if (!notification) {
        return null; // Don't render anything if there's no notification
    }

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <Text style={styles.message}>{notification.title}</Text>
                <Text style={styles.message}>{notification.body}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'yellow',
        padding: 10,
        marginBottom: 20,
        zIndex: 1,
        height: '15%',

    },
    message: {
        fontSize: 16,
    },
});

export default NotificationBanner;
