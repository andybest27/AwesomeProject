const React = require('react-native');
const { StyleSheet, Dimensions } = React;

const DeviceWidth = Dimensions.get('window').width;
const DeviceHeight = Dimensions.get('window').height;
export default{
      wrapper: {  
            flex: 1,  
        },  
        header:{  
            flexDirection: 'row',  
            alignItems: 'center',  
            justifyContent: 'space-between',  
            backgroundColor: '#064155',
            paddingHorizontal: 18,  
            paddingTop: 5, 
            paddingBottom: 5
        },
        titleTxt: {
          color: '#fff',
          fontFamily: 'sans-serif-thin',
          fontSize: 20
        },
        logo: {
            width: DeviceWidth * 0.06,
            height: DeviceWidth * 0.06,
            resizeMode: 'contain',
        }
}