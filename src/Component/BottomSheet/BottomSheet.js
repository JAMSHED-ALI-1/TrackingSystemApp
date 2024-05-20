import React, { useMemo, useRef } from "react";
import { View, StyleSheet } from "react-native";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import "../../HelperFunction/globalVariables"
import Theme from "../../Theme/theme";

const BottomSheet = ({
  children,
  customSnapPoints,
  backgroundStyle,
  closeStyle,
  handleIndicatorStyle,
  footerComponent,
  animateOnMount,
  handleStyle,
  customHandleComponent,
}) => {
  const bottomSheetModalRef = useRef(null);

  const snapPoints = useMemo(
    () => customSnapPoints || ["50%"],
    [customSnapPoints]
  );

  // Open the BottomSheet when the component is mounted
  React.useEffect(() => {
    bottomSheetModalRef.current?.present();

  }, []);

  const handleSheetChanges = (index) => {
    // console.log('handleSheetChanges', index);
  };

  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        backgroundStyle={[backgroundStyle]}
        enablePanDownToClose={closeStyle}
        handleIndicatorStyle={handleIndicatorStyle}
        footerComponent={footerComponent}
        animateOnMount={animateOnMount}
        enableContentPanningGesture={true}
        enableHandlePanningGesture={true}
        enableOverDrag={true}
        handleComponent={customHandleComponent}
      // handleHeight={10}
      // handleStyle={{ borderBottomWidth: 0, height: 5 }}
      >
        {/* <BottomSheetScrollView> */}
        <View style={styles.contentContainer}>
          {children}
        </View>
        {/* </BottomSheetScrollView> */}
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "transparent",
    overflow: "visible",
    // height: 500,
    // borderWidth: 1
    // padding: 16,
    // borderWidth: 2,
    // borderRadius: 10,
  },
});

export default BottomSheet;
