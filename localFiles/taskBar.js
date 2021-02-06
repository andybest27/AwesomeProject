import React, {
    Component
} from 'react';
import {
    AppRegistry,
    View,
    StatusBar
} from 'react-native';
import Routes from './localFiles/picker.jsx'
class App extends Component {
    render() {
        return ( <
            Routes / >
            //< StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#dff2e8" translucent = { true } />
        )
    }
}
export default App
AppRegistry.registerComponent('App', () => App)