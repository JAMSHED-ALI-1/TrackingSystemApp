import React, { useEffect, useState } from "react";
import { View, Switch, Text, TouchableOpacity } from "react-native";
import switchButtonStyle from "../../Styles/ScrollupCards/SwitchButton.module";
import Theme from "../../Theme/theme";

const SwitchBox = ({ name, onToggle, enable }) => {
    const [isEnabled, setIsEnabled] = useState(enable);

    useEffect(() => {
        setIsEnabled(enable);
    }, [enable]);

    const toggleSwitch = () => {
        const newState = !isEnabled;
        setIsEnabled(newState);
        onToggle && onToggle(newState);
    };

    return (
        <TouchableOpacity onPress={toggleSwitch} style={switchButtonStyle.switch_box}>
            <Text numberOfLines={1} ellipsizeMode="tail" style={[{ color: isEnabled ? Theme.green : Theme.red }, switchButtonStyle.switch_text]}>
                {name}
            </Text>
            <View style={switchButtonStyle.switch_container_box}>
                <View style={switchButtonStyle.switch_container}>
                    <Switch
                        trackColor={{ false: Theme.silver, true: Theme.grey }}
                        thumbColor={isEnabled ? Theme.green : Theme.red}
                        ios_backgroundColor={Theme.greyDark}
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                        style={[switchButtonStyle.switch, { transform: [{ scale: 1.2 }] }]}
                    />
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default React.memo(SwitchBox);

