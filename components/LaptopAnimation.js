import React from 'react';
import LottieView from 'lottie-react-native';
import { View, Image } from 'react-native';

export default class LaptopAnimation extends React.Component {
    render() {
        return (
            <LottieView source={require('../assets/animatedlaptop.json')} autoPlay
                loop
            />
        )
    }
}