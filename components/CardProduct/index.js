import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'

export class CardProduct extends Component {
    render() {
        return (
            <View style={styles.sliderItem} >
                <View style={styles.imageBox} >
                    <Image 
                        source={this.props.imageUri} 
                        style={styles.imageFile}
                    />
                </View>
                <View style={styles.imageTextDescription} >
                    <View>
                        <Text style={styles.imageDescription} >
                            {this.props.imageDescription}
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.imagePrice} >
                            {this.props.imagePrice}
                        </Text>
                    </View>  
                </View>
            </View>
        )
    }
}

export default CardProduct

const styles = StyleSheet.create({
    sliderItem: {
        height: 130,
        width: 130,
        marginLeft: 20,
        borderWidth: 0.5,
        borderColor: "#dddddd",
    },
    imageBox: {
        flex: 2,
    },
    imageTextDescription: {
        flex: 1,
        paddingHorizontal: 10,
        paddingTop: 10,
    },
    imageFile: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: "cover",
    },
    imageDescription: {
        fontWeight: '700',
        color: "rgba(0, 0, 0, 0.8) ",
    },
    imagePrice: {
        fontWeight: '300',
        color: "rgba(0, 0, 0, 0.4) ",
    }
});