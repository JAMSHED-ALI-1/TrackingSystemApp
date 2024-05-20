import React, { useState } from 'react';
import { View, Text, TouchableOpacity, } from 'react-native';
import Theme from '../../Theme/theme';
import language_styles from '../../Styles/SideDrowerPages/LanguageSelection.module';
import CommonHeader from './CommonHeader';

const languages = [
  { name: 'English', code: 'english' },
  { name: 'हिंदी', code: 'hindi' },
  { name: 'தமிழ்', code: 'tamil' },
  { name: 'मराठी', code: 'mr' },
  { name: 'తెలుగు', code: 'telegu' },
  { name: 'বাংলা', code: 'bengali' },
]

const CustomCheckbox = ({
  checked,
  outerColor,
  innerColor,
  selectedOuterColor,
  selectedInnerColor,
}) => (
  <View
    style={[
      language_styles.checkbox,
      { borderColor: checked ? selectedOuterColor : outerColor },
    ]}
  >
    {checked && (
      <View
        style={[
          language_styles.innerCheckbox,
          { backgroundColor: selectedInnerColor },
        ]}
      />
    )}
  </View>
)
const LanguageSelection = ({ navigation }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('english')

  const handleLanguageSelect = (languageCode) => {
    setSelectedLanguage(languageCode)
  }

  return (
    <View style={{ flex: 1 }}>
      <CommonHeader navigation={navigation} />
      {languages.map((language) => (
        <TouchableOpacity
          key={language.code}
          onPress={() => handleLanguageSelect(language.code)}
          style={[
            {
              backgroundColor:
                language.code === selectedLanguage ? '#29A7E4' : 'white',
            },
            language_styles.language_main_box,
          ]}
        >
          <Text
            style={[
              {
                color: language.code === selectedLanguage ? 'white' : '#888888',
              },
              { fontSize: 16, fontWeight: Theme.font.fat },
            ]}
          >
            {language.name}
          </Text>
          <CustomCheckbox
            checked={language.code === selectedLanguage}
            outerColor="#BABABA"
            innerColor="#BABABA"
            selectedOuterColor="white"
            selectedInnerColor="#29A7E4"
          />
        </TouchableOpacity>
      ))}
    </View>
  )
}

export default LanguageSelection;
