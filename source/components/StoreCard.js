/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import MaterialCommunity from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import {connect} from 'react-redux';

class StoreCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{width: '85%'}}>
          <ImageBackground
            style={{
              width: '100%',
              height: 200,
              flexDirection: 'row',
              justifyContent: 'flex-end',
              alignItems: 'flex-start',
            }}
            source={this.props.img}
          />
          <View
            style={{
              backgroundColor: this.props.color,
              justifyContent: 'center',
              paddingVertical: 5,
            }}>
            <Text
              style={{
                paddingLeft: 12,
                color: '#FFF',
                fontFamily: 'Quicksand-Bold',
                fontSize: 22,
              }}>
              {this.props.deal}
            </Text>
          </View>
          <View
            style={{
              backgroundColor: '#F9F9F9',
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              borderBottomWidth: 1,
              borderBottomColor: '#e0e0e0',
              borderRightColor: '#e0e0e0',
              borderRightWidth: 1,
              borderLeftColor: '#e0e0e0',
              borderLeftWidth: 1,
              width: '100%',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  paddingLeft: 12,
                  paddingTop: 6,
                  fontFamily: 'Quicksand-Bold',
                  fontSize: 16,
                  color: '#abacab',
                }}>
                {this.props.title}
              </Text>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                }}>
                <Text
                  style={{
                    paddingRight: 12,
                    paddingTop: 6,
                    fontFamily: 'Quicksand-Bold',
                    fontSize: 16,
                    color: '#d3d4d3',
                  }}>
                  {this.props.distance} mi
                </Text>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-start',
              }}>
              <MaterialCommunity
                style={{paddingLeft: 12, paddingTop: 6}}
                name={'timer-sand'}
                size={18}
                color={'#d3d4d3'}
              />
              <Text
                style={{
                  paddingLeft: 2,
                  paddingTop: 6,
                  fontFamily: 'Quicksand-Bold',
                  fontSize: 16,
                  color: '#d3d4d3',
                }}>
                {this.props.timeRemaining}
              </Text>
            </View>
          </View>
          <View style={{paddingBottom: 25}} />
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

export default connect()(StoreCard);
