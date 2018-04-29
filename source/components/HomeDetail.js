import React from "react";
import {StyleSheet, View, Text, TouchableOpacity, ImageBackground, TouchableWithoutFeedback, ScrollView, Dimensions} from "react-native";
import {connect} from "react-redux";
import {Icon} from "react-native-elements";
import { redeem } from '../actions/index.js';
import { toggle_favorite } from "../actions/index.js";
import MapView from 'react-native-maps';


class HomeDetail extends React.Component {
    static navigationOptions = {
        title: 'HomeDetail',
        header: null,
    };

    constructor(props) {
        super(props);
        this.state = {
            deal: this.props.navigation.state.params.deal,
            img: this.props.navigation.state.params.img,
            title: this.props.navigation.state.params.title,
            color: this.props.navigation.state.params.color,
            description: this.props.navigation.state.params.description,
            isRedeemed: this.props.navigation.state.params.isRedeemed,
            isFavorited: this.props.navigation.state.params.isFavorited,
            index: this.props.navigation.state.params.index,
            timeRemaining: this.props.navigation.state.params.timeRemaining,
            latitude: this.props.navigation.state.params.latitude,
            longitude: this.props.navigation.state.params.longitude,
            points: this.props.navigation.state.params.points,
            type: this.props.navigation.state.params.type,
        }
    }

    redeemHelper() {
        this.props.dispatch(redeem(this.state.index));
        this.setState({isRedeemed: true})
    }

    favoriteHelper() {
        this.props.dispatch(toggle_favorite(this.state.index));
        this.setState({isFavorited: !this.state.isFavorited});
    }

    render() {
        return(
            <View style={{ backgroundColor: '#FFF', flex: 1 }}>
                <View style={{height: 65, width: '100%'}}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Text style={{marginTop: 30, marginLeft: 30, fontSize: 24, fontFamily: 'quicksand-bold', color: '#b6b7b6'}}>RETURN</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
                    <View style={{flex: 1, height: 40, backgroundColor: this.state.color, flexDirection: 'row', alignItems: 'center'}}>
                        <View style={{flex: 3, flexDirection: 'row', justifyContent: 'flex-start'}}>
                            <Text style={{paddingLeft: 12, color: '#FFF', fontFamily: 'quicksand-bold', fontSize: 22}}>{this.state.deal}</Text>
                        </View>
                        {(this.state.type === 'deal') ? (
                            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
                                <Text style={{paddingRight: 12, color: '#ed7f64', fontFamily: 'quicksand-bold', fontSize: 22}}>+{this.state.points}</Text>
                            </View>
                        ) : (
                            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
                                <Text style={{paddingRight: 12, color: '#8190cb', fontFamily: 'quicksand-bold', fontSize: 22}}>+{this.state.points}</Text>
                            </View>
                        )}
                    </View>
                    <ImageBackground
                        style={{width: '100%', height: 235.294117647, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end'}}
                        source={this.state.img}
                    >
                        <View style={{marginBottom: 16, marginRight: 16}}>
                            {this.state.isFavorited ? (
                                <TouchableWithoutFeedback onPress={() => this.favoriteHelper()}>
                                    <Icon type={'font-awesome'} name={'heart'} color={'red'} size={32} />
                                </TouchableWithoutFeedback>
                            ) : (
                                <TouchableWithoutFeedback onPress={() => this.favoriteHelper()}>
                                    <Icon type={'font-awesome'} name={'heart'} color={'#FFF'} size={32} />
                                </TouchableWithoutFeedback>
                            )}
                        </View>
                    </ImageBackground>
                    <View style={{flex: 1}}>
                        <Text style={{marginLeft: 30, marginTop: 20, fontFamily: 'quicksand-bold', fontSize: 16}}>{this.state.title}</Text>
                        <Text style={{marginLeft: 30, marginRight: 30, marginTop: 8, fontFamily: 'quicksand-bold', fontSize: 14, color: '#abacab'}}>{this.state.description}</Text>
                        <View style={{marginTop: 14, flexDirection: 'row', justifyContent: 'center'}}>
                            <Icon type={'material-community'} name={'timer-sand'} size={18} color={'#d3d4d3'}/>
                            <Text style={{paddingLeft: 2, fontFamily: 'quicksand-bold', fontSize: 16, color: '#d3d4d3'}}>{this.state.timeRemaining}</Text>
                        </View>
                        {this.state.isRedeemed ? (
                            <View style={{marginTop: 8, backgroundColor: '#AEAEAE', alignSelf: 'center', borderRadius: 5, paddingVertical: 10, paddingHorizontal: 25}}>
                                <Text style={{color: '#FFF', fontFamily: 'quicksand-bold', fontSize: 16}}>REDEEMED</Text>
                            </View>
                        ) : (
                            <TouchableOpacity style={{marginTop: 8, backgroundColor: this.state.color, alignSelf: 'center', borderRadius: 5, paddingVertical: 10, paddingHorizontal: 25}} onPress={() => this.redeemHelper()}>
                                <Text style={{color: '#FFF', fontFamily: 'quicksand-bold', fontSize: 16}}>REDEEM</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                    <View style={{flex: 1, height: Dimensions.get('window').width, marginTop: 14, alignItems: 'center', justifyContent: 'center'}}>
                        <MapView
                            style={{...StyleSheet.absoluteFillObject}}
                            region={{latitude: this.state.latitude, longitude: this.state.longitude, latitudeDelta: .05, longitudeDelta: .05}}
                            showsMyLocationButton={false}
                            scrollEnabled={false}
                            pitchEnabled={false}
                            rotateEnabled={false}
                            provider={'google'}
                        >
                            <MapView.Marker
                                coordinate={{latitude: this.state.latitude, longitude: this.state.longitude}}
                                pinColor = {this.state.color}
                            />
                        </MapView>
                    </View>
                </ScrollView>
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

export default connect()(HomeDetail);