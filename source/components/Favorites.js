import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { List } from 'react-native-elements';
import HomeCard from './HomeCard.js';
import { connect } from 'react-redux';

class Favorites extends React.Component {
    static navigationOptions = {
        title: 'Favorites',
        header: null,
    };

    constructor() {
        super();
    }

    renderItem = ({ item }) => {
        if(item.isFavorited === true) {
            return(
                <TouchableOpacity onPress={() => this.props.navigation.navigate('HomeDetail', {deal: item.deal, img: item.img, title: item.title, color: item.color, description: item.description, isRedeemed: item.isRedeemed, isFavorited: item.isFavorited, index: item.index})}>
                    <HomeCard
                        deal={item.deal}
                        img={item.img}
                        title={item.title}
                        color={item.color}
                        isFavorited={item.isFavorited}
                        index={item.index}
                    />
                </TouchableOpacity>
            );
        }
    };

    render() {
        return(
            <View style={{backgroundColor: '#FFF', flex: 1}}>
                <View style={{height: 65, borderBottomWidth: 4, borderBottomColor: '#E5461F', width: '100%', flexDirection: 'row'}}>
                    <Text style={{marginTop: 30, marginLeft: 30, fontSize: 24, fontFamily: 'quicksand-bold'}}>FAVORITES</Text>
                </View>
                <List containerStyle={{ borderTopWidth: 0, width: '100%', marginTop: 0, paddingTop: 0 , flex: 1}}>
                    <FlatList
                        contentContainerStyle={{ paddingBottom:30 }}
                        style={{height: '100%', paddingTop: 30}}
                        data={this.props.data}
                        showsVerticalScrollIndicator={false}
                        renderItem={this.renderItem}
                        keyExtractor={item => item.description}
                    />
                </List>
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

const mapStateToProps = (state) => ({
    data: state.data.data
});

export default connect(mapStateToProps)(Favorites);