const React = require('react-native');
const {
    StyleSheet,
    Dimensions
} = React;

const DeviceWidth = Dimensions.get('window').width;
const DeviceHeight = Dimensions.get('window').height;
export default {
    container: {
        flex: 1,
        backgroundColor: '#ffff',
         flexDirection: 'column',
    },
    myNoteHeader: {
        height: DeviceHeight * 0.07,
        paddingLeft: 5,
        backgroundColor: '#fff',
        flexDirection: 'row',
        shadowColor: '#000',
        shadowOffset: {
            width: 3,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 3,
        elevation: 5,
        alignItems: 'center'
    },
    TxtHeader: {
        fontSize: 20,
        paddingLeft: 10,
    },
    txtInput:{
        width: '99%',
        marginLeft: 2,
        padding: 5,
        fontSize: 16,
    },
    saveBtn:{
        backgroundColor: '#00836c',
        alignItems: 'center',
        alignSelf: 'flex-end',
        padding: 10,
        marginRight: 5,
        borderRadius: 4,
    },
    btnTxt:{
        color: '#fff',
        fontSize: 16,
    },
    centered: {
            alignItems: 'center'
        },
        inputContainer: {
            marginTop: 10,
            paddingLeft: 5
        },
        list: {
            flex: 1,
            marginTop: 70,
            paddingLeft: 15,
            marginBottom: 10
        },
        scrollableList: {
            marginTop: 10
        },
        column: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        deleteAllButton: {
            marginRight: 40
        },
}