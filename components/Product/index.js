import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, Dimensions, SafeAreaView, ScrollView } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import RNPickerSelect from 'react-native-picker-select'
import Header from '../Header'
import CardProduct from '../CardProduct'
const { height, width } = Dimensions.get('window')


export class Product extends Component {
    render() {
        return (
            <ScrollView scrollEventThrottle={20} showsVerticalScrollIndicator={false} >
            <View style={styles.container}>
                <Header />
                <View style={styles.main} > 
                    <Text style={styles.topTitle}>
                        Livraison à domicile en tout point dans la ville de Kinshasa.
                    </Text>
                    <View style={styles.imageBox} >
                        <View style={styles.imageContainer}>
                            <Image style={styles.imageFile} source={require('../../assets/product/viande-poulet.jpg')} />
                        </View>
                        <View style={styles.description}>
                            <Text style={styles.titleProduct}>VIANDE HACHEE </Text>
                            <Text style={styles.textDescription}>viande de boeuf et de vache, provenant de Goma </Text>
                            <Text style={styles.price}>5$ par kilos </Text>
                        </View>
                    </View>
                    <View style={styles.details}>
                        <View style={styles.quantiteBox}>
                            <View>
                                <MaterialCommunityIcons
                                    name="checkbox-blank-circle" color="rgba(0, 0, 200, 0.6)" size={10} 
                                />
                            </View>
                            <View>
                                <Text 
                                    style={{ marginHorizontal: 5, fontSize: 14 }}
                                > 
                                    Qté:
                                </Text>
                            </View>
                            <View>
                                <RNPickerSelect
                                    style={{ borderWidth: 4, borderColor: "red", width: 30, marginHorizontal: 2 }}
                                    onValueChange={(value) => console.log(value)}
                                
                                    items={[
                                        { label: "1", value: 1 },
                                        { label: "2", value: 1 },
                                        { label: "3", value: 1 },
                                    ]}
                                />
                            </View>
                        </View>
                        <View style={styles.quantiteBox}>
                            <View>
                                <MaterialCommunityIcons
                                    name="checkbox-blank-circle" color="rgba(0, 0, 200, 0.6)" size={10}
                                />
                            </View>
                            <View>
                                <Text 
                                    style={{ marginHorizontal: 5, fontSize: 14 }}
                                > 
                                    Total:
                                </Text>
                            </View>
                            <View>
                                <Text 
                                    style={{ marginHorizontal: 5, fontSize: 14, color: "rgba(245, 62, 82, 0.6)" }}
                                > 
                                    100$
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.boutonAjouter}>
                        <Text style={{ color: "white", fontSize: 16 }}> Ajouter </Text>
                    </View>
                    <View style={styles.sectionSliders}>
                            <Text style={styles.textTop} >
                                Produits commandés en accompagnement                          
                            </Text>
                            <View style={styles.boxSliders} >
                                <ScrollView 
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <CardProduct  
                                        imageUri={require('../../assets/product/viande_pack.jpg')}
                                        imageDescription="VIANDE HACHEE"
                                        imagePrice="5$ par kilos"
                                    />
                                    <CardProduct 
                                        imageUri={require('../../assets/product/viande_hachee.jpg')}
                                        imageDescription="VIANDE HACHEE"
                                        imagePrice="5$ par kilos"
                                    />
                                    <CardProduct 
                                        imageUri={require('../../assets/product/viande-poulet.jpg')}
                                        imageDescription="VIANDE HACHEE"
                                        imagePrice="5$ par kilos"
                                    />
                                </ScrollView>
                            </View>
                    </View>
                </View>
                <View>
                    <Text>Lorem ipsum dolor sit amet</Text>
                    <Text>Lorem ipsum dolor sit amet</Text>
                </View>
                <View>
                    <Text>Lorem ipsum dolor sit amet</Text>
                    <Text>Lorem ipsum dolor sit amet</Text>
                </View>
                <View>
                    <Text>Lorem ipsum dolor sit amet</Text>
                    <Text>Lorem ipsum dolor sit amet</Text>
                </View>
                <View>
                    <Text>Lorem ipsum dolor sit amet</Text>
                    <Text>Lorem ipsum dolor sit amet</Text>
                </View>
            </View>
            </ScrollView>
        )
    }
}

export default Product

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "white",
    },
    main: {
        display: "flex",
        marginTop: 5,
        marginHorizontal: 20,
    },
    topTitle: {
        paddingVertical: 5,
        fontSize: 20,
        fontWeight: "300",
        color: "rgba(0, 0, 0, 0.45)",  
    },
    imageBox: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 5,
        borderColor: "rgba(0, 0, 0, 0.10)",
        borderWidth: 1,
    },
    imageContainer: {
        flex: 1,
        paddingHorizontal: 5,
        paddingVertical: 5,
    },
    imageFile: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: "cover",
    },
    description: {
        flex: 1,
        paddingVertical: 5,
    },
    titleProduct: {
        fontSize: 18,
        fontWeight: '700',
        textAlign: "left",
        color: "rgba(0, 0, 0, 0.9)",
    },
    textDescription: {
        fontSize: 14,
        color: "rgba(0, 0, 0, 0.9)",
        textAlign: "left",
        marginTop: 8,
    },
    price: {
        fontSize: "16",
        color: "rgba(245, 62, 82, 0.6)",
        marginTop: 8,
    },
    details: {
        display: "flex",
        flexDirection: "column",
        marginTop: 10,
    },
    quantiteBox: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    totalBox: {
        flex: 1,
    },
    boutonAjouter: {
        borderRadius: 5,
        backgroundColor: "rgba(245, 62, 82, 0.6)",
        textAlign: "center",
        paddingVertical: 5,
        marginHorizontal: 30,
        marginTop: 20,
    },
    sectionSliders: {
        marginTop: 20,

    },
    textTop: {
        fontSize: 24,
        color: "rgba(0, 0, 0, 0.9)"
    },
    boxSliders: {
        marginTop: 20,
    }
})