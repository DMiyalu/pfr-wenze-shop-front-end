import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './style'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import {
    View,
    Text,
    SafeAreaView,
    ImageBackground,
} from 'react-native'


const User = ({ navigation }) => {
    
    const { user } = useSelector((state) => state.user)
    const showInfosCompte = () => {
        return (
            <View>
                <View style={styles.imageProfil}></View>
                <View style={styles.desciption}>
                    <Text style={styles.titleItem}>Nom: <Text style={styles.itemInfos}>{user.email}</Text> </Text>
                    <Text style={styles.titleItem}>Prenom: <Text style={styles.itemInfos}>{user.prenom}</Text> </Text>
                    <Text style={styles.titleItem}>Telephone: <Text style={styles.itemInfos}>{user.telephone}</Text> </Text>
                    <Text style={styles.titleItem}>Adresse: <Text style={styles.itemInfos}>{user.adresse}</Text> </Text>
                    <Text style={styles.titleItem}>Email: <Text style={styles.itemInfos}>{user.email}</Text> </Text>
                </View>
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.returnIcon}>
                        <MaterialCommunityIcons 
                            name="arrow-left" 
                            color="white"
                            size={25}
                            onPress={() => navigation.goBack()}
                        />
                    </View>
                    <Text style={styles.titleDetails}>Infos compte</Text>
                    <View></View>
                </View>
                <View style={styles.content}>
                    {user.email ? showInfosCompte() :navigation.navigate('SignIn')}
                </View>
            </View>
        </SafeAreaView>
    )
}

export default User