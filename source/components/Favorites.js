/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import HomeCard from './HomeCard.js';
import {connect} from 'react-redux';
import {getDistance} from 'geolib';
import Geolocation from '@react-native-community/geolocation';

class Favorites extends React.Component {
  constructor() {
    super();
    this.state = {
      userLatitude: 0,
      userLongitude: 0,
    };
  }

  componentDidMount() {
    Geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          userLatitude: position.coords.latitude,
          userLongitude: position.coords.longitude,
        });
      },
      (error) => this.setState({error: error.message}),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  }

  renderItem = ({item}) => {
    let dist = getDistance(
      {latitude: this.state.userLatitude, longitude: this.state.userLongitude},
      {latitude: item.latitude, longitude: item.longitude},
    );
    dist = dist * 0.000621371192;
    dist = Math.round(dist * 10) / 10;
    if (item.isFavorited === true) {
      return (
        <TouchableOpacity
          activeOpacity={1}
          onPress={() =>
            this.props.navigation.navigate('HomeDetail', {
              deal: item.deal,
              img: item.img,
              title: item.title,
              color: item.color,
              description: item.description,
              isRedeemed: item.isRedeemed,
              isFavorited: item.isFavorited,
              index: item.index,
              timeRemaining: item.timeRemaining,
              latitude: item.latitude,
              longitude: item.longitude,
              points: item.points,
              type: item.type,
            })
          }>
          <HomeCard
            deal={item.deal}
            img={item.img}
            title={item.title}
            color={item.color}
            isFavorited={item.isFavorited}
            index={item.index}
            distance={dist}
            timeRemaining={item.timeRemaining}
          />
        </TouchableOpacity>
      );
    }
  };

  render() {
    return (
      <View style={{backgroundColor: '#FFF', flex: 1}}>
        <View
          style={{
            height: 65,
            borderBottomWidth: 2,
            borderBottomColor: '#f9d3c9',
            width: '100%',
            flexDirection: 'row',
          }}>
          <Text
            style={{
              marginTop: 30,
              marginLeft: 30,
              fontSize: 24,
              fontFamily: 'Quicksand-Bold',
            }}>
            FAVORITES
          </Text>
        </View>
        <FlatList
          contentContainerStyle={{
            paddingBottom: 30,
          }}
          style={{height: '100%', paddingTop: 30}}
          data={this.props.data}
          showsVerticalScrollIndicator={false}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.description}
        />
      </View>
    );
  }
  /*
  render() {
    return (
      <View style={styles.container}>
        <Text>Favorites</Text>
      </View>
    );
  }
  */
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = (state) => ({
  data: state.data.data,
});

export default connect(mapStateToProps)(Favorites);
