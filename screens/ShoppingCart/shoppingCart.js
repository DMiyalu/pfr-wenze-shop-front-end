import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Text, View, StyleSheet, SafeAreaView, Dimensions, Image, Picker, ScrollView, TouchableOpacity } from 'react-native'
import Header from '../../components/Header'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'



//constants
const { width, height } = Dimensions.get('window')
const listValueCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


const ShoppingCart = ({ navigation }) => {
    const [number, setNumber] = useState(0)
    const dispatch = useDispatch()
    const { panier } = useSelector((state) => state.panier)


    function getProduct() {
        return (
            <View>
                {panier.listFruits.map((fruit) => 
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={styles.article}>
                            <View style={styles.imageBox}>
                                <Image style={styles.imageFile} source={require('../../assets/product/viande-poulet.jpg')} />
                            </View>
                            <View style={styles.details}>
                                <View>
                                    <Text style={styles.titleProduct}>{fruit.title.toUpperCase().slice(0, 16)}</Text>
                                </View>
                                <View style={{display: 'flex', flexDirection: 'column'}}>
                                    <View>
                                        <Picker
                                            selectedValue={fruit.number}
                                            style={{ height: 50, width: 150 }}
                                            onValueChange={(numberEntry) => setNumber(numberEntry)}
                                        >                              
                                            {listValueCount.map((value) => 
                                                <Picker.Item label={value} value={value} />
                                            )}          
                                        </Picker>
                                    </View>
                                    <Text 
                                        style={{color:'rgba(122, 119, 255, 1)', fontSize: 20, marginRight: 0}}
                                    >
                                        {fruit.price} $
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ flex: 1, backgroundColor: 'rgba(245, 62, 82, 0.6)', padding: 10, borderRadius: 50, marginHorizontal: 10 }}>
                                <MaterialCommunityIcons 
                                    name="close"
                                    color="rgba(250, 250, 250, 1.0)" 
                                    size={18}
                                />
                            </View>             
                        </TouchableOpacity>
                    </View>)}
            </View>

        )
    }


    return (
            <SafeAreaView style={styles.container}>
                <Header navigation={navigation} screen='Search'/>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{paddingHorizontal: 20}}>
                        <View style={styles.titleTop}>
                            <Text style={styles.titleTopText}>Livraison à domicile en tout point dans la ville de Kinshasa.</Text>
                        </View>
                        <View style={styles.productSection}>
                            {getProduct()}
                        </View>
                        <View style={styles.resume}>
                            <Text>Total: {panier.total} $</Text>
                            <Text>TVA: 0.00 $</Text>
                            <Text>Net à payer:  {panier.total} $</Text>
                        </View>
                        <TouchableOpacity 
                            style={{width: width - 40, display: 'flex', justifyContent: 'center', alignItems: 'center'}}
                        >
                            <View style={styles.boutonBox}>
                                <Text style={{ color: 'rgba(245, 62, 82, 0.6)', fontWeight: '700', fontSize: 20, textAlign: 'center' }}>Commandez</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
    )
}

export default ShoppingCart

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: "#fff",
        marginHorizontal: 0,
        marginVertical: 0,
        paddingBottom: 60,
        width: width,
        height: height,    
    },
    titleTop: {
        display: 'flex',
        marginVertical: 10,
    },
    titleTopText: {
        fontSize: 20,
        fontWeight: '300',
        textAlign: 'left',
    },
    productSection: {
        display: 'flex',
        flexDirection: 'column',
        paddingHorizontal: 10,
    },
    article: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: 130,
        borderWidth: 1,
        borderColor: '#dedede',
        paddingHorizontal: 5,
        paddingVertical: 5,
        marginVertical: 5,
    },
    imageBox: {
        flex: 1,
        width: 70,
        height: 50,
    },
    imageFile: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
    },
    details: {
        display: 'flex',
        flexDirection: 'column'
    },
    titleProduct: {
        fontWeight: '500',
        fontSize: 20,
        color: "rgba(0, 0, 0, 0.8) ",
    },
    resume: {
        display: 'flex',
        paddingVertical: 10,
        paddingHorizontal: 0,
        marginVertical: 5,
        borderTopColor: "#dedede",
        borderTopWidth: StyleSheet.hairlineWidth,
    },
    boutonBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'rgba(245, 62, 82, 0.6)',
        borderRadius: 5,
        width: 160,
        height: 55,
    },
});