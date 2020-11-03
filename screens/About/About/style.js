import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: "#fff",
        width: width,
        height: height,
        paddingBottom: 60,
    },
    header: {
        height: 85,
        width: width,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        backgroundColor: 'rgba(245, 62, 82, 0.6)',
        paddingHorizontal: 40,
        paddingTop: 10,
    },
    textHeader: {
        color: '#fff',
        fontSize: 22,
        fontWeight: '800',
        textAlign: 'center',
    },
    imageBox: {
        width: width - 30,
        height: 200,
        display: 'flex',
        marginTop: 5,
    },
    imageFile: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
    },
    description: {
        paddingHorizontal: 40,
        paddingVertical: 10,
        marginTop: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    textDetails: {
        textAlign: 'left',
        fontSize: 20,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
})

export default styles