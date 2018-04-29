import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import {connect} from "react-redux";
import {List} from 'react-native-elements';


class Calendar extends React.Component {
    static navigationOptions = {
        title: 'Calendar',
        header: null,
    };

    constructor() {
        super();
    }

    renderItem = ({ item }) => {
        if(item.index === 0 || this.props.data[item.index].date !== this.props.data[item.index-1].date){
            return(
                <View>
                    <View style={{flex:1, flexDirection: 'row', alignItems: 'center'}}>
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
                            <Text style={{fontFamily: 'quicksand-bold', fontSize: 18, color: '#c9cac9'}}>{item.date}</Text>
                        </View>
                        <View style={{flex: 4, flexDirection: 'row', justifyContent: 'flex-end'}}>
                            <View style={{flex: 1, backgroundColor: '#e8e9e8', width: '100%', alignSelf: 'center', borderRadius: 10, marginRight: 20}}>
                                <Text style={{paddingLeft: 12, paddingTop: 12, fontSize: 22, fontFamily: 'quicksand-bold', color: item.color}}>{item.deal}</Text>
                                <Text style={{paddingLeft: 12, paddingTop: 4, paddingBottom: 12, fontSize: 20, fontFamily: 'quicksand-bold', color: '#919291'}}>{item.title}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{height: 25, backgroundColor: '#FFF'}}/>
                </View>
            );
        }
        else{
            return(
                <View>
                    <View style={{flex:1, flexDirection: 'row', alignItems: 'center'}}>
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
                        </View>
                        <View style={{flex: 4, flexDirection: 'row', justifyContent: 'flex-end'}}>
                            <View style={{flex: 1, backgroundColor: '#e8e9e8', width: '100%', alignSelf: 'center', borderRadius: 10, marginRight: 20}}>
                                <Text style={{paddingLeft: 12, paddingTop: 12, fontSize: 22, fontFamily: 'quicksand-bold', color: item.color}}>{item.deal}</Text>
                                <Text style={{paddingLeft: 12, paddingTop: 4, paddingBottom: 12, fontSize: 20, fontFamily: 'quicksand-bold', color: '#919291'}}>{item.title}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{height: 25, backgroundColor: '#FFF'}}/>
                </View>
            );
        }
    };
    render() {
        return(
            <View style={{backgroundColor: '#FFF', flex: 1}}>
                <View style={{height: 65, borderBottomWidth: 2, borderBottomColor: '#f9d3c9', width: '100%', flexDirection: 'row'}}>
                    <View style={{height: 65, borderBottomWidth: 2, borderBottomColor: '#f9d3c9', width: '100%', flexDirection: 'row'}}>
                        <Text style={{marginTop: 30, marginLeft: 30, fontSize: 24, fontFamily: 'quicksand-bold'}}>CALENDAR</Text>
                    </View>
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
        justifyContent: 'center',
    },
});
const mapStateToProps = (state) => ({
    data: state.data.data
});
export default connect(mapStateToProps)(Calendar);