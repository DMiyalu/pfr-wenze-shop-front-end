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
        borderBottomColor: 'rgba(200, 200, 200, 0.2)',
        borderBottomWidth: 1,
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
        backgroundColor: 'rgba(200, 200, 200, 0.2)',
        paddingHorizontal: 55,
    },
    emailInput: {

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
    }
})
