import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
class List extends Component {
state = { names: [ 
    { id: 0, name: 'Ben', },
    { id: 1, name: 'Susan', },
    { id: 2, name: 'Robert',}, 
    { id: 3, name: 'Mary', },
    { id: 4, name: 'Andy Best',},
    { id: 5, name: 'Daniel SuNBae',},
    { id: 6, name: 'Degiant',}
]
        }
alertItemName = (item) => { alert(item.name) }
render() {
    return ( 
    <View> 
    {this.state.names.map((item, index) => (
        <TouchableOpacity key = {item.id}
                style = {styles.container}
                onPress = {() => this.alertItemName(item) } >
                <Text style = {styles.text} > {item.name} </Text> 
        </TouchableOpacity>
            ))}
    </View>
    )
}
}
export default List
const styles = StyleSheet.create({
            container: {
                padding: 10,
                marginTop: 3,
                backgroundColor: '#d9f9b1',
                alignItems: 'center',
                },
                text: {
                    color: '#006666',
                    fontWeight: 'bold',
                    }
                })