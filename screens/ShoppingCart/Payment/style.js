import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
        height: height,
        width: width,
        display: 'flex',
        alignItems: 'center',
        marginTop: 20,
        padding: 10,
    },
    title: {
        fontWeight: '600',
        textAlign: 'center',
        color: 'black',
        fontSize: 18,
    },
    itemsBox: {
        display: 'flex',
        flexDirection: 'row-reverse',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: 30,
        borderWidth: 1,
        padding: 0
    },
    items: {
        display: 'flex',
        width: (width / 2) - 60,
        height: 100,
        marginVertical: 5,
        marginHorizontal: 10,
    },
    imageBox: {
        flex: 1,
        width: 113,
        height: 50,
    },
    imageFile: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'stretch',
    },
    textModePayment: {
        textAlign: 'center',
        color: 'rgba(0, 0, 0, 0.8)'
    },
    otherMode: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: (width / 2) - 60,
        backgroundColor: 'white',
    }
})

export default styles