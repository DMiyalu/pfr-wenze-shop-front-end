import {StyleSheet, Dimensions} from 'react-native'


const {width, height} = Dimensions.get('window')
export const signInStyle = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        height: height,
        width: width,
        backgroundColor: 'rgba(40, 44, 52, 1)',
        paddingTop: 150,
    },
})
