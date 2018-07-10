import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView } from 'react-native'
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component'; 
import { Carousel } from '.';
import config from '../../config';

const { width, height } = Dimensions.get('window');

class DetailBoard extends Component {

    constructor(props) {
        super(props);

        // hardcode data will be replaced with realtime data
        this.state = {
            tableHead: ['1.2GHz Processor\n256 GB Storage'],
            tableTitle: ['Title', 'Title2', 'Title3', 'Title4'],
            tableData: [
                ['1.2GHz dual-core 7th-generation Intel Core m3 processor'],
                ['Turbo Boost up to 3.0 GHz'],
                ['8GB 1866MHz LPDDR3 memory'],
                ['256GB SSD stroage'],
                ['Intel HD Graphics 615'],
                ['Keyboard with second-generation butterfly Mechanism'],
            ]
        }
    }

    handleBuy = () => {
        //TODO: do buy a item process
        console.log("handle buy button pressed")
    }

    render() {
        return (
            <ScrollView contentContainerStyle={styles.container}
                        showsHorizontalScrollIndicator= {false} 
                        showsVerticalScrollIndicator={false}
                        >
                <Table style={styles.table}  borderStyle={{borderWidth:0, borderColor: '#f1f8ff'}}>
                    <Row data={this.state.tableHead} flexArr={[1]} style={styles.head} textStyle={styles.text} textStyle={{fontWeight:"900", fontSize: 18}}/>
                    <TableWrapper style={styles.wrapper}>
                        {/* <Col data={this.state.tableTitle} style={styles.title} heightArr={[28,28]} textStyle={styles.text}/> */}
                        <Rows data={this.state.tableData} flexArr={[1]} style={styles.row} textStyle={styles.text}/>
                     </TableWrapper>
                </Table>
                <View style={styles.relativeProductCarousel}>
                    <Carousel images={ config.images} isItemCarousel={false}/>
                </View>
            </ScrollView>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        borderColor: '#f1f8ff',
        borderWidth: 0,
        alignItems: "center",
        justifyContent: "center",
        
    },

    table: {
        width: width * 0.85,
        borderColor: '#f1f8ff'
    },

    head: {  
        height: 70,
        backgroundColor: '#f1f8ff',

    },
    wrapper: {
         flexDirection: 'row'
    },
    row: {
        height: 40,
        backgroundColor: '#f1f8ff'
    },
    text: {
        textAlign: 'left',
        fontSize: 16,
        fontWeight: "200",
        color:  "#8D8E8C"
    },

    relativeProductCarousel: {
        marginTop: 100,
        backgroundColor: 'rgb(123,213,101)',
        width,
        height: 140,
        flex: 1,
        flexDirection: 'column',
    }
  });


export default DetailBoard;