import React, { Component } from "react";
import {
    View,
    StyleSheet,
    Text,
    FlatList,
    TouchableOpacity,
    Image,
} from "react-native";
import { ListItem, SearchBar } from "react-native-elements";
import firebase from "firebase";
import db from "../config";
import MyHeader from "../components/MyHeader";

export default class SearchLaptops extends Component {
    constructor() {
        super()
        this.state = {
            allLaptops: [],
            search: ""
        }
        this.laptopRef = null;
    }
    render() {
        return (
            <View style={{ flex: 1 }}>

            </View>
        )
    }

    getLaptopDetails = () => {
        this.laptopRef = db
            .collection("laptops")
            .onSnapshot((snapshot) => {
                var allLaptops = snapshot.docs.map((doc) => doc.data());
                this.setState({
                    allLaptops: allLaptops,
                });
            });
    };

    componentDidMount() {
        this.getLaptopDetails();
    }

    keyExtractor = (item, index) => index.toString();

    renderItem = ({ item, i }) => {
        return (
            <ListItem
                key={i}
                title={item.laptop_name}
                subtitle={item.user_type}
                titleStyle={{ color: "black", fontWeight: "bold" }}
                rightElement={
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            console.log(item)
                            this.props.navigation.navigate("Information", {
                                details: item,
                            });
                        }}
                    >
                        <Text style={{ color: "#000000" }}>View</Text>
                    </TouchableOpacity>
                }
                bottomDivider
            />
        );
    };


    SearchFilterFunction = async (text) => {
        var filteredLaptops = []
        const query = await db.collection("laptops").where('user_type', '==', text).get()
        query.docs.map((doc) => {
            filteredLaptops.push(doc.data())

        });
        this.setState({
            allLaptops: filteredLaptops,
        })
    }
    render() {
        return (
            <View style={styles.view}>
                <MyHeader title="Search Laptops" navigation={this.props.navigation} />
                <View styles={{ height: 20, width: '100%' }}>
                    <SearchBar
                        placeholder="Type Here..."
                        onChangeText={(text) => {
                            this.setState({
                                // btw im typing so dont panic, needed to fix these things, so did it , run and check, exited the session now , let me know output on whatsapp
                                search: text
                            })
                            this.SearchFilterFunction(text)
                        }}
                        onClear={text => this.getLaptopDetails}
                        value={this.state.search}
                    />
                </View>

                <View style={{ flex: 1 }}>
                    {this.state.allLaptops.length === 0 ? (
                        <View style={styles.subContainer}>
                            <Text style={{ fontSize: 20 }}>No laptops to show, try again later</Text>
                        </View>
                    ) : (
                            <FlatList
                                keyExtractor={this.keyExtractor}
                                data={this.state.allLaptops}
                                renderItem={this.renderItem}
                            />
                        )}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    subContainer: {
        flex: 1,
        fontSize: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        width: 100,
        height: 30,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffc0cb",
        shadowColor: "#c0c0c0",
        shadowOffset: {
            width: 2,
            height: 8,
        },
    },
    view: {
        flex: 1,
        backgroundColor: "#39ff14"
    }
});