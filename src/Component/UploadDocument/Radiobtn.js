import React, { useState } from 'react';
import { View, TouchableOpacity} from 'react-native';
import radiobtn_style from '../../Styles/UploadDocument/Radiobtn.module';

const Radiobtn = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handlePress = () => {
    setIsChecked(!isChecked);
  };

  return (
    <View >
      <TouchableOpacity
        style={radiobtn_style.radio_opacity}
        onPress={handlePress}
      >
        <View
          style={radiobtn_style.radio_opacity_view}
        >
          {/* {isChecked && ( */}
            <View
              style={[radiobtn_style.radiobtn_checklast,{backgroundColor: isChecked? '#0A8F47' : '#BBBBBB'}]}
            />
          {/* )} */}
        </View>
      </TouchableOpacity>
    </View>
  );
};


export default Radiobtn;
