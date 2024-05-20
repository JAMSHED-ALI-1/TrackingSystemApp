import { View, Text } from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Theme from '../../../Theme/theme';
import styles from '../../../Styles/SideDrowerPages/Admin/AdminMapValue';

const AdminMapValue = ({ admin }) => {
  const { title, name, mobile_no, user_id, password, permissions } = admin

  return (
    <View style={styles.card}>
      <View style={styles.admin_info_box}>
        <View style={styles.admin_image_box}>
          <MaterialCommunityIcons
            name="account-circle"
            color={Theme.blue.primary}
            size={30}
          />
        </View>
        <Text style={styles.title}>{admin.title}</Text>
      </View>

      <View style={styles.admin_details_box}>
        <View style={styles.admin_vh_line_box}></View>

        <View style={styles.admin_details_info_box}>
          <View style={styles.admin_details_user_info}>
            <Text style={styles.user_name_text}>{admin.name}</Text>
            <View style={styles.admin_line}></View>
            <Text style={styles.user_mobile_num_text}>{admin.mobile_no}</Text>
          </View>

          <View style={styles.admin_details_user_info}>
            <Text style={styles.user_email_password_text}>
              User ID - {admin.user_id}
            </Text>
            <View style={styles.admin_line}></View>
            <Text style={styles.user_email_password_text}>
              Password - {admin.password}
            </Text>
          </View>

          <View style={styles.admin_details_user_info}>
            <Text style={styles.title}>Permissions: </Text>
            {/* <View style={styles.admin_line}></View> */}
            <View style={styles.check_icon_box}>
              <MaterialCommunityIcons
                name="check"
                size={10}
                color={Theme.white}
              />
            </View>
            <Text style={styles.user_email_password_text}>Engine </Text>
            <View style={styles.check_icon_box}>
              <MaterialCommunityIcons
                name="check"
                size={10}
                color={Theme.white}
              />
            </View>
            <Text style={styles.user_email_password_text}>Documents </Text>
          </View>

          <View style={styles.admin_details_user_info}>
            <View style={styles.check_icon_box}>
              <MaterialCommunityIcons
                name="check"
                size={10}
                color={Theme.white}
              />
            </View>
            <Text style={styles.user_email_password_text}>Geofence</Text>
            <View style={styles.check_icon_box}>
              <MaterialCommunityIcons
                name="check"
                size={10}
                color={Theme.white}
              />
            </View>
            <Text style={styles.user_email_password_text}>Parking</Text>
          </View>
        </View>
      </View>

      <View style={styles.add_alert_box}>
        <View style={styles.add_alert_flex_child}>
          <MaterialIcons
            name="notifications"
            size={16}
            color={Theme.secondary}
          />

          <Text style={styles.add_alert_text}>Alert</Text>
        </View>
        <View style={styles.add_alert_flex_child}>
          <MaterialIcons name="edit" size={16} color={Theme.secondary} />

          <Text style={styles.add_alert_text}>Edit</Text>
        </View>
        <View style={styles.add_alert_flex_child}>
          <MaterialIcons name="delete" size={16} color={Theme.secondary} />

          <Text style={styles.add_alert_text}>Delete</Text>
        </View>
        <View style={styles.add_alert_flex_child}>
          <MaterialIcons name="add-box" size={16} color={Theme.secondary} />

          <Text style={styles.add_alert_text}>Add vehicle</Text>
        </View>
      </View>
    </View>
  )
}

export default AdminMapValue;
