import { StyleSheet, Dimensions } from 'react-native'


const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: "#fff",
        marginHorizontal: 0,
        marginVertical: 0,
        paddingBottom: 60,
        width: width,
        height: height,    
    },
    uiSectionBox: { 
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    pickerStyle: { 
        height: 50,
        width: 150 
    },
    uiTextPrice: {
        color:'rgba(122, 119, 255, 1)', 
        fontSize: 20, 
        marginRight: 0
    },
    uiQte: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    uiQteIcon: {
        flex: 1, 
        backgroundColor: 'rgba(245, 62, 82, 0.6)', 
        padding: 10, 
        borderRadius: 50, 
        marginHorizontal: 10,
    },
    uiButton: {
        width: width - 40, 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    uiButtonText: {
        color: 'rgba(245, 62, 82, 0.6)', 
        fontWeight: '700', 
        fontSize: 20, 
        textAlign: 'center' ,
    },
    titleTop: {
        display: 'flex',
        marginVertical: 10,
    },
    titleTopText: {
        fontSize: 20,
        fontWeight: '300',
        textAlign: 'left',
    },
    productSection: {
        display: 'flex',
        flexDirection: 'column',
        paddingHorizontal: 10,
    },
    article: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: 130,
        borderWidth: 1,
        borderColor: '#dedede',
        paddingHorizontal: 5,
        paddingVertical: 5,
        marginVertical: 5,
    },
    imageBox: {
        flex: 1,
        width: 70,
        height: 50,
    },
    imageFile: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
    },
    details: {
        display: 'flex',
        flexDirection: 'column'
    },
    titleProduct: {
        fontWeight: '500',
        fontSize: 20,
        color: "rgba(0, 0, 0, 0.8) ",
    },
    resume: {
        display: 'flex',
        paddingVertical: 10,
        paddingHorizontal: 0,
        marginVertical: 5,
        borderTopColor: "#dedede",
        borderTopWidth: StyleSheet.hairlineWidth,
    },
    boutonBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'rgba(245, 62, 82, 0.6)',
        borderRadius: 5,
        width: 160,
        height: 55,
    },
})

export default styles