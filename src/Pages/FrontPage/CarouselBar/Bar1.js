import { View, Text, Dimensions, Image, TouchableOpacity, Linking } from 'react-native'
import React, { useEffect, useRef, useState } from "react";
import bar1_styles from '../../../Styles/Pages/FrontPage/CarouselBar/Bar1.module'
import { FlatList } from 'react-native-gesture-handler';

const Bar1 = ({ barData }) => {

    const flatlistRef = useRef();
    const screenWidth = Dimensions.get("window").width;
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        let interval = setInterval(() => {
            if (activeIndex === barData.length - 1) {
                // console.log("Resetting to index 0");
                flatlistRef.current.scrollToIndex({
                    index: 0,
                    animated: true,
                });
                setActiveIndex(0); // Reset active index to 0
            } else {
                // console.log("Scrolling to next index:", activeIndex + 1);
                flatlistRef.current.scrollToIndex({
                    index: activeIndex + 1,
                    animated: true,
                });
                setActiveIndex(prevIndex => {
                    const newIndex = prevIndex + 1;
                    return newIndex >= barData.length ? 0 : newIndex; // Ensure index wraps around
                });
            }
        }, 3000);

        return () => clearInterval(interval);
    }, [activeIndex, barData.length]);

    const getItemLayout = (data, index) => ({
        length: screenWidth,
        offset: screenWidth * index,
        index: index,
    });

    const renderItem = ({ item, index }) => {
        // console.log("Console From render item:", item, index);
        // const marginHorizontal = index === 0 ? 15 : 15;
        // const itemWidth = ${100 / barData.length}%;
        return (
            <View style={[ bar1_styles.main_container,{ width: screenWidth, borderWidth: 0, }]}>

                <View style={bar1_styles.left_box}>
                <Text style={bar1_styles.heading_text}>{item.heading}</Text>
                <Text style={bar1_styles.cont1_text}>{item.cont1}</Text>
                <Text style={bar1_styles.cont2_text}>{item.cont2}</Text>

                <TouchableOpacity style={bar1_styles.btn_box}
                    onPress={() => Linking.openURL('tel:+919671966994')}

                >

                    <Text style={bar1_styles.btn_text}>{item.btn}</Text>

                </TouchableOpacity>


                </View>

                {/* <View > */}
               <item.img />
                {/* </View> */}
            </View>
        );
    };


    const handleScroll = (event) => {
        const scrollPosition = event.nativeEvent.contentOffset.x;
        const index = Math.round(scrollPosition / screenWidth);
        if (index !== activeIndex) {
            setActiveIndex(index);
        }
    };

    const renderDotIndicators = () => {
        return barData.map((dot, index) => {
            const isDotActive = activeIndex === index;

            return (
                <View
                    key={dot.id}
                    style={[
                        bar1_styles.dotIndicator,
                        isDotActive
                            ?
                            
                             bar1_styles.dotIndicatorActive
                            : 
                            
                            bar1_styles.dotIndicatorInactive,
                    ]}
                >
                    
                </View>
            );
        });
    };

  return (
    <View style={bar1_styles.main_box}>

{/* <View style={{ borderWidth: 0 }}> */}
            <FlatList
                data={barData}
                ref={flatlistRef}
                getItemLayout={getItemLayout}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                horizontal={true}
                pagingEnabled={true}
                onScroll={handleScroll}
                showsHorizontalScrollIndicator={false}
            />
            <View
                style={bar1_styles.indicatorView}
            >
                {renderDotIndicators()}
            </View>
        {/* </View> */}
      
    </View>
  )
}

export default Bar1