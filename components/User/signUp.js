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


const SignUp = () => {
    const [email, setEmail] = useState("")

    return (
        <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <MaterialCommunityIcons name="cart" color={color} size={30} />
            <Text style={styles.title}>Karibu</Text>
            <Text style={styles.description}>Plus proche, plus vite, plus mieux.</Text>
        </View>
        <View style={styles.formBox}>
            <View style={styles.formItems}>
                <View style={styles.emailInput}>
                    <TextInput 
                        onChangeText={(value) => {setEmail(value)}}
                        value={email}
                        placeholder="name@example.service"
                        placeholderTextColor="#eee"
                        textContentType="emailAddress"
                    />
                </View>
                <TextInput 
                    style={styles.passwordInput}
                />
            </View>
            <View style={styles.loginAndSingUp}>
                <TouchableOpacity>
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