import { StyleSheet, Dimensions } from 'react-native'


const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "white",
    },
    main: {
        display: "flex",
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
    },
    titleDetails: {
        flex: 2,
        fontSize: 18,
        fontWeight: '700',
        textAlign: 'center',
        color: 'white',
    },
    accountBox: {
        flex: 1,
        display: 'flex',
        alignItems: 'flex-end',
        right: 10,
    },
    accountIcon: {
    },
    description: {
        fontSize: 16,
        fontWeight: "300",
        color: "black",
        marginVertical: 5,
        paddingRight: 5,
    },
    price: {
        fontSize: 16,
    },
    totalValue: {
        fontSize: 16,
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
        color: 'black',
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

    totalEtQuantite: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    totalBox: {
        display: 'flex',
        flex: 2,
        flexDirection: 'column',
    },
    quantiteBox: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        padding: 0,
    },
    totalTitle: {
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 5,
    },
    input: {
        width: 30,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '700',
        marginHorizontal: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#dedede',
    },
    setCount: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 0,
    },
    sign: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 18,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#dedede',
        width: 23,
        height: 23,
    },
    signUI: {
        textAlign: 'center',
    },
    buttonBox: { 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        paddingBottom: 15,
    }
})

export default styles