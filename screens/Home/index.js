import React, { Component } from 'react'
import { 
    Text, 
    View, 
    StyleSheet, 
    SafeAreaView, 
    TextInput, 
    ScrollView,
    Image,
    Dimensions,
} from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import CardProduct from '../../components/CardProduct'



const { height, width } = Dimensions.get('window')

export class Home extends Component {
    render() {
        return (
            <SafeAreaView style={{flex: 1, backgroundColor: "white"}} >
                <View style={styles.container} >
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
                            />
                        </View>
                    </View>
                    <ScrollView
                        scrollEventThrottle={20}
                    >
                        <View style={styles.mainSliders} >
                            <Text style={styles.textTop} >
                                Des légumes et des Viandes 100% Bio...
                            </Text>
                            <View style={styles.boxSliders} >
                                <ScrollView 
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <CardProduct 
                                        imageUri={require('../../assets/viande_pack.jpg')}
                                        imageDescription="VIANDE HACHEE"
                                        imagePrice="5$ par kilos"
                                    />
                                    <CardProduct 
                                        imageUri={require('../../assets/viande_pack.jpg')}
                                        imageDescription="VIANDE HACHEE"
                                        imagePrice="5$ par kilos"
                                    />
                                    <CardProduct 
                                        imageUri={require('../../assets/viande_pack.jpg')}
                                        imageDescription="VIANDE HACHEE"
                                        imagePrice="5$ par kilos"
                                    />
                                </ScrollView>
                            </View>
                            <View style={styles.section} >
                                <Text style={styles.sectionTitre} >
                                    Fast food with wiikko
                                </Text>
                                <Text style={styles.sectionCategories} >
                                    Vivres frais & Viandes fraiches
                                </Text>
                                <View style={styles.sectionImageBox} >
                                    <Image style={styles.sectionImage} source={require('../../assets/slide1.jpg')} />
                                </View>
                            </View>
                        </View> 
                    </ScrollView>
                </View>
            </SafeAreaView>
        )
    }
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    search: {

    },
    mobile: {
        backgroundColor: "rgba(245, 62, 82, 0.6)",
        height: 26,
    },
    box: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
        marginTop: 10,
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
    textTop: {
        fontSize: 24,
        fontWeight: '700',
        paddingHorizontal: 20,
        color: "rgba(0, 0, 0, 0.8)",
    },
    mainSliders: {
        flex: 1,
        backgroundColor: "white",
        paddingTop: 10,
    },
    boxSliders: {
        height: 130,
        marginTop: 20,
    },
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
    },
    section: {
        marginTop: 40,
        paddingHorizontal: 20,
    },
    sectionCategories: {
        fontSize: 16,
        fontWeight: '100',
    },
    sectionTitre: {
        fontSize: 24,
        fontWeight: '700',
        marginTop: 10,
    },
    sectionImageBox: {
        width: width - 40,
        height: 200,
        marginTop: 20,
    },
    sectionImage: {
        flex: 1,
        height: null,
        width: null,resizeMode: "cover",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#dddddd",
    },
});