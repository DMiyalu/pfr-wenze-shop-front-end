import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')
export const styles = StyleSheet.create({
    safeAreaViewStyle: {
        flex: 1, 
        backgroundColor: "white",
    },
    container: {
        flex: 1,
        paddingBottom: 5,
        width: width,
        height: height,
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
    imageFile: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: "cover",
        borderRadius: 5,
    },
    sectionImageBox: {
        height: 230,
        marginTop: 20,
        borderRadius: 5,
    },
})
