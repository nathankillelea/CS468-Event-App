import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, FlatList, TouchableOpacity } from 'react-native';
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
      <View>
        <View style={{flex:1, flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
            {(item.fromStore) ? (
              <Text style={{fontFamily: 'quicksand-bold', fontSize: 18, color: '#c9cac9'}}>-{item.pointsCost}</Text>
            ) : (
              <Text style={{fontFamily: 'quicksand-bold', fontSize: 18, color: '#c9cac9'}}>+{item.points}</Text>
            )}
          </View>
          <View style={{flex: 4, flexDirection: 'row', justifyContent: 'flex-end'}}>
            <View style={{flex: 1, backgroundColor: '#e8e9e8', width: '100%', alignSelf: 'center', borderRadius: 10, marginRight: 20}}>
              <Text style={{paddingLeft: 12, paddingTop: 12, fontSize: 22, fontFamily: 'quicksand-bold', color: item.color}}>{item.deal}</Text>
              <Text style={{paddingLeft: 12, paddingTop: 4, paddingBottom: 12, fontSize: 20, fontFamily: 'quicksand-bold', color: '#919291'}}>{item.title}</Text>
            </View>
          </View>
        </View>
        <View style={{height: 25, backgroundColor: '#FFF'}}/>
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
          <View style={{flexDirection: 'row', marginBottom: 30,}}>
            <View style={{marginTop: 30, flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize: 32, fontFamily: 'quicksand-bold'}}>{this.props.userPoints} points</Text>
            </View>
            <View style={{marginTop: 30, flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
              <TouchableOpacity style={{alignSelf: 'center', borderRadius: 5, borderWidth: 1, paddingVertical: 10, paddingHorizontal: 15, borderColor: '#4B60B4'}} onPress={() => this.props.navigation.navigate('Store')}>
                <Text style={{fontFamily: 'quicksand-bold', fontSize: 16, color: '#4B60B4'}}>REDEEM</Text>
              </TouchableOpacity>
            </View>
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
          <View style={{flex: 1, alignSelf: 'center', justifyContent: 'center'}}>
            <TouchableOpacity style={{alignSelf: 'center', justifyContent: 'center', borderRadius: 5, borderWidth: 1, paddingVertical: 10, paddingHorizontal: 15, borderColor: '#4B60B4'}}>
              <Text style={{fontFamily: 'quicksand-bold', fontSize: 16, color: '#4B60B4'}}>LOGOUT</Text>
            </TouchableOpacity>
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
  userPoints: state.data.userPoints
});

export default connect(mapStateToProps)(Profile);