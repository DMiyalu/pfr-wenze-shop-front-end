import React, { Component } from 'react'
import styles from './style'
import { 
    Text, 
    View,  
    SafeAreaView, 
    Image,
    ScrollView,
    Linking
} from 'react-native'


const About = () => {
    const phoneNumber = +243825937168
    const whatsappNumberPhone = +243997256541

    const openDialCall = () => {
        Linking.openURL(`tel:${phoneNumber}`)
    }

    const openWhatsapp = () => {
        Linking.openURL(`whatsapp://send?text=Bonjour wenzeshop&phone=${whatsappNumberPhone}`)
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.textHeader}>WenzeShop, avec vous, partout.</Text>
            </View>
            <ScrollView 
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollView}
            >
                <View style={styles.imageBox}>
                    <Image 
                        style={styles.imageFile}
                        source={{
                            uri: 'https://cdn.searchenginejournal.com/wp-content/uploads/2020/04/how-ecommerce-companies-can-care-for-their-customers-5eb56dfe6c64e-1520x800.png'
                        }}
                    />
                </View>
                <View style={styles.description}>
                    <Text style= {styles.textDetails}>WenzeShop, avec vous, partout. <Text style={{color: 'rgba(245, 62, 82, 0.6)'}}>Commandez via votre smartphone</Text> et faites-vous livrer à votre domicile.</Text>
                </View>
                <View style={styles.description}>
                    <Text style= {styles.textDetails}>WenzeShop, avec vous, partout. <Text style={{color: 'rgba(245, 62, 82, 0.6)'}}>Commandez via votre smartphone</Text> et faites-vous livrer à votre domicile.</Text>
                </View>
                <View style={styles.description}>
                    <Text style= {styles.textDetails}>Avez-vous des questions, ou besoin d'aide, appelez notre service client au <Text style={styles.phone} onPress={() => openDialCall()}>+243 825 937 168</Text>, ou nous écrire <Text style= {styles.whatsapp} onPress={() => openWhatsapp()}>via Whatsapp</Text>.</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}


export default About
