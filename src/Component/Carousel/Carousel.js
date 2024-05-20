
import {
    FlatList,
    Image,
    View,
    Dimensions,
    Text,
    LogBox,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import CarouselStyles from "./CarouselStyles.module"; // Import the styles

const Carousel = ({ carouselData }) => {
    const flatlistRef = useRef();
    const screenWidth = Dimensions.get("window").width;
    const [activeIndex, setActiveIndex] = useState(0);

    // useEffect(() => {
    //     let interval = setInterval(() => {
    //         if (activeIndex === carouselData.length - 1) {
    //             flatlistRef.current.scrollToIndex({
    //                 index: 0,
    //                 animation: true,
    //             });
    //         } else {
    //             flatlistRef.current.scrollToIndex({
    //                 index: activeIndex + 1,
    //                 animation: true,
    //             });
    //         }
    //     }, 3000);

    //     return () => clearInterval(interval);
    // });

    useEffect(() => {
        let interval = setInterval(() => {
            if (activeIndex === carouselData.length - 1) {
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
                    return newIndex >= carouselData.length ? 0 : newIndex; // Ensure index wraps around
                });
            }
        }, 3000);

        return () => clearInterval(interval);
    }, [activeIndex, carouselData.length]);




    const getItemLayout = (data, index) => ({
        length: screenWidth,
        offset: screenWidth * index,
        index: index,
    });

    const renderItem = ({ item, index }) => {
        // console.log("Console From render item:", item, index);
        // const marginHorizontal = index === 0 ? 15 : 15;
        const itemWidth = `${100 / carouselData.length}%`;
        return (
            <View style={[CarouselStyles.imageContainer, { width: screenWidth, borderWidth: 0, marginTop: 5 }]}>
                <Image
                    source={item.image}
                    style={[CarouselStyles.image, { alignSelf: 'center', width: screenWidth -10,  }]}
                />
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
        return carouselData.map((dot, index) => {
            const isDotActive = activeIndex === index;

            return (
                <View
                    key={dot.id}
                    style={[
                        CarouselStyles.dotIndicator,
                        isDotActive
                            ? CarouselStyles.dotIndicatorActive
                            : CarouselStyles.dotIndicatorInactive,
                    ]}
                ></View>
            );
        });
    };

    return (
        <View style={{ borderWidth: 0 }}>
            <FlatList
                data={carouselData}
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
                style={CarouselStyles.indicatorView}
            >
                {renderDotIndicators()}
            </View>
        </View>
    );
};

export default Carousel;
