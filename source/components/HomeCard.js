import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { Icon } from 'react-native-elements';

import { toggle_favorite } from '../actions/index.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class HomeCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={styles.container}>
                <View style={{width: '85%'}}>
                    <ImageBackground
                        style={{width: '100%', height: 200, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-start'}}
                        source={this.props.img}
                    >
                        <View style={{marginTop: 16, marginRight: 16}}>
                            {this.props.isFavorited ? (
                                <Icon type={'font-awesome'} name={'heart'} color={'red'} size={32} onPress={() => this.props.dispatch(toggle_favorite(this.props.index))}/>
                            ) : (
                                <Icon type={'font-awesome'} name={'heart'} color={'#FFF'} size={32} onPress={() => this.props.dispatch(toggle_favorite(this.props.index))}/>
                            )}
                        </View>
                    </ImageBackground>
                    <View style={{backgroundColor: this.props.color, height: 30, justifyContent: 'center',}} >
                        <Text style={{paddingLeft: 12, color: '#FFF', fontFamily: 'quicksand-bold', fontSize: 22}}>{this.props.deal}</Text>
                    </View>
                    <View style={{height: 50,backgroundColor: '#F9F9F9', borderBottomLeftRadius: 10, borderBottomRightRadius: 10, borderBottomWidth: 2, borderBottomColor: '#e0e0e0'}}>
                        <Text style={{paddingLeft: 12, paddingTop: 6, fontFamily: 'quicksand-bold', fontSize: 16}}>{this.props.title}</Text>
                    </View>
                    <View style={{paddingBottom: 25}}/>
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

export default connect()(HomeCard);