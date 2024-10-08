// MenuCard.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const MenuCard = ({ dish, onReserve }) => {
    return (
        <View style={styles.dishCard}>
            <Text style={styles.dishName}>{dish.name}</Text>
            <Text style={styles.dishDetails}>{dish.courseType}</Text>
            <Text style={styles.dishDetails}>{dish.description}</Text>
            <Text style={styles.dishPrice}>Price: R{dish.price}</Text>
            <TouchableOpacity style={styles.reserveButton} onPress={() => onReserve(dish.id)}>
                <Text style={styles.reserveButtonText}>Reserve</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    dishCard: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        marginVertical: 10,
    },
    dishName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    dishDetails: {
        fontSize: 16,
        marginVertical: 5,
    },
    dishPrice: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    reserveButton: {
        backgroundColor: '#4C6B51',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 10,
    },
    reserveButtonText: {
        color: 'white',
    },
});

export default MenuCard;
