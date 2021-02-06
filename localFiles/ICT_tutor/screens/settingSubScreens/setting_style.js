const React = require('react-native');
const { StyleSheet, Dimensions } = React;
const DeviceWidth = Dimensions.get('window').width;
const DeviceHeight = Dimensions.get('window').height;
export default {

    container: {
            flex: 1,
            flexDirection: 'column',
        },
    settingBG: {
        flex: 0.96,
        paddingTop: 5,
        alignItems: 'center',
            
    },
    setting_link: {
        color: '#000',
        fontSize: 14,
        fontFamily: 'serif',
        padding: 6,
        marginLeft: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: '#000',
        marginTop: 15,
        width: DeviceWidth*0.9,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
     modalView: {
         margin: 20,
         backgroundColor: "white",
         borderRadius: 5,
         padding: 35,
         alignItems: "center",
         shadowColor: "#000",
         shadowOffset: {
             width: 0,
             height: 2
         },
         shadowOpacity: 0.25,
         shadowRadius: 3.84,
         elevation: 5
     },
     modalText: {
         marginBottom: 15,
         textAlign: "center"
     },
     textStyle: {
         color: "white",
         fontWeight: "bold",
         textAlign: "center",
         padding: 6,
         backgroundColor: '#3fabd8',
         borderRadius: 5,
         
     },
     modalButton:{
         flexDirection: 'row',
         justifyContent: 'space-between',
         width: 200
     }
}