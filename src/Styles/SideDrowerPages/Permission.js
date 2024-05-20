import { View, Text } from 'react-native';
import React from 'react';
import notifaction_styles from './Notification.module';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Theme from '../../Theme/theme';
import SwitchBox from './SwitchBox';
import perm_styles from './Permission.module';

const Permission = () => {
  return (
    <ScrollView style={perm_styles.main_box}>
       <View style={notifaction_styles.heading_box}>
         <TouchableOpacity>
         <MaterialIcons name="arrow-back" size={24} color={Theme.black} />
         </TouchableOpacity>
          <Text style={notifaction_styles.heading_text}>
          Notification
          </Text>
        </View>
        <View style={notifaction_styles.hr_line}></View>

        <Text style={perm_styles.perm_heading_text}>Vehicle related permission</Text>

        <View style={perm_styles.flex_box}>
          
            <Text style={perm_styles.name_text}>Parking mode on / off</Text>
            <View style={perm_styles.switch_box}>
            <SwitchBox/>
            </View>
        </View>

        <View style={perm_styles.flex_box}>
          
            <Text style={perm_styles.name_text}>Geofence on / off</Text>
            
            <View style={perm_styles.switch_box}>
            <SwitchBox/>
            </View>
        </View>

        <View style={perm_styles.flex_box}>
          
          <Text style={perm_styles.name_text}>Engine on/ off</Text>
          <View style={perm_styles.switch_box}>
            <SwitchBox/>
            </View>
      </View>

      {/* 2nd */}

      <Text style={perm_styles.perm_heading_text}>Route related permission</Text>

        <View style={perm_styles.flex_box}>
          
            <Text style={perm_styles.name_text}>Add</Text>
            <View style={perm_styles.switch_box}>
            <SwitchBox/>
            </View>
        </View>

        <View style={perm_styles.flex_box}>
          
            <Text style={perm_styles.name_text}>View only</Text>
            
            <View style={perm_styles.switch_box}>
            <SwitchBox/>
            </View>
        </View>

        {/* 3rd */}

        <Text style={perm_styles.perm_heading_text}>Trip related permission</Text>

        <View style={perm_styles.flex_box}>
          
            <Text style={perm_styles.name_text}>Add</Text>
            <View style={perm_styles.switch_box}>
            <SwitchBox/>
            </View>
        </View>

        <View style={perm_styles.flex_box}>
          
            <Text style={perm_styles.name_text}>View only</Text>
            
            <View style={perm_styles.switch_box}>
            <SwitchBox/>
            </View>
        </View>

{/* 4Th */}
        <Text style={perm_styles.perm_heading_text}>Group related permission</Text>

        <View style={perm_styles.flex_box}>
          
            <Text style={perm_styles.name_text}>Add</Text>
            <View style={perm_styles.switch_box}>
            <SwitchBox/>
            </View>
        </View>

        <View style={perm_styles.flex_box}>
          
            <Text style={perm_styles.name_text}>View only</Text>
            
            <View style={perm_styles.switch_box}>
            <SwitchBox/>
            </View>
        </View>

        {/* 5th */}

        <Text style={perm_styles.perm_heading_text}>Settings</Text>

        <View style={perm_styles.flex_box}>
          
            <Text style={perm_styles.name_text}>Speed limit</Text>
            <View style={perm_styles.switch_box}>
            <SwitchBox/>
            </View>
        </View>

        <View style={perm_styles.flex_box}>
          
            <Text style={perm_styles.name_text}>Geofence</Text>
            
            <View style={perm_styles.switch_box}>
            <SwitchBox/>
            </View>
        </View>

        {/* 6th */}

        

        <View style={perm_styles.flex_box}>
        <Text style={perm_styles.perm_heading_text}>Report</Text>
            <View style={perm_styles.switch_box}>
            <SwitchBox/>
            </View>
        </View>

      <View style={perm_styles.save_change_box}>
        <Text style={perm_styles.save_change_text}>Save Changes</Text>
      </View>

    </ScrollView>
  )
}

export default Permission