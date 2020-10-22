import { StyleSheet, Dimensions } from 'react-native'


const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
    sliderItem: {
        height: 130,
        width: 150,
        marginHorizontal: 5,
        paddingHorizontal: 5,
        paddingTop: 5,
        paddingBottom: 3,
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
        flex: 2,
        paddingHorizontal: 5,
        width: 140,
    },
    imageTextDescription: {
        display: "flex",
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 8,
    },
    imageFile: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: "cover",
    },
    imageDescription: {
        fontWeight: '500',
        fontSize: 14,
        color: "rgba(0, 0, 0, 0.8) ",
    },
    imagePrice: {
        fontWeight: '500',
        color: "rgba(245, 62, 82, 0.6)",
        fontSize: 15,
    }
})

export default styles