import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Loading () {
    return (
        <View style={styles.container}>
            <Text style={styles.logo}>NOVATION</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        paddingVertical: 30,
        backgroundColor: "#8e44ad"
    },
    logo: {
        color: "white",
        fontSize: 15,
        fontWeight: "bold"
    }
})