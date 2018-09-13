import React, { Component } from 'react';
import { Text, View, Platform } from 'react-native';

class LifeCycle extends Component {
    constructor(props) {
        super(props)
        console.log(`${Date.now()}. ini Constructor`);
        this.state = {
            numberOfRefresh: 0
        };
        setInterval(() => {
            console.log(`${Date.now()}. State berubah setiap 2 detik`);
            this.setState(previousState => {
                return { numberOfRefresh: previousState.numberOfRefresh + 1 };
            });
        }, 2000);
    }

    // one-time calling methods
    // (constructor, componentWillMount, componentDidMount)
    componentWillMount() {
        console.log(`${Date.now()}. ini componentWillMount`);
    }
    componentDidMount() {
        console.log(`${Math.floor(Date.now())}. ini componentDidMount`);
    }

    // multiple-times methods
    // (shouldComponentUpdate, componentWillUpdate, componentDidUpdate)
    shouldComponentUpdate() {
        console.log(`${Date.now()}. ini shouldComponentUpdate`);
        return true; //if False , component tidak akan update
    }

    componentWillUpdate() {
        console.log(`${Date.now()}. ini componentWillUpdate`);
    }
    componentDidUpdate() {
        console.log(`${Date.now()}. ini componentDidUpdate`);
    }

    render() {
        console.log(`${Math.floor(Date.now())}. ini function render`);
        let textToDisplay = `Angka refresh berapa kali: ${this.state.numberOfRefresh}`;
        return(
            <View style={{flex: 1, marginTop: 100}}>
                <Text>LifeCycle test</Text>
                <Text>{textToDisplay}</Text>
            </View>
        )
    }
}

export default class LifeCycleComponent extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        var lifeCycle = <LifeCycle propA="abc"></LifeCycle>;
        return(
            <View>
                {lifeCycle}
            </View>
        )
    }
}
