const React = require('react-native');
const { StyleSheet, Dimensions } = React;

const DeviceWidth = Dimensions.get('window').width;
const DeviceHeight = Dimensions.get('window').height;
export default{
container: {
    flex: 1,
    flexDirection: 'column',
    alignContents: 'center',
    backgroundColor: '#c7d1cc'
},
bg_image: {
    resizeMode: "cover",
    justifyContent: "center",
    height: DeviceHeight*0.25,
},
active_bg_image: {
    resizeMode: "cover",
    justifyContent: "center",
    height: DeviceHeight,
},
titleTxt: {
    alignSelf: 'center',
    fontSize: 35,
    color: '#fff',
    fontFamily: 'serif',
    textAlign: 'center'

},
subTitleTxt: {
    textAlign: 'center',
    color: '#92c5dd'
},
tbOpacityScrollView: {
    backgroundColor: '#c7d1cc'
},
tbOpacity: {
    marginTop: 20,
    alignSelf: 'center',
    backgroundColor: '#fff',
    padding: 14,
    width: DeviceWidth*0.9,
    height: DeviceHeight*0.1,
    borderRadius: 5,
    flexDirection: 'row',
    shadowColor: '#000',
         shadowOffset: {
             width: 3,
             height: 3,
         },
         shadowOpacity: 0.27,
         shadowRadius: 3,
         elevation: 3,
},
tbOpacityTxt: {
    fontSize: 20,
    textAlign: 'center',
    paddingLeft: 20,
},
tbOpacityView: {
    paddingTop: 10,
    backgroundColor: '##c7d1d0'
},
buttonView: {
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        width: DeviceWidth,
        height: 30,
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 10
    },
     exerciseDiv: {
             padding: 5,
             borderWidth: 2,
             borderColor: '#000',
             margin: 5,
         },
         exer_header: {
             fontWeight: 'bold'
         },
         TWFeedback: {
             backgroundColor: '#156',
             marginTop: 5,
             width: '98%',
             alignSelf: 'center',
             height: 30,
             justifyContent: 'center',
             alignItems: 'center',
         },
         btn_text: {
             color: '#fff'
         }
}