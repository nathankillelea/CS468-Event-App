import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';
import HomeCard from './HomeCard.js';
import { connect } from 'react-redux';

class Map extends React.Component {
    static navigationOptions = {
        title: 'Map',
        header: null,
    };

    constructor() {
        super();
    }
    testFunc(deal, img, title, color, descrip) {
      this.props.navigation.navigate('HomeDetail', {deal: deal, img: img, title: title, color: color, description: descrip})
    }
    test2Func(){
      console.log(this.props.dealList)
    }

    render() {
        return(
            <View style={styles.container}>
                <MapView style={styles.map}
                  region={{
                    latitude: 40.1080007,
                    longitude: -88.2224638,
                    latitudeDelta: .05,
                    longitudeDelta: .05,
                  }}
                  provider="google"
                  showsUserLocation={true}
                  showsMyLocationButton={true}>
                  <MapView.Marker
                    coordinate={{
                      latitude: 40.1080007,
                      longitude: -88.2224638,
                    }}
                    title={'Concert'}
                    description={'Shitty Orchestra'}
                    onPress={() => this.testFunc("100% off", require('../assets/fightingillinibasketball.jpg'), "event2", '#555555', 'description')}
                  />
                  <MapView.Marker
                    coordinate={{
                      latitude: 40.0962534,
                      longitude: -88.2358917,
                    }}
                    title={'Basketball Game'}
                    description={'Illinois vs Kansas State'}
                    onPress={() => this.testFunc("100% off", require('../assets/fightingillinibasketball.jpg'), "event1", '#555555', 'description')}
                  />

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
    dealList: state.deal.dealList
});
export default connect(mapStateToProps)(Map);
//export default
