import React, { Component } from "react";
import {
    View,
    Text,
    KeyboardAvoidingView,
    StyleSheet,
    ScrollView,
    FlatList,
    TouchableHighlight,
    Alert,
    Image,
} from "react-native";
import db from "../config";
import firebase from "firebase";
import { RFValue } from "react-native-responsive-fontsize";
import { SearchBar, ListItem, Input } from "react-native-elements";

import MyHeader from "../components/MyHeader";

export default class UpdatesScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 0.1 }}>
                    <MyHeader title="Updates" navigation={this.props.navigation} />
                </View>
                <Text> this is the updates screen </Text>
            </View>
        )
    }
}