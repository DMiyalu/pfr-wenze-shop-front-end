import { StyleSheet, Dimensions } from 'react-native'


const { width, height } = Dimensions.get('window')
export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: "#fff",
        marginHorizontal: 0,
        marginVertical: 0,
        paddingBottom: 90,
        width: width,
        height: height,    
    },
    main: {
        paddingHorizontal: 10,
    },
    pickerStyle: { 
        height: 50,
        width: 100,
    },
    uiTextPrice: {
        color:'rgba(122, 119, 255, 1)', 
        fontSize: 20, 
        marginRight: 0
    },
    uiQte: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center' ,
    },
    uiQteIcon: { 
        backgroundColor: 'rgba(245, 62, 82, 0.6)',
        padding: 5,
        borderRadius: 50,
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
        fontSize: 18,
        fontWeight: '700',
        textAlign: 'center',
        paddingHorizontal: 15,
        transition: 'all 0.5s',
    },
    titleTopText: !pressed {
        color: 'blue',
    },
    productSection: {
        display: 'flex',
        flexDirection: 'column',
    },
    article: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 130,
        width: 250,
        borderWidth: 1,
        borderColor: '#dedede',
        paddingVertical: 5,
        marginVertical: 5,
    },
    imageBox: {
        flex: 1,
        borderRadius: 5,
        height: 80,
    },
    imageFile: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
        borderRadius: 5,
    },
    uiSectionBox: { 
        display: 'flex', 
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#dedede',
    },
    details: {
        flex: 3,
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 10,
        paddingLeft: 10,
    },
    price: {
        display: 'flex',
        flexDirection: 'row',
    },
    total: {
        flex: 1,
    },
    cost: {
        flex: 3,
    },
    titleProduct: {
        fontWeight: '600',
        fontSize: 18,
        color: "rgba(0, 0, 0, 0.8) ",
    },
    resume: {
        display: 'flex',
        paddingVertical: 30,
    },
    resumeSousTotal: {
        display: 'flex',
        flexDirection: 'row',
    },
    resumeTotal: {
        display: 'flex',
        flexDirection: 'row',
        paddingVertical: 10,
        marginTop: 10,
        borderTopWidth: 1,
        borderTopColor: '#dedede',
    },
    resumeTextLeft: {
        flex: 5,
    },
    resumeTotalLeft: {
        flex: 5,
        fontWeight: '600',
    },
    resumeTextRight: {
        flex: 1,
        marginLeft: -12,
    },
    resumeTotalRight: {
        flex: 1,
        marginLeft: -12,
        fontWeight: '700',
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
    emptyBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        width: width - 20,
        marginVertical: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'rgba(100, 100, 100, 0.2)'
    },
    emptyText: {
        textAlign: 'center',
        fontSize: 18,
        color: 'rgba(0, 0, 0, 0.8)',
        fontWeight: '500',
    }
})

export const getViewStyle = () => {
    return {
        display: 'flex',
    }
}