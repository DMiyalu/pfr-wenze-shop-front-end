import React, { Component } from 'react'
import { Text, View, StyleSheet, SafeAreaView } from 'react-native'
import axios from 'axios'





export class Saved extends Component {
    constructor(props) {
        super()
        this.state = {
            apiData: []
        }
    }

    componentWillMount() {
        axios.get('http://127.0.0.1:8080/product')
        .then((response) => {
            this.setState({ apiData: response.data })
            console.log("Response :", response)
            console.log("State: ", this.state.apiData);
        })
    }

    renderProduct() {
        return this.state.apiData.map((product) => <View key={product._id} style={{ flex: 1, justifyContent: "center", alignItems: "center", paddingHorizontal: 20, paddingVertical: 20, borderWidth: 1, borderRadius: 3, margin:10 }} >
            <Text> {product.title} </Text>
            <Text> {product.description} </Text>
            <Text> {product.price} </Text>
        </View>) 
    }


    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: "white" }} >
                <View style={{ flex: 1, backgroundColor: "#dede", height: 20, width: "100%" }} >
                    <Text> List Favoris </Text>
                    <View style={{ flex: 1 }} >
                        {this.renderProduct()}
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

export default Saved

const styles = StyleSheet.create({
    container: {

    }
});