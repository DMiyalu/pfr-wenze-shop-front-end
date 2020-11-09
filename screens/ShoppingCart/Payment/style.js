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
    },
    items: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        width: (width / 2) - 60,
        height: 100,
        marginVertical: 10,
        marginHorizontal: 10,
    },
    imageBox: {
        flex: 1,
        width: 110,
        height: 50,
    },
    imageFile: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'stretch',
    }
})

export default styles