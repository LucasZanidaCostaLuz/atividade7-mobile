import React from "react"; 
import { View } from "react-native"; 

export default function Home() {
    return (
        <View style={styles.container}></View> 
    );
}

const styles = {
    container: {
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center", 
        backgroundColor: "yellow", 
    },
    title: {
        fontSize: 30,
    },
};