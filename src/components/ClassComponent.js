import { Component } from 'react';
import { Text, View } from 'react-native';

export default class ClassComponent extends Component {
    render() {
        return (
            <View style={{ height: 100, backgroundColor: 'blue' }}>
                <Text style={{ color: '#fff' }}>Bu class bazlı component</Text>
            </View>
        )
    }
}