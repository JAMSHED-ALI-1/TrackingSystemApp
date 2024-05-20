
import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Image, Animated, Dimensions, KeyboardAvoidingView, Platform, Modal, Linking, Keyboard, } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Theme from '../Theme/theme';
import { loginUser } from '../HelperFunction/api';
import LoginStyles from '../Styles/LoginStyle/LoginStyles';
import Backgroundmap from '../../assets/backgroundmap';
import Phone from '../../assets/phone2';
import SvgClose from '../../assets/close_cross.svg';
// import BottomSheet from '../Component/BottomSheet/BottomSheet';
// import FillInformation from '../Screens/LoginComponent/FillInformation';
// import AdminContact from '../Screens/LoginComponent/AdminContact';
// import Checkbox from 'expo-checkbox';


const Login = ({ navigation }) => {
    const [isPasswordShown, setIsPasswordShown] = useState(false),
        [isChecked, setIsChecked] = useState(false),
        [modalVisible, setModalVisible] = useState(false),
        [email, setEmail] = useState(''),
        [password, setPassword] = useState(''),
        screenHeight = Dimensions.get('window').height,
        logoContainerTranslateY = useRef(new Animated.Value(0)).current,
        fadeIn = useRef(new Animated.Value(0)).current,
        logoScale = logoContainerTranslateY.interpolate({
            inputRange: [0, 50],
            outputRange: [1, .8], // Adjust the output range based on your desired scaling effect
            extrapolate: 'extend', //',
        });

    useEffect(() => {

        // Start the animation when the component mounts
        Animated.sequence([
            // Animated.parallel([                      // For Running Parallel animations.
            Animated.timing(logoContainerTranslateY, {
                toValue: (-screenHeight / 2) + 50,
                duration: 2000,
                useNativeDriver: false,
            }),
            Animated.timing(fadeIn, {
                toValue: 1,
                duration: 500,
                useNativeDriver: false,
            }),
            // ]),
        ]).start();

        AsyncStorage.getItem('token').then((token) => {
            if (token) {
                navigation.replace('SideDrawerNav');
            } else {
                // navigation.navigate('LoginScreen');
            }
        });
    }, []);
    const handlePhonePress = (phoneNumber) => {
        Linking.openURL(`tel:${phoneNumber}`);
    };

    const handleEmailPress = (email) => {
        Linking.openURL(`mailto:${email}`);
    };

    const handleContactUs = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const handleLoginPress = async () => {
        if (!email || !password) {
            Alert.alert('Error', 'Please fill in all fields.');
            return;
        }

        try {
            const result = await loginUser(email, password);
            if (result.status === 'success') {

                const token = result.token;
                const operator_id = result.operator_id;
                const user_details = result.user_details;
                const user_id = result.user_id;
                console.log(user_id);

                await AsyncStorage.setItem('token', token);
                await AsyncStorage.setItem('operator_id', operator_id);
                await AsyncStorage.setItem('user_details', JSON.stringify(user_details));
                await AsyncStorage.setItem('user_id', JSON.stringify(user_id));

                navigation.navigate('SideDrawerNav');
            } else {
                Alert.alert('Please Enter Valid Credentials.');
            }
        } catch (error) {
            console.error('Login failed:', error.message);
            Alert.alert('Error', 'Invalid email or password.');
        }
    };

    return (
        <SafeAreaView style={LoginStyles.container}>

            <View style={LoginStyles.back}>
                <Backgroundmap width="100%" height="100%" />
            </View>

            < Animated.View style={[LoginStyles.logoContainer, { transform: [{ translateY: logoContainerTranslateY }] }, { scale: logoScale },]}>
                <Image
                    source={require("../../assets/qiktrack-logo-icon.png")}
                    style={LoginStyles.logoImage}
                    resizeMode='contain'
                />
            </Animated.View>

            <Animated.View style={[LoginStyles.formContainer, { opacity: fadeIn }]}>

                <Text style={[{ textAlign: 'center' }, LoginStyles.greetingText]}>
                    Welcome, Login from here! 👋
                </Text>

                <View style={LoginStyles.inputContainer}>
                    {/* Email Input */}
                    <Text style={LoginStyles.labelText}>Username</Text>
                    <View style={LoginStyles.textInputWrapper}>
                        <TextInput
                            placeholder='Enter your email address'
                            placeholderTextColor={Theme.black}
                            keyboardType='email-address'
                            onChangeText={(text) => setEmail(text)}
                            style={LoginStyles.textInput}
                            onSubmitEditing={() => {
                                passwordInputRef.focus();
                            }}
                            returnKeyType="next"
                        />
                    </View>
                </View>

                <View style={LoginStyles.inputContainer}>
                    {/* Password Input */}
                    <Text style={LoginStyles.labelText}>Password</Text>
                    <View style={LoginStyles.textInputWrapper}>
                        <TextInput
                            ref={ref => {
                                passwordInputRef = ref;
                            }}
                            placeholder='Enter your password'
                            placeholderTextColor={Theme.black}
                            secureTextEntry={isPasswordShown}
                            onChangeText={(text) => setPassword(text)}
                            style={LoginStyles.textInput}
                            onSubmitEditing={() => {
                                Keyboard.dismiss();
                                handleLoginPress();
                            }}
                            returnKeyType="done"
                        />
                        <TouchableOpacity
                            onPress={() => setIsPasswordShown(!isPasswordShown)}
                            style={LoginStyles.eyeIconContainer}
                        >
                            {isPasswordShown ? (
                                <Ionicons name="eye-off" size={24} color={Theme.black} />
                            ) : (
                                <Ionicons name="eye" size={24} color={Theme.black} />
                            )}
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={{ marginVertical: 15 }} onPress={() => console.log("Forget Password Pressed.")}>
                        <Text style={LoginStyles.forgetPassword}>Forget Password?</Text>
                    </TouchableOpacity>
                </View>

                {/* <View style={LoginStyles.checkboxContainer}>
                    <Checkbox
                        style={LoginStyles.checkbox}
                        value={isChecked}
                        onValueChange={setIsChecked}
                        color={isChecked ? Theme.blue.primary : undefined}
                    />
                    <Text style={LoginStyles.checkboxText}>Remember Me</Text>
                </View> */}

                {/* Login Button */}

                <TouchableOpacity style={LoginStyles.loginButton} onPress={handleLoginPress}>
                    <LinearGradient
                        style={LoginStyles.loginButtonGradient}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        colors={[Theme.blue.secondary, Theme.blue.primary]}
                    >
                        <Text style={LoginStyles.loginButtonText}>Login</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </Animated.View>

            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={LoginStyles.keyboardAvoidingContainer}
            >
                <Animated.View style={[LoginStyles.additionalLinksContainer, { opacity: fadeIn }]}>
                    {/* Demo App Button */}
                    {/* <TouchableOpacity style={[LoginStyles.linkButton, LoginStyles.linkButtonBorder]} onPress={() => console.log("Request for Demo.")}>
                        <View style={LoginStyles.linkButtonWrapper}>
                            <Text style={LoginStyles.linkButtonText}>Demo App</Text>
                        </View>
                    </TouchableOpacity> */}

                    {/* Request to Join Button */}
                    <TouchableOpacity style={[LoginStyles.linkButton, LoginStyles.linkButtonBorder]} onPress={() => console.log("Request to join.")}>
                        <View style={LoginStyles.linkButtonWrapper}>
                            <Text style={LoginStyles.linkButtonText}>Request to Join</Text>
                        </View>
                    </TouchableOpacity>

                    {/* Contact Us Button */}
                    <TouchableOpacity style={[LoginStyles.linkButton, LoginStyles.marginTopForContent]} onPress={() => handleContactUs()}>
                        <View style={LoginStyles.linkButtonWrapper}>
                            <Phone width="32" height="32" />
                            <Text style={LoginStyles.linkButtonTextContact}>Contact Us</Text>
                        </View>
                    </TouchableOpacity>

                </Animated.View>

            </KeyboardAvoidingView>

            {/* Modal */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={closeModal}>
                <TouchableOpacity
                    style={LoginStyles.modalBackground}
                    onPress={closeModal}>


                    <TouchableOpacity
                        style={LoginStyles.modalContent}
                        activeOpacity={0}>
                        <LinearGradient
                            colors={['#2A77E3', '#051C3E']}
                            style={LoginStyles.contact_box}
                        >

                            <Text style={LoginStyles.contact}>Contact Us!</Text>
                        </LinearGradient>

                        <TouchableOpacity
                            style={LoginStyles.contactInfo}
                            onPress={() => handlePhonePress("9671966994")}>
                            <Phone width="25" height="25" fill={Theme.blue.primary} />
                            <Text style={LoginStyles.contactText}>9671966994</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={LoginStyles.contactInfo}
                            onPress={() => handlePhonePress("9671966994")}>
                            <Phone width="25" height="25" />
                            <Text style={LoginStyles.contactText}>9671966994</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={LoginStyles.contactInfo}
                            onPress={() => handleEmailPress("qiktrack@gmail.com")}>
                            <Text style={LoginStyles.contactText}>qiktrack@gmail.com</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={LoginStyles.closeButton}
                            onPress={closeModal}>
                            <SvgClose width="35" height="35" />
                        </TouchableOpacity>

                        {/* <View>
                            <AdminContact />
                        </View> */}
                    </TouchableOpacity>




                </TouchableOpacity>
            </Modal>
        </SafeAreaView>
    );
};

export default Login;
