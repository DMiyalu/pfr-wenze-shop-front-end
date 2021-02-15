import React, { useState } from 'react'
import { styles, color } from './signUpStyleSheet.js'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { StorageKey } from '../../lib/auth'
import { apiUrl } from '../../lib/api-wenzeshop.js'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch, useSelector } from 'react-redux'
import {
    SafeAreaView,
    TouchableOpacity,
    View,
    Text,
    TextInput,
} from 'react-native'
import { getUser } from '../../Redux/UserAuth/userAuth.actions.js'


const SignIn = ({ navigation }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [userNotExist, setUserNotExist] = useState(false)
    const [inputState, setInputState] = useState(false)
    const { user } = useSelector((state) => state.user)
    const dispatch = useDispatch()


    const login = () => {
        axios
        .post(`${apiUrl}/user/login`, {email: email, password: password})
        .then(async (response) => {
            if (response.data.length) {           
                console.log('user not exist(login)');
                setUserNotExist(true)
            } else { 
                await AsyncStorage.setItem(StorageKey, JSON.stringify(response.data))
                await dispatch(getUser(response.data))
                console.log(`user exist. Redux: ${user}`);
                navigation.navigate('Service')
            }
        })
        .catch((error) => {console.log(error)})
    }

    const validation = async () => {
        if(email === "" || password === "") {setInputState(true)}
        else {
            login()
        }
    }

    return (
        <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <MaterialCommunityIcons name="cart" color={color} size={30} />
            <Text style={styles.title}>Wenzeshop</Text>
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
                <View style={userNotExist ? styles.errorMessage : styles.hideErrorMessage}>
                    <Text style={styles.userNotExist}>
                        L'email ou le mot de passe n'est pas correct.
                    </Text>
                </View>
                
            </View>
            <View style={styles.loginAndSingUp}>
                <TouchableOpacity
                    onPress={() => validation()}
                >
                    <Text style={styles.login}>Se connecter</Text>
                </TouchableOpacity>
                <Text style={styles.textOr}> ou </Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('SignUp')}
                >
                    <Text style={styles.signUpText}>S'inscrire</Text>
                </TouchableOpacity>
            </View>
        </View>
        </SafeAreaView>
    )
}

export default SignIn