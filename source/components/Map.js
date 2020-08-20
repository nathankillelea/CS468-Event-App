import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';
import { connect } from 'react-redux';
import geolib from "geolib";

class Map extends React.Component {
  static navigationOptions = {
    title: 'Map',
    header: null,
  };

  constructor() {
    super();
    this.state = {
      userLatitude: 0,
      userLongitude: 0,
    }
  }

  componentDidMount(){
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          userLatitude: position.coords.latitude,
          userLongitude: position.coords.longitude,
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }

  render() {
    return(
      <View style={styles.container}>
        <MapView style={styles.map}
             region={{latitude: this.state.userLatitude, longitude: this.state.userLongitude, latitudeDelta: .05, longitudeDelta: .05}}
             showsMyLocationButton = {true}
             showsUserLocation={true}
             provider={'google'}>
          {this.props.data.map(marker =>
            (
              <MapView.Marker
                coordinate={{latitude: marker.latitude, longitude: marker.longitude}}
                pinColor = {marker.color}
                onPress = {() => this.props.navigation.navigate('HomeDetail', {deal: marker.deal, img: marker.img, title: marker.title, color: marker.color, description: marker.description, isRedeemed: marker.isRedeemed, isFavorited: marker.isFavorited, index: marker.index, timeRemaining: marker.timeRemaining, latitude: marker.latitude, longitude: marker.longitude, points: marker.points, type: marker.type})}/>
            ))}
        </MapView>
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
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }
});
const mapStateToProps = (state) => ({
  data: state.data.data
});
export default connect(mapStateToProps)(Map);