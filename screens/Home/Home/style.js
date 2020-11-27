import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')
export const styles = StyleSheet.create({
    safeAreaViewStyle: {
        flex: 1, 
        backgroundColor: "white",
    },
    container: {
        flex: 1,
        paddingBottom: 10,
    },
    resultsBox: {
        marginBottom: 20,
        display: "none",
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    searchBox: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        flex: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#dadada',
    },
    textSearch: {
        flex: 7,
        marginLeft: -5,
    },
    accountBox: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
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
        height: 200,
        width: width - 40,
        marginHorizontal: 5,
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
        borderRadius: 5,
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
    },
    sectionCategories: {
        fontSize: 16,
        fontWeight: '100',
        paddingHorizontal: 20,
    },
    sectionTitre: {
        fontSize: 24,
        fontWeight: '700',
        marginTop: 10,
        paddingHorizontal: 20,
    },
    sectionImageBox: {
        width: width - 40,
        height: 230,
        marginTop: 20,
        marginHorizontal: 20,
        borderRadius: 5,
        
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
    smallEmptyCard: {
        flex: 1,
        width: 130,
        height: 130,
        backgroundColor: "#dedede",
        marginHorizontal: 10,
        marginVertical: 10,
        borderRadius: 5,
        padding: 5,
    },
    bigEmptyCard: {
        flex: 1,
        width: 230,
        height: 200,
        backgroundColor: "#dedede",
        marginHorizontal: 10,
        marginVertical: 10,
        borderRadius: 5,
    }
})

export const getViewStyle = (displayState) => {
    return {
        marginBottom: 20,
        display: displayState,
    }
}