import { StyleSheet, Dimensions } from 'react-native'


const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "white",
        paddingBottom: 60,
    },
    main: {
        display: "flex",
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "rgba(245, 62, 82, 0.6)",
    },
    returnIcon: {
        flex: 1,
    },
    accountBox: {
        flex: 1,
    },
    accountIcon: {
        position: 'relative',
        left: 130,
    },
    description: {
        fontSize: 18,
        fontWeight: "300",
        color: "black",
        marginVertical: 3,
        paddingRight: 5,
    },
    imageBox: {
        display: "flex",
        justifyContent: "center",
        height: 210,
        width: width,
    },
    imageFile: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: "cover",
    },
    details: {
        display: "flex",
        flexDirection: "column",
        marginTop: 20,
        marginHorizontal: 20,
    },
    topTitle: {
        fontSize: 26,
        fontWeight: '700',
        fontColor: 'black',
    },
    boutonAjouter: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 150,
        height: 45,
        borderRadius: 5,
        backgroundColor: "rgba(245, 62, 82, 0.6)",
        textAlign: "center",
        paddingVertical: 5,
        marginHorizontal: 30,
        marginTop: 20,  
    },
})

export default styles