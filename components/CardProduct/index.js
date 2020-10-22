import React from 'react'
import styles from './style'
import { 
    Text, 
    View, 
    Image,
} from 'react-native'


    const CardProduct = (props) => {

        return (
            <View 
                style={styles.sliderItem}
            >
                <View style={styles.imageBox} >
                    <Image 
                        source={props.imageUri} 
                        style={styles.imageFile}
                    />
                </View>
                <View style={styles.imageTextDescription} >
                    <View>
                        <Text style={styles.imageDescription} >
                            {props.imageDescription}
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.imagePrice} >
                            {props.imagePrice} $ par unité.
                        </Text>
                    </View>  
                </View>
            </View>
        )
    }


export default CardProduct

