import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
    cardBox: {
        width: 310,
        height: 200,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        marginVertical: 5,
        marginHorizontal: 5,
        paddingVertical: 5,
        paddingHorizontal: 5,
        borderWidth: 0.5,
        borderColor: "#dddddd",
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 1,
    },
    imageBox: {
        flex: 1,
        width: 200,
    },
    imageFile: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: "cover",
    },
    title: {
        fontWeight: '700',
        fontSize: 16,
        color: '#000',
    },
    price: {
        color: "rgba(245, 62, 82, 0.6)",
        fontWeight: '500',
        fontSize: 14,
    },
})


export default styles