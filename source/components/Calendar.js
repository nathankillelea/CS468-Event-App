import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Calendar extends React.Component {
    static navigationOptions = {
        title: 'Calendar',
        header: null,
    };

    constructor() {
        super();
    }

    render() {
        return(
            <View style={styles.container}>
                <Text>Calendar</Text>
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