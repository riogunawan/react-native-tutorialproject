import React, { Component } from 'react';
import {
  Image,
} from 'react-native';

export default class Robot extends Component {
    render () {
        var imageSource = {
            uri: "https://www.robotshop.com/media/catalog/product/cache/1/image/900x900/9df78eab33525d08d6e5fb8d27136e95/a/l/alpha-1s-humanoid-robot_1.jpg"
        };
        return (
                <Image source={ imageSource }
                    style={ {width: 300, height: 200} }
                />

        );
    }
}
