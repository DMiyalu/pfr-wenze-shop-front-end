import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignContent: 'center',
        height: height,
        width: width,
        backgroundColor: "rgba(245, 62, 82, 0.6)",
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        height: 45,
        alignItems: 'center',
        backgroundColor: "rgba(245, 62, 82, 0.6)",
    },
    returnIcon: {
        flex: 1,
        paddingLeft: 3,
    },
    titleDetails: {
        flex: 5,
        fontSize: 18,
        fontWeight: '700',
        textAlign: 'left',
        color: 'white',
    },
    content: {
        display: 'flex',
        padding: 10,
        marginVertical: 60,
        marginHorizontal: 40,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignContent: 'center',
        height: 200,
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
    itemInfos: {
        fontSize: 16,
        color: '#000',
        fontWeight: '700',
    },
    titleItem: {
        fontSize: 16,
        color: "#aaa",
        fontWeight: '500',
        paddingHorizontal: 3,
        marginVertical: 3,
    },
})

export default styles