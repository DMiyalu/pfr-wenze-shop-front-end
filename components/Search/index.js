import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './style'
import { 
    View, 
    TextInput,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
} from 'react-native'


const Header = ({ screen, navigation }) => {
    const dispatch = useDispatch()
    const { products } = useSelector((state) => state.products)
    const [text, setText] = useState('Sandwich')
    const [isChanged, setIsChanged] = useState(0)
    

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
        // setIsChanged(1)
        // after to load data
        setIsChanged(2)
    }

    const renderDataLoader = () => {
        console.log('renderDataLoader running...')
        console.log('AllProduct: ', products)
        return (
            <View>
                {products['legumes'].map((viewLoader) => 
                    <View style={styles.imageLoaderBox} key={viewLoader.productID}>
                        <View style={styles.imageLoaderContainer}>
                            
                        </View>
                        <View style={styles.LoaderDescription}>
                            <Text style={styles.titleLoader}></Text>
                            <Text style={styles.textDescriptionLoader}></Text>
                            <Text style={styles.priceLoader}></Text>
                        </View>
                    </View>
                )}
            </View>
        )
    }

    const renderData = () => {
        console.log('renderData running...')
        return (
            <View>
                <Text style={{ fontSize: 20, fontWeight: '700', marginVertical: 5}}>Resultats de recherche pour le ‘mot clé recherché’</Text>
                {products['legumes'].map((data) => 
                    <View style={styles.imageBox} key={data.productID}>
                        <View style={styles.imageContainer}>
                            <Image style={styles.imageFile} source={data.image} />
                        </View>
                        <View style={styles.description}>
                            <Text style={styles.titleProduct}>{data.title.toUpperCase()}</Text>
                            <Text style={styles.textDescription}>{data.description}</Text>
                            <Text style={styles.price}>{data.price}$ par kilos </Text>
                        </View>
                    </View>
                )}
            </View>
            
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
            <View style={styles.container} >
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
                        clearTextOnFocus={false}
                        autoFocus={true}
                        onChange={(e) => setText(e.target.value)}
                    />
                </View>
                
                <ScrollView showsVerticalScrollIndicator={false} >
                    <View style={styles.resultBox}>
                        {showLoaderScreen()}
                    </View>
                </ScrollView>
               
            </View>
    )
}


export default Header

