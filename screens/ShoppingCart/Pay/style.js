import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
        height: height,
        width: width,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default styles