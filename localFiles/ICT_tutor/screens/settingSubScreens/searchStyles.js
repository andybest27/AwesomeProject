const React = require('react-native');
const { StyleSheet, Dimensions } = React;

const DeviceWidth = Dimensions.get('window').width;
const DeviceHeight = Dimensions.get('window').height;
export default {
        container:{
            flex: 1,
            },
         searchingHeader: {
             fontSize: 30,
             textAlign: 'left',
         },
         searchView: {
             height: DeviceHeight*0.09,
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
         TxtInput: {
             flex: 1,
             fontSize: 20,
             paddingLeft: 10,
         },
         lblTxt: {
             fontSize: 9,
             color: '#9f9f9f'
         },
         matchTxt: {
             backgroundColor: '#eaecec',
             height: DeviceHeight * 0.7,
             justifyContent: 'center',
             alignItems: 'center'
         },
         recordTxt: {
             fontFamily: 'sans-serif',
             fontSize: 30,
             color: '#9f9f9f'
         }
}