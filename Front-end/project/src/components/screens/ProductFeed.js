import React, { Component } from 'react'
import { StyleSheet, View, Text, FlatList } from 'react-native'
import { List, ListItem } from 'react-native-elements'
import config from '../../config'
import { Product } from '../presentation';

var navigation = ""

export default class ProductFeed extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            data: [],
            page: 1,
            seed: 1,
            error: null,
            refreshing: false, 
        };
        
        this.state.data = config.dummyList 
    }

    componentDidMount() {
        // this.makeRemoteRequest();
        this.state.navigation = this.props.navigation
        this.setState({ navigation: this.props.navigation })        
    }

    makeRemoteRequest = () => {
        const { page, seed } = this.state;
        const url = "";
        this.setState({ loading: true });
        fetch(url)
        .then(res => res.json )
        .then(res => {
            this.setState({
                data: page === 1 ? res.results : [...this.state.data, ...res.results],
                error: res.error || null,
                loading: false,
                refreshing: false
            });
        })
        .catch(error => {
            this.setState({ error, loading: false});
        });
    }

    renderFeed({ item }) {
        return  <Product product={ item } navigation={navigation}/>
    }    

    render() {        
        navigation = this.props.navigation 
        return (
            <FlatList 
                data={ this.state.data }
                renderItem={ this.renderFeed }
                extraData={ this.state }
                keyExtractor={ (item) => `key-${item.id}` }
            /> 
        )
    }
}