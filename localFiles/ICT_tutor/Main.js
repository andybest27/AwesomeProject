import React from 'react';
import {MenuProvider} from 'react-native-popup-menu';
import StackHome from './StackHome';
const Main = ()=>{
    return(
        <MenuProvider>
            <StackHome/>
        </MenuProvider>
    );
}
export default Main 