const React = require('react-native');
const { StyleSheet, Dimensions } = React;
const DeviceWidth = Dimensions.get('window').width;
const DeviceHeight = Dimensions.get('window').height;
export default {

    container: {
            flex: 1,
            flexDirection: 'column',
        },
    titleBar: {
            marginTop: 30,
            padding: 15,
            flex: 0.04,
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: '#00597e',
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,
            elevation: 10,
        },
    titleBar_txt: {
            color: '#fff',
            fontWeight: 'bold',
            fontFamily: 'sans-serif-thin',
            fontSize: 18,
        },
    settingBG: {
        flex: 0.96,
        backgroundColor: '#003d56',
        paddingTop: 5,
        alignItems: 'center',
            
    },
    setting_link: {
        color: '#fff',
        fontSize: 14,
        fontFamily: 'serif',
        padding: 6,
        marginLeft: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: '#3fabd8',
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