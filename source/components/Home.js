/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Feather from 'react-native-vector-icons/dist/Feather';
import HomeCard from './HomeCard.js';
import {connect} from 'react-redux';
import {getDistance} from 'geolib';
import Geolocation from '@react-native-community/geolocation';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      isDealPressed: true,
      isExperiencesPressed: false,
      isSearchPressed: false,
      userLatitude: 0,
      userLongitude: 0,
      query: '',
    };
  }

  componentDidMount() {
    Geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        this.setState({
          userLatitude: position.coords.latitude,
          userLongitude: position.coords.longitude,
        });
      },
      (error) => {
        this.setState({error: error.message});
      },
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
    if (this.state.isSearchPressed) {
      if (this.state.isDealPressed) {
        if (
          (item.deal.toLowerCase().includes(this.state.query.toLowerCase()) ||
            item.title
              .toLowerCase()
              .includes(this.state.query.toLowerCase())) &&
          item.type === 'deal'
        ) {
          console.log(item.type);
          console.log('props', this.props.navigation);
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
      } else if (this.state.isExperiencesPressed) {
        if (
          (item.deal.toLowerCase().includes(this.state.query.toLowerCase()) ||
            item.title
              .toLowerCase()
              .includes(this.state.query.toLowerCase())) &&
          item.type === 'experience'
        ) {
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
      }
    } else if (this.state.isDealPressed) {
      if (item.type === 'deal') {
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
    } else if (this.state.isExperiencesPressed) {
      if (item.type === 'experience') {
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
    }
  };

  dealPressedHandler() {
    this.setState({
      isDealPressed: true,
      isExperiencesPressed: false,
      isSearchPressed: false,
    });
  }

  experiencesPressedHandler() {
    this.setState({
      isDealPressed: false,
      isExperiencesPressed: true,
      isSearchPressed: false,
    });
  }

  searchPressedHandler() {
    this.setState({
      isSearchPressed: true,
    });
  }

  render() {
    if (this.state.isSearchPressed) {
      return (
        <View style={{backgroundColor: '#FFF', flex: 1}}>
          {this.state.isDealPressed ? (
            <View
              style={{
                height: 65,
                borderBottomWidth: 4,
                borderBottomColor: '#E5461F',
                width: '100%',
                flexDirection: 'row',
              }}>
              <View
                style={{
                  marginTop: 20,
                  flex: 1,
                  justifyContent: 'flex-start',
                  flexDirection: 'row',
                  marginLeft: 25,
                  alignItems: 'center',
                }}>
                <Feather name={'search'} color={'#b6b7b6'} size={26} />
                <TextInput
                  placeholder={'SEARCH'}
                  placeholderTextColor={'#b6b7b6'}
                  onChangeText={(input) => this.setState({query: input})}
                  style={{
                    fontFamily: 'Quicksand-Bold',
                    fontSize: 24,
                    color: '#b6b7b6',
                    width: '80%',
                    paddingLeft: 4,
                    padding: 0,
                    margin: 0,
                    borderWidth: 0,
                  }}
                />
                <TouchableWithoutFeedback
                  onPress={() =>
                    this.setState({isSearchPressed: false, query: ''})
                  }
                >
                  <Feather name={'x'} color={'#b6b7b6'} size={26} />
                </TouchableWithoutFeedback>
              </View>
            </View>
          ) : (
            <View
              style={{
                height: 65,
                borderBottomWidth: 4,
                borderBottomColor: '#4B60B4',
                width: '100%',
                flexDirection: 'row',
              }}>
              <View
                style={{
                  marginTop: 20,
                  flex: 1,
                  justifyContent: 'flex-start',
                  flexDirection: 'row',
                  marginLeft: 25,
                  alignItems: 'center',
                }}
              >
                <Feather name={'search'} color={'#b6b7b6'} size={26} />
                <TextInput
                  placeholder={'SEARCH'}
                  placeholderTextColor={'#b6b7b6'}
                  onChangeText={(input) => this.setState({query: input})}
                  style={{
                    fontFamily: 'Quicksand-Bold',
                    fontSize: 24,
                    color: '#b6b7b6',
                    width: '80%',
                    paddingLeft: 4,
                    padding: 0,
                    margin: 0,
                    borderWidth: 0,
                  }}
                />
                <TouchableWithoutFeedback
                  onPress={() =>
                    this.setState({isSearchPressed: false, query: ''})
                  }>
                  <Feather name={'x'} color={'#b6b7b6'} size={26} />
                </TouchableWithoutFeedback>
              </View>
            </View>
          )}
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
    else if (this.state.isDealPressed) {
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
            <TouchableWithoutFeedback onPress={() => this.dealPressedHandler()}>
              <View
                style={{borderBottomWidth: 4, borderBottomColor: '#E5461F'}}>
                <Text
                  style={{
                    marginTop: 30,
                    marginLeft: 25,
                    marginRight: 25,
                    fontSize: 24,
                    fontFamily: 'Quicksand-Bold',
                    color: '#000',
                  }}>
                  DEALS
                </Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() => this.experiencesPressedHandler()}>
              <View>
                <Text
                  style={{
                    marginTop: 30,
                    marginLeft: 25,
                    marginRight: 25,
                    fontSize: 24,
                    fontFamily: 'Quicksand-Bold',
                    color: '#b6b7b6',
                  }}>
                  EXPERIENCES
                </Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() => this.searchPressedHandler()}>
              <View
                style={{
                  paddingTop: 20,
                  flex: 1,
                  justifyContent: 'flex-end',
                  flexDirection: 'row',
                  paddingRight: 25,
                  alignItems: 'center',
                }}>
                <Feather name={'search'} color={'#b6b7b6'} size={26} />
              </View>
            </TouchableWithoutFeedback>
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
    else if (this.state.isExperiencesPressed) {
      return (
        <View style={{backgroundColor: '#FFF', flex: 1}}>
          <View
            style={{
              height: 65,
              borderBottomWidth: 2,
              borderBottomColor: '#dbdff0',
              width: '100%',
              flexDirection: 'row',
            }}>
            <TouchableWithoutFeedback onPress={() => this.dealPressedHandler()}>
              <View>
                <Text
                  style={{
                    marginTop: 30,
                    marginLeft: 25,
                    marginRight: 25,
                    fontSize: 24,
                    fontFamily: 'Quicksand-Bold',
                    color: '#b6b7b6',
                  }}>
                  DEALS
                </Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() => this.experiencesPressedHandler()}>
              <View
                style={{borderBottomWidth: 4, borderBottomColor: '#4B60B4'}}>
                <Text
                  style={{
                    marginTop: 30,
                    marginLeft: 25,
                    marginRight: 25,
                    fontSize: 24,
                    fontFamily: 'Quicksand-Bold',
                    color: '#000',
                  }}>
                  EXPERIENCES
                </Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() => this.searchPressedHandler()}>
              <View
                style={{
                  marginTop: 20,
                  flex: 1,
                  justifyContent: 'flex-end',
                  flexDirection: 'row',
                  marginRight: 25,
                  alignItems: 'center',
                }}>
                <Feather name={'search'} color={'#b6b7b6'} size={26} />
              </View>
            </TouchableWithoutFeedback>
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

const mapStateToProps = (state) => ({
  data: state.data.data,
});

export default connect(mapStateToProps)(Home);
