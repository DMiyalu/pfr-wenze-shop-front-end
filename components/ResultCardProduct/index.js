import React from 'react'
import styles from './style'
import { 
    Text, 
    View, 
    Image,
} from 'react-native'

const ResultCardProduct = (props) => {
    return (
        <View>
            <View style={styles.cardBox}>
                <View style={styles.imageBox}>
                <Image 
                    source={{
                        uri: props.imageUri,
                    }}
                    style={styles.imageFile}
                />
                </View>
                <View>
                    <Text style={styles.title} >
                        {props.title}.
                    </Text>
                </View>
                <View>
                    <Text style={styles.price} >
                        {props.price} Fc/ {props.unite}.
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default ResultCardProduct