const React = require('react-native');
const { StyleSheet, Dimensions } = React;

const DeviceWidth = Dimensions.get('window').width;
const DeviceHeight = Dimensions.get('window').height;
export default{
    container: {
        flex: 1,
        backgroundColor: '#086584',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    container2: {
        alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            backgroundColor: '#5bc1e2',
            paddingLeft: 8,
            paddingRight: 8,
            paddingTop: 8,
    },
    contentTxt: {
        backgroundColor: '#0a6c8c',
        padding: 10,
        color: '#fff',
        fontFamily: 'sans-serif-thin',
        fontSize: 13,

    },
    listTxt: {
        color: '#fff',
        fontFamily: 'serif',
        fontSize: 15,
        padding: 8,
        borderBottomWidth: 0.5,
        borderBottomColor: '#3fabd8',
    },
    listTouch: {
        marginTop: 5,
    },
    activityIndicator: {
        flex: 1,
        position: 'absolute',
        alignSelf: 'center',
        justifyContent: 'center',
        height: 80,
        marginTop: 200,
    },
    bodyTxt: {
        fontSize: 18,
        textAlign: 'justify',
        lineHeight: 25
    },
    buttonView: {
        backgroundColor: '#064155',
            alignItems: 'center',
            justifyContent: 'center',
            width: DeviceWidth,
            height: 30,
    },
    buttonText: {
        color: '#fff', fontSize: 10
    }

}