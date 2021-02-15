import React, { useState } from 'react'
import { styles, color } from './signUpStyleSheet.js'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { StorageKey } from '../../lib/auth'
import { apiUrl } from '../../lib/api-wenzeshop.js'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {
    SafeAreaView,
    TouchableOpacity,
    View,
    Text,
    TextInput,
} from 'react-native'


const SignUpStepTwo = ({ route, navigation }) => {
    const [nom, setNom] = useState("")
    const [prenom, setPrenom] = useState("")
    const [telephone, setTelephone] = useState("")
    const [adresse, setAdresse] = useState("")
    const [inputState, setInputState] = useState(false)
    const { email, password } = route.params;

    const logup = () => {
        axios
        .post(`${apiUrl}/user`, {
            email: email,
            password: password,
            nom: nom,
            prenom: prenom,
            telephone: telephone,
            adresse: adresse,
        })
        .then(async (response) => {
            await AsyncStorage.setItem(StorageKey, JSON.stringify(response.data))
            await dispatch(getUser(response.data))
            console.log('user saved.');
            navigation.navigate('Service')
        })
        .catch((error) => {console.log(error)})
    }

    const validation = async () => {
        console.log('validate form');
        if(nom === "" || prenom === "" || telephone === "" || adresse === "") {setInputState(true)}
        else {logup()}
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
                    <Text style={styles.textPassword}>Nom</Text>
                    <TextInput 
                        onChangeText={(value) => {setNom(value)}}
                        value={nom}
                        placeholder=""
                        placeholderTextColor="#aaa"
                        textContentType="familyName"
                        autoFocus={true}
                        textAlign= "center"
                        style={styles.inputBox}
                    />
                </View>
                <View style={styles.inputSection}>
                    <Text style={styles.textPassword}>Prenom</Text>
                    <TextInput 
                        onChangeText={(value) => {setPrenom(value)}}
                        value={prenom}
                        placeholder=""
                        placeholderTextColor="#aaa"
                        textContentType="middleName"
                        textAlign= "left"
                        style={styles.inputBox}
                    />
                </View>
                <View style={styles.inputSection}>
                    <Text style={styles.textPassword}>Téléphone</Text>
                    <TextInput 
                        onChangeText={(value) => {setTelephone(value)}}
                        value={telephone}
                        placeholder="+243"
                        placeholderTextColor="#aaa"
                        textContentType="telephoneNumber"
                        textAlign= "left"
                        style={styles.inputBox}
                    />
                </View>
                <View style={styles.inputSection}>
                    <Text style={styles.textPassword}>Adresse</Text>
                    <TextInput 
                        onChangeText={(value) => {setAdresse(value)}}
                        value={adresse}
                        placeholder=""
                        placeholderTextColor="#aaa"
                        textContentType="fullStreetAddress"
                        textAlign= "left"
                        style={styles.inputBox}
                    />
                </View>
                
            </View>
            <View style={styles.loginAndSingUp}>
            <TouchableOpacity
                    onPress={() => navigation.pop()}
                >
                    <Text style={styles.back}>Retour</Text>
                </TouchableOpacity>
                <View style={{ width: 40 }}>

                </View>
                
                <TouchableOpacity
                    onPress={() => validation()}
                >
                    <Text style={styles.login}>Valider</Text>
                </TouchableOpacity>
            </View>
        </View>
        </SafeAreaView>
    )
}

export default SignUpStepTwo