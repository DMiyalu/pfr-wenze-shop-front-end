import React, { useState } from 'react'
import { styles, color } from './signUpStyleSheet.js'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import {
    SafeAreaView,
    TouchableOpacity,
    View,
    Text,
    TextInput,
} from 'react-native'


const SignUp = ({ navigation }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [passwordIsEqual, setPasswordIsEqual] = useState(true)
    const [inputState, setInputState] = useState(false)


    const validation = async () => {
        if(email === "" || password === "" || confirmPassword === "") {setInputState(true)}
        else {
            if (password === confirmPassword) {
                navigation.navigate('SignUpStepTwo', {
                    email: email,
                    password: password,
                })
            } else {
                setPasswordIsEqual(false)
            }
        }
    }

    return (
        <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <MaterialCommunityIcons name="cart" color={color} size={30} />
            <Text style={styles.title}>Inscription</Text>
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
                <View style={styles.inputSection}>
                    <Text style={styles.textPassword}>Confirmer mot de passe</Text>
                    <TextInput 
                        onChangeText={(value) => {setConfirmPassword(value)}}
                        value={confirmPassword}
                        placeholder="*******"
                        placeholderTextColor="#aaa"
                        textContentType="password"
                        textAlign= "left"
                        style={styles.inputBox}
                    />
                </View>
                <View style={passwordIsEqual ? styles.hideErrorMessage : styles.errorMessage}>
                    <Text style={styles.userNotExist}>
                        Les mots de passe ne sont pas identiques.
                    </Text>
                </View>
                
            </View>
            <View style={styles.loginAndSingUp}>
                <TouchableOpacity
                    onPress={() => validation()}
                >
                    <Text style={styles.login}>Suivant</Text>
                </TouchableOpacity>
            </View>
        </View>
        </SafeAreaView>
    )
}

export default SignUp