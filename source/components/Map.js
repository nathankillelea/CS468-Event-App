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

    render() {
        return(
            <View style={styles.container}>
                <MapView style={styles.map}
                         region={{latitude: 40.1080007, longitude: -88.2224638, latitudeDelta: .05, longitudeDelta: .05}}
                         showsMyLocationButton = {true}
                         showsUserLocation={true}
                         provider={'google'}>
                    {this.props.data.map(marker =>
                        (
                            <MapView.Marker
                                coordinate={{latitude: marker.latitude, longitude: marker.longitude}}
                                title={marker.deal}
                                description={marker.title}
                                pinColor = {marker.color}
                                onPress = {() => this.props.navigation.navigate('HomeDetail', {deal: marker.deal, img: marker.img, title: marker.title, color: marker.color, description: marker.description, isRedeemed: marker.isRedeemed, isFavorited: marker.isFavorited, index: marker.index, timeRemaining: marker.timeRemaining})}/>
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