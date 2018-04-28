import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, FlatList } from 'react-native';
import { List } from 'react-native-elements';
import {connect} from "react-redux";

class Profile extends React.Component {
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

    renderItem = ({ item }) => {
        return(
            <View style={{flex: 1, backgroundColor: '#e8e9e8', width: '90%', alignSelf: 'center', borderRadius: 5}}>
                <Text style={{fontSize: 22, fontFamily: 'quicksand-bold', color: this.props.history.color}}>{this.props.history.deal}</Text>
                <Text style={{fontSize: 20, fontFamily: 'quicksand-bold', color: '#919291'}}>{this.props.history.title}</Text>
                <View style={{paddingBottom: 25}}/>
            </View>
        );
    };

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
                    <List containerStyle={{ borderTopWidth: 0, width: '100%', marginTop: 0, paddingTop: 0 , flex: 1}}>
                        <FlatList
                            contentContainerStyle={{ paddingBottom:30 }}
                            style={{height: '100%', paddingTop: 30}}
                            data={this.props.history}
                            showsVerticalScrollIndicator={false}
                            renderItem={this.renderItem}
                            keyExtractor={item => item.description}
                        />
                    </List>
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

const mapStateToProps = (state) => ({
    history: state.data.history,
    data: state.data.data
});

export default connect(mapStateToProps)(Profile);