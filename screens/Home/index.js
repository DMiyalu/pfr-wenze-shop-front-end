import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export class Home extends Component {
    render() {
        return (
            <View style={styles.container} >
                <Text> textInComponent </Text>
            </View>
        )
    }
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});