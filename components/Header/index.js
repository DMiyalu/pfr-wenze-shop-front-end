import React, { Component } from 'react'
import { 
    View, 
    TextInput, 
    StyleSheet
} from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


export class Header extends Component {
    render() {
        return (
            <View style={styles.search} >
                <View style={styles.mobile} >

                </View>
                <View style={styles.box} >
                    <MaterialCommunityIcons name="magnify" color="rgba(245, 62, 82, 0.6)" size={20} style={{ marginLeft: 10, marginRight: 10 }} />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Du sandwich ?"
                        placeholderTextColor="gray"
                        underlineColorAndroid="transparent" 
                        clearTextOnFocus={true}
                    />
                </View>
            </View>
        )
    }
}

export default Header

const styles = StyleSheet.create({
    search: {
        paddingBottom: 20,
    },
    mobile: {
        backgroundColor: "rgba(245, 62, 82, 0.6)",
        height: 26,
    },
    box: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
        marginTop: 20,
        marginHorizontal: 20,
        height: 35,
        borderRadius: 3,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    },
    textInput: {
        backgroundColor: "white",
        fontWeight: '700',
    },
})