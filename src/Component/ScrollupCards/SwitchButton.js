import React, { useState, useEffect } from "react";
import { View } from "react-native";
import switchButtonStyle from "../../Styles/ScrollupCards/SwitchButton.module";
import SwitchBox from "./SwitchBox";
import { sendRelayCommand } from "../../HelperFunction/api";
import ConfirmationAlert from "./ConfirmationAlert";

const SwitchButton = ({ locData }) => {
  const [engineEnabled, setEngineEnabled] = useState(!locData?.heartbeat?.relay);
  const [originalEngineState, setOriginalEngineState] = useState(!locData?.heartbeat?.relay);

  // useEffect(() => {
  //   console.log("Engine Enabled from useEffect:", engineEnabled);
  // }, [engineEnabled]);

  const sendEngineStatus = async (terminalId, command) => {
    try {
      const response = await sendRelayCommand(terminalId, command);
      console.log("Command sent successfully:", response);
      return response;
    } catch (error) {
      console.error("Error sending engine status:", error);
      throw error;
    }
  };

  const handleToggle = (value, name) => {
    console.log(name, value);
  }

  const handleEngineToggle = () => {
    const newRelayStatus = !locData?.heartbeat?.relay;
    ConfirmationAlert("Are you sure you want to change engine status?", () => {
      // console.log("Callback is called After Alert:");
      setEngineEnabled((prevEngineEnabled) => !prevEngineEnabled);
      sendEngineStatus(locData?.imei, newRelayStatus);
    }, () => revertEngineState(originalEngineState)); // Pass originalEngineState to revertEngineState
  };

  const revertEngineState = (originalEngineState) => {
    // console.log("State back to original state:", originalEngineState);
    setEngineEnabled(originalState => !originalState);
    setEngineEnabled(originalState => !originalState);
    // console.log("State back to original state:", originalEngineState);
  };

  return (
    <View style={switchButtonStyle.main_switch_box}>
      <SwitchBox
        name="Parking"
        onToggle={(value) => handleToggle(value, "Parking")}
        enable={false}
      />
      <SwitchBox
        name="Engine"
        onToggle={(value) => handleEngineToggle()}
        enable={engineEnabled}
      />
      <SwitchBox
        name="Geofence"
        onToggle={(value) => handleToggle(value, "Geofence")}
        enable={false}
      />
    </View>
  );
};

export default SwitchButton;
