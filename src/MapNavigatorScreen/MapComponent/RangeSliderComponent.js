import React, { useCallback, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import RangeSlider from 'rn-range-slider';
import Thumb from './RangeSelector/Thumb'
import Rail from './RangeSelector/Rail';
import RailSelected from './RangeSelector/RailSelected';
import Label from './RangeSelector/Label';
import Notch from './RangeSelector/Notch';

const RangeSliderComponent = ({ minValue, maxValue, selectedMinimum, selectedMaximum, onValueChange }) => {
    const [low, setLow] = useState(selectedMinimum || minValue); // Initialize with selectedMinimum if available, otherwise use minValue
    const [high, setHigh] = useState(selectedMaximum || maxValue); // Initialize with selectedMaximum if available, otherwise use maxValue

    const renderThumb = useCallback(() => <Thumb />, []);
    const renderRail = useCallback(() => <Rail />, []);
    const renderRailSelected = useCallback(() => <RailSelected />, []);
    const renderLabel = useCallback(value => <Label text={value} />, []);
    const renderNotch = useCallback(() => <Notch />, []);

    const handleValueChange = useCallback((low, high) => {
        // console.log("Low:", low);
        // console.log("High:", high);
        onValueChange(low);
        setLow(low);
        setHigh(high);
    }, []);

    return (
        <View style={styles.container}>
            <View style={{ marginHorizontal: 10 }}><Text>{minValue} m</Text></View>
            <RangeSlider
                style={styles.slider}
                min={minValue}
                max={maxValue}
                step={1}
                disableRange={true}
                floatingLabel
                renderThumb={renderThumb}
                renderRail={renderRail}
                renderRailSelected={renderRailSelected}
                renderLabel={renderLabel}
                renderNotch={renderNotch}
                onValueChanged={handleValueChange}
            />
            <View style={{ marginHorizontal: 5 }}><Text>{maxValue} m</Text></View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        // borderWidth: 1,
        justifyContent: 'center',
    },
    slider: {
        justifyContent: 'center',
        // alignItems: 'center',
        width: '65%',
        height: 40,
    },
});

export default RangeSliderComponent;
