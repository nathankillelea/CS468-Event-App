import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';

export default class Profile extends React.Component {
    static navigationOptions = {
        title: 'Profile',
        header: null,
    };

    constructor() {
        super();
        this.state = {
            isHistoryPressed: true,
            isSettingsPressed: false,
        }
    }

    historyPressedHandler() {
        this.setState({
            isHistoryPressed: true,
            isSettingsPressed: false,
        })
    }

    settingsPressedHandler() {
        this.setState({
            isHistoryPressed: false,
            isSettingsPressed: true,
        })
    }

    render() {
        if(this.state.isHistoryPressed) {
            return(
                <View style={{backgroundColor: '#FFF', flex: 1}}>
                    <View style={{height: 65, borderBottomWidth: 2, borderBottomColor: '#f9d3c9', width: '100%', flexDirection: 'row'}}>
                        <TouchableWithoutFeedback onPress={() => this.historyPressedHandler()}>
                            <View style={{flex: 1, marginTop: 30, borderBottomWidth: 4, borderBottomColor: '#E5461F', justifyContent: 'flex-start', flexDirection: 'row'}}>
                                <Text style={{marginLeft: 50, fontSize: 24, fontFamily: 'quicksand-bold'}}>HISTORY</Text>
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => this.settingsPressedHandler()}>
                            <View style={{flex:1, marginTop: 30, justifyContent: 'flex-end', flexDirection: 'row'}}>
                                <Text style={{marginRight: 50, fontSize: 24, fontFamily: 'quicksand-bold'}}>SETTINGS</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
            );
        }
        else if(this.state.isSettingsPressed) {
            return(
                <View style={{backgroundColor: '#FFF', flex: 1}}>
                    <View style={{height: 65, borderBottomWidth: 2, borderBottomColor: '#f9d3c9', width: '100%', flexDirection: 'row'}}>
                        <TouchableWithoutFeedback onPress={() => this.historyPressedHandler()}>
                            <View style={{flex: 1, marginTop: 30, justifyContent: 'flex-start', flexDirection: 'row'}}>
                                <Text style={{marginLeft: 50, fontSize: 24, fontFamily: 'quicksand-bold'}}>HISTORY</Text>
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => this.settingsPressedHandler()}>
                            <View style={{flex:1, marginTop: 30, justifyContent: 'flex-end', flexDirection: 'row', borderBottomWidth: 4, borderBottomColor: '#E5461F', }}>
                                <Text style={{marginRight: 50, fontSize: 24, fontFamily: 'quicksand-bold'}}>SETTINGS</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
});