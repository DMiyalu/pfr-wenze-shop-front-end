import React, { useEffect, useState } from 'react'
import { 
    View, 
    TextInput, 
    StyleSheet,
    Text,
    TouchableOpacity,
    ScrollView,
    Dimensions
} from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


const { width, height } = Dimensions.get('window')

const Header = ({ screen, navigation }) => {
    const [text, setText] = useState('Sandwich')
    const [isChanged, setIsChanged] = useState(0)
    const [numberData, setNumberData] = useState([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    ])
    

    const renderInitialScreen = () => {
        console.log('renderInitialScreen running...')
        return (
            <View>
                <Text style={{ color: 'blue', textAlign: 'center' }}>Recherche...</Text>
            </View>
        )
    }

    const renderOnLoadingData = () => {
        console.log('renderOnLoadingData running...')
        // before to load data
        setIsChanged(1)
        // after to load data
        // setIsChanged(2)
    }

    const renderDataLoader = () => {
        console.log('renderDataLoader running...')
        return (
            <ScrollView showsVerticalScrollIndicator={true}>
                {numberData.map((viewLoader) => 
                    <View key={viewLoader} style={styles.imageLoaderBox}>
                        <View style={styles.imageLoaderContainer}>
                            
                        </View>
                        <View style={styles.LoaderDescription}>
                            <Text style={styles.titleLoader}></Text>
                            <Text style={styles.textDescriptionLoader}></Text>
                            <Text style={styles.priceLoader}></Text>
                        </View>
                    </View>
                )}
            </ScrollView>
        )
    }

    const renderData = () => {
        console.log('renderData running...')
        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                {numberData.map((viewLoader) => 
                    <View style={styles.imageBox}>
                        <View style={styles.imageContainer}>
                            <Image style={styles.imageFile} source={require('../../assets/product/viande-poulet.jpg')} />
                        </View>
                        <View style={styles.description}>
                            <Text style={styles.titleProduct}>{viewLoader.title.toUpperCase()}</Text>
                            <Text style={styles.textDescription}>{viewLoader.description}</Text>
                            <Text style={styles.price}>{viewLoader.price}$ par kilos </Text>
                        </View>
                    </View>
                )}
            </ScrollView>
        )
    }

    const showLoaderScreen = () => {
        switch (isChanged) {
            case 0:
                return renderInitialScreen()
            case 1:
                return renderDataLoader()
            case 2:
                return renderData()
        }
    }

    return (
            <View style={styles.search} >
                <View style={styles.mobile} >

                </View>
                <View style={styles.box} >
                <TouchableOpacity onPress={() => {renderOnLoadingData()}}>
                    <MaterialCommunityIcons 
                        name="magnify" 
                        color="rgba(245, 62, 82, 0.6)" 
                        size={20} 
                        style={{ marginLeft: 10, marginRight: 10 }} 
                    />
                </TouchableOpacity>
                    <TextInput
                        style={styles.textInput}
                        placeholder={text}
                        placeholderTextColor="gray"
                        underlineColorAndroid="transparent"
                        clearTextOnFocus={true}
                    />
                </View>
                
                    <View style={styles.resultBox}>
                        {showLoaderScreen()}
                    </View>
               
            </View>
    )
}


export default Header

const styles = StyleSheet.create({
    search: {
        paddingBottom: 20,
    },
    mobile: {
        backgroundColor: "rgba(245, 62, 82, 0.6)",
        height: 35,
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
    resultBox: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
        paddingVertical: 10,
        marginTop: 20
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
        fontSize: 16,
        color: "rgba(245, 62, 82, 0.6)",
        marginTop: 8,
    },
    imageLoaderBox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 150,
        width: width - 40,
        paddingVertical: 2,
        paddingHorizontal: 2,
        marginVertical: 10,
        backgroundColor: 'rgba(200, 200, 200, 0.7)',
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    }
})