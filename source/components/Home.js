import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { List, Icon } from 'react-native-elements';
import HomeCard from './HomeCard.js';
import { connect } from 'react-redux';

class Home extends React.Component {
    static navigationOptions = {
        title: 'Home',
        header: null,
    };

    constructor() {
        super();
    }

    render() {
        console.log(this.props.dealList);
        return(
            <View style={{backgroundColor: '#FFF', flex: 1}}>
                <View style={{height: 60, borderBottomWidth: 4, borderBottomColor: '#E5461F', width: '100%', flexDirection: 'row'}}>
                    <Text style={{marginTop: 20, marginLeft: 30, fontSize: 24, fontFamily: 'quicksand-bold'}}>DEALS</Text>
                    <Text style={{marginTop: 20, marginLeft: 40, fontSize: 24, fontFamily: 'quicksand-bold'}}>EXPERIENCES</Text>
                    <View style={{marginTop: 10, flex: 1, justifyContent: 'flex-end', flexDirection: 'row', marginRight: 30}}>
                        <Icon type={'feather'} name={'search'} />
                    </View>
                </View>
                <List containerStyle={{ borderTopWidth: 0, width: '100%', marginTop: 0, paddingTop: 0 , flex: 1}}>
                    <FlatList
                        contentContainerStyle={{ paddingBottom:30 }}
                        style={{height: '100%', paddingTop: 30}}
                        data={this.props.dealList}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('HomeDetail', {deal: item.deal, img: item.img, title: item.title, color: item.color, description: item.description})}>
                                <HomeCard
                                    deal={item.deal}
                                    img={item.img}
                                    title={item.title}
                                    color={item.color}
                                    isFavorited={item.isFavorited}
                                    index={item.index}
                                />
                            </TouchableOpacity>
                        )}
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
    dealList: state.deal.dealList
});

export default connect(mapStateToProps)(Home);