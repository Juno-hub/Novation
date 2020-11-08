import React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';
import logo from './assets/VA.png';

export default function Loading () {
    return (
        <View style={styles.container}>
            <Image source={logo} style={styles.logo} />
            <View style={styles.textContainer}>
                <Text style={styles.text}>NOVATION</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 160,
        alignItems: "center",
        backgroundColor: "#8e44ad",
    },
    textContainer: {
        flex: 1,
        justifyContent: "flex-end",
        paddingVertical: 30,
    },
    logo: {
        width: 70,
        height: 70,
    },
    text: {
        color: "white",
        fontSize: 15,
        fontWeight: "bold"
    }
})