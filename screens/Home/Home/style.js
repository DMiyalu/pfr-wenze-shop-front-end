import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
    safeAreaViewStyle: {
        flex: 1, 
        backgroundColor: "white",
    },
    container: {
        flex: 1,
        paddingBottom: 20,
    },
    touchableOpacityStyle: {
        flex: 1,
    },
    textTop: {
        fontSize: 24,
        fontWeight: '700',
        paddingHorizontal: 20,
        color: "rgba(0, 0, 0, 0.8)",
    },
    bigElementUI: {
        flex: 1, 
        height: 100, 
        width: width - 40
    },
    mainSliders: {
        flex: 1,
        backgroundColor: "white",
        paddingTop: 10,
    },
    boxSliders: {
        height: 130,
        marginTop: 20,
    },
    sliderItem: {
        height: 130,
        width: 130,
        marginLeft: 20,
        borderWidth: 0.5,
        borderColor: "#dddddd",
    },
    imageBox: {
        flex: 2,
    },
    imageTextDescription: {
        flex: 1,
        paddingHorizontal: 10,
        paddingTop: 10,
    },
    imageFile: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: "cover",
    },
    imageDescription: {
        fontWeight: '700',
        color: "rgba(0, 0, 0, 0.8) ",
    },
    imagePrice: {
        fontWeight: '300',
        color: "rgba(0, 0, 0, 0.4) ",
    },
    section: {
        marginTop: 40,
        paddingHorizontal: 20,
    },
    sectionCategories: {
        fontSize: 16,
        fontWeight: '100',
    },
    sectionTitre: {
        fontSize: 24,
        fontWeight: '700',
        marginTop: 10,
    },
    sectionImageBox: {
        width: width - 40,
        height: 200,
        marginTop: 20,
        
    },
    sectionImage: {
        flex: 1,
        height: null,
        width: null,
        resizeMode: "cover",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#dddddd",
    },
})

export default styles