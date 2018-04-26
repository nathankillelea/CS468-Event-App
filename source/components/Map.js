import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';

export default class Map extends React.Component {
    static navigationOptions = {
        title: 'Map',
        header: null,
    };

    constructor() {
        super();
    }

    render() {
        return(
            <View style={styles.container}>
                <Text>Map</Text>
            </View>
        );

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});