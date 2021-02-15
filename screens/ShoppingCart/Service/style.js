import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
        height: height,
        width: width,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 20,
        padding: 10,
    },
    title: {
        fontWeight: '700',
        textAlign: 'center',
        color: 'black',
        fontSize: 18,
        color: 'rgba(0, 0, 0, 0.8)'
    },
    text: {
        textAlign: 'center',
        padding: 10,
        marginTop: 10,
        color: '#005'
    },
    adresse: {
        textAlign: 'center',
        padding: 10,
        marginTop: 20,
        color: '#005'
    }
})

export default styles