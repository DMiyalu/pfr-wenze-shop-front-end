import React, {  useState, useEffect } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { styles } from './style'
import { 
    Text,
    TextInput,
    View,  
    SafeAreaView,
    ScrollView,
    RefreshControl,
    Image,
    TouchableOpacity,
    StatusBar
} from 'react-native'


const SearchProduct = ({ route, navigation }) => {
    const { text } = route.params

    //Recupère les données via l'API et les envoies vers le store
    useEffect(() => {
        console.log(`textsearch: ${text}`)
    }, [])


    return (
        <SafeAreaView style={styles.safeAreaViewStyle}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.searchBox}>
                        <MaterialCommunityIcons 
                            name="magnify" 
                            color="rgba(245, 62, 82, 0.6)" 
                            size={20} 
                            style={{ marginLeft: -4, marginRight: 10 }}
                        />
                        <TextInput
                            style={styles.textSearch}
                            placeholder="Recherche..."
                            placeholderTextColor="gray"
                            underlineColorAndroid="transparent"
                            clearTextOnFocus={false}
                            onChangeText= {(value) => setTextSearch(value)}
                        />
                    </View>
                </View>
                <View>
                    <Text>Resultats de Recherche</Text>
                </View>
                
            </View>
        </SafeAreaView>
    )
}

export default SearchProduct