import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import Header from '../../components/Header'

export class Article extends Component {
    render() {
        return (
            <View>
                <Header />
                <View style={styles.main} > 
                    <Text>

                    </Text>
                    <View style={styles.imageBox} >
                        <View style={styles.imageContainer}>
                            <Image />
                        </View>
                        <View style={styles.description}>
                            <Text></Text>
                            <Text></Text>
                            <Text></Text>
                        </View>
                    </View>
                    <View style={styles.details}>
                        <View style={styles.quantiteBox}>

                        </View>
                        <View style={styles.totalBox}>

                        </View>
                    </View>
                    <View style={styles.boutonAjouter}>
                        <Text> Ajouter </Text>
                    </View>
                </View>
            </View>
        )
    }
}

export default Article
