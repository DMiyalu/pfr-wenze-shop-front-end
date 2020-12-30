import React, { useState } from 'react'
import { styles, color } from './signUpStyleSheet.js'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { StorageKey } from '../../lib/auth'
import {
    SafeAreaView,
    TouchableOpacity,
    View,
    Text,
    TextInput,
    AsyncStorage,
} from 'react-native'
import axios from 'axios'


const SignUp = ({ navigation }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [inputState, setInputState] = useState(false)

    const login = () => {
        axios
        .post('http://192.168.43.52:8080/user/login', {email: email, password: password})
        .then(async (response) => {
            console.log(`response on post: ${JSON.stringify(response.data)}`)
            await AsyncStorage.setItem(StorageKey, JSON.stringify(response.data))
        })
        .catch((error) => {console.log(error)})
    }

    const validation = async () => {
        if(email === "" || password === "") {setInputState(true)}
        else {
            await login()
            navigation.navigate('Service')
        }
    }

    return (
        <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <MaterialCommunityIcons name="cart" color={color} size={30} />
            <Text style={styles.title}>Karibu</Text>
            <Text style={styles.description}>Plus proche, plus vite, plus mieux.</Text>
        </View>
        <View style={styles.formBox}>
            <View style={styles.formItems}>
                <View style={inputState ? styles.errorMessage : styles.hideErrorMessage}>
                    <MaterialCommunityIcons name="alert" color={color} size={20} />
                    <Text style={styles.errorText}>Veuillez remplir tous les champs.</Text>
                </View>
                <View style={styles.inputSection}>
                    <Text style={styles.textPassword}>Email</Text>
                    <TextInput 
                        onChangeText={(value) => {setEmail(value)}}
                        value={email}
                        placeholder="name@example.service"
                        placeholderTextColor="#aaa"
                        textContentType="emailAddress"
                        autoFocus={true}
                        textAlign= "center"
                        style={styles.inputBox}
                    />
                </View>
                <View style={styles.inputSection}>
                    <Text style={styles.textPassword}>Mot de passe</Text>
                    <TextInput 
                        onChangeText={(value) => {setPassword(value)}}
                        value={password}
                        placeholder="*******"
                        placeholderTextColor="#aaa"
                        textContentType="password"
                        textAlign= "left"
                        style={styles.inputBox}
                    />
                </View>
                
            </View>
            <View style={styles.loginAndSingUp}>
                <TouchableOpacity
                    onPress={() => validation()}
                >
                    <Text style={styles.login}>Se connecter</Text>
                </TouchableOpacity>
                <Text style={styles.textOr}> ou </Text>
                <TouchableOpacity>
                    <Text style={styles.signUpText}>S'inscrire</Text>
                </TouchableOpacity>
            </View>
        </View>
        </SafeAreaView>
    )
}

export default SignUp