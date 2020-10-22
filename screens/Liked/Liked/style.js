import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: height,
        width: width,
        backgroundColor: 'white',
    },
})

export default styles