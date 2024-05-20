// ConfirmationAlert.js
import { Alert } from "react-native";

const ConfirmationAlert = (message, onConfirm, onCancel) => {
    Alert.alert(
        "Confirmation",
        message,
        [
            {
                text: "Cancel",
                style: "cancel",
                onPress: () => {
                    onCancel(); // Call onCancel if Cancel is pressed
                },
            },
            {
                text: "OK",
                onPress: onConfirm,
            },
        ],
        { cancelable: false }
    );
};

export default ConfirmationAlert;
