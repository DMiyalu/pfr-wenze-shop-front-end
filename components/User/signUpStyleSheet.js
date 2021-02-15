import {StyleSheet, Dimensions} from 'react-native'


const {width, height} = Dimensions.get('window')
export const color="#F53E52"
export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        height: height,
        width: width,
        backgroundColor: 'rgba(40, 44, 52, 1)',
    },
    header: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: (height / 3) - 10,
        width: width,
        paddingBottom: 10,
    },
    title: {
        fontSize: 30,
        fontWeight: '500',
        color: 'white',
        marginTop: 20,
    },
    description: {
        fontSize: 14,
        fontWeight: '300',
        color: 'white',
    },
    formBox: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    formItems: {
        paddingTop: 20,
    },
    inputBox: {
        backgroundColor: 'rgba(200, 200, 200, 0.2)',
        paddingHorizontal: 55,
        paddingVertical: 10,
        marginVertical: 10,
    },
    inputSection: {
        marginVertical: 10,
    },
    loginAndSingUp: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
    },
    signUpText: {
        fontSize: 14,
        fontWeight: '300',
        color: 'white',
    },
    login: {
        fontSize: 14,
        color: color,
    },
    textOr: {
        color: "#bbb",
        marginHorizontal: 5,
    },
    textPassword: {
        textAlign: 'left',
        fontSize: 14,
        fontWeight: '400',
        color: '#fff'
    },
  
    errorMessage: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    hideErrorMessage: {
        display: 'none',
    },
    errorText: {
        textAlign: 'left',
        fontSize: 14,
        fontWeight: '400',
        color: 'rgba(200, 90, 90, 0.9)',
    },
    userNotExist: {
        textAlign: 'center',
        fontSize: 14,
        fontWeight: '400',
        color: 'rgba(200, 90, 90, 0.9)',
    },
    back: {
        color: '#fff',
        fontSize: 14,
    }
})
