import React, { useEffect, useState } from 'react';
import { SafeAreaView, TouchableOpacity, View, StyleSheet, Text, ScrollView, AsyncStorage } from 'react-native';

const Menu = () => {
    const [dishes, setDishes] = useState([]);

    // Function to load dishes from AsyncStorage
    const loadDishes = async () => {
        try {
            const savedDishes = await AsyncStorage.getItem('dishes');
            if (savedDishes !== null) {
                setDishes(JSON.parse(savedDishes));
            }
        } catch (error) {
            console.log('Error loading dishes', error);
        }
    };

    useEffect(() => {
        loadDishes();
    }, []);

    // Handle reserving a dish (client action)
    const handleReserve = (dishId) => {
        alert(`You have reserved dish with ID: ${dishId}`);
    };

    return (
        <View style={styles.container}>
            <SafeAreaView />

            <View style={styles.navbar}>
                <Text style={styles.bannerText}>Menu</Text>
            </View>

            <View style={styles.menuItems}>
                <ScrollView style={styles.menuContainer}>
                    {dishes.length === 0 ? (
                        <Text style={styles.noDishesText}>No dishes available</Text>
                    ) : (
                        dishes.map((dish) => (
                            <View key={dish.id} style={styles.dishCard}>
                                <Text style={styles.dishName}>{dish.name}</Text>
                                <Text style={styles.dishDetails}>{dish.courseType}</Text>
                                <Text style={styles.dishDetails}>{dish.description}</Text>
                                <Text style={styles.dishPrice}>Price: R{dish.price}</Text>
                                <TouchableOpacity
                                    style={styles.reserveButton}
                                    onPress={() => handleReserve(dish.id)}
                                >
                                    <Text style={styles.reserveButtonText}>Reserve</Text>
                                </TouchableOpacity>
                            </View>
                        ))
                    )}
                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E6A4B4',
    },
    navbar: {
        flexDirection: 'row',
        padding: 20,
        alignItems: 'flex-start',
    },
    bannerText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    menuItems: {
        flex: 1,
    },
    menuContainer: {
        padding: 20,
    },
    noDishesText: {
        textAlign: 'center',
        fontSize: 18,
        marginVertical: 20,
    },
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

export default Menu;
