import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Profile extends React.Component {
    static navigationOptions = {
        title: 'Profile',
        header: null,
    };

    constructor() {
        super();
    }

    render() {
        return(
            <View style={{backgroundColor: '#FFF', flex: 1}}>
                <View style={{height: 65, borderBottomWidth: 4, borderBottomColor: '#E5461F', width: '100%', flexDirection: 'row'}}>
                    <View style={{flex: 1, marginTop: 30, justifyContent: 'flex-start', flexDirection: 'row'}}>
                        <Text style={{marginLeft: 50, fontSize: 24, fontFamily: 'quicksand-bold'}}>HISTORY</Text>
                    </View>
                    <View style={{flex:1, marginTop: 30, justifyContent: 'flex-end', flexDirection: 'row'}}>
                        <Text style={{marginRight: 50, fontSize: 24, fontFamily: 'quicksand-bold'}}>SETTINGS</Text>
                    </View>
                </View>
            </View>
        );

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
});