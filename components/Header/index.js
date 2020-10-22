import React, { useState } from 'react'
import styles from './style'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { 
    View, 
    TextInput,
} from 'react-native'


const Header = ({ screen, navigation }) => {
    const [text, setText] = useState('Sandwich')

    const showSearchScreen = () => {
        console.log('showSearch running...');
        navigation.navigate(screen)
    }

    return (
            <View style={styles.search} >
                <View style={styles.box} >
                    <MaterialCommunityIcons 
                        name="magnify" 
                        color="rgba(245, 62, 82, 0.6)" 
                        size={20} 
                        style={{ marginLeft: 10, marginRight: 10 }} 
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder={text}
                        placeholderTextColor="gray"
                        underlineColorAndroid="transparent"
                        clearTextOnFocus={true}
                        onFocus={() => showSearchScreen()}
                    />
                </View>
            </View>
    )
}


export default Header
