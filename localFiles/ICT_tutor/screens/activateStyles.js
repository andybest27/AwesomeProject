const React = require('react-native');
const { StyleSheet, Dimensions } = React;

const DeviceWidth = Dimensions.get('window').width;
const DeviceHeight = Dimensions.get('window').height;
export default{
   Title_Txt: {
       color: '#fff',
       fontFamily: 'serif',
       textAlign: 'center',
       fontSize: 20,
       fontWeight: 'bold',
       marginBottom: 10,
    },
    myLogo:{
        width: 70,
        height: 92,
        marginBottom: 40,
        alignSelf: 'center'
        },
    txtInput:{
        backgroundColor: '#d5e8f9',
        alignSelf: 'center',
        flex: 1,
        height: 50,
        marginRight: 0.5,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        paddingLeft: 10,
        fontSize: 20,
    },
    submitButton:{
        backgroundColor: '#b06801',
        marginTop: 30,
        height: 50,
        justifyContent: 'center',
        width: DeviceWidth*0.8,
        alignSelf: 'center',
        borderRadius: 5,
    },
    SubmitTxt:{
        color: '#fff',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: 'serif'
    },
    sectionStyle:{
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#b06801',
        width: DeviceWidth * 0.8,
        borderRadius: 5,
        alignSelf: 'center'
    },
    iconStyle:{
        padding: 15,
        alignItems: 'center',
        color: '#fff'
    },
    lblTxt:{
        color: 'yellow',
        alignSelf: 'center',
        fontSize: 10,
        marginBottom: 40,
    }
}