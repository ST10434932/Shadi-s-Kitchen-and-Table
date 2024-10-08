import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image, TextInput, FlatList, Modal } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ChefsMenu = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [courseType, setCourseType] = useState('');
  const [dishName, setDishName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [dishes, setDishes] = useState([]);

  const saveDishesToStorage = async (newDishes) => {
    try {
      await AsyncStorage.setItem('dishes', JSON.stringify(newDishes));
    } catch (error) {
      console.log('Error saving dishes', error);
    }
  };

  const handleAddDish = () => {
    if (!dishName || !courseType || !description || !price) {
      alert('Please fill in all fields');
      return;
    }

    const newDish = {
      id: Math.random().toString(),
      name: dishName,
      courseType,
      description,
      price,
    };

    const updatedDishes = [...dishes, newDish];
    setDishes(updatedDishes);
    saveDishesToStorage(updatedDishes);
    setModalVisible(false);
    setDishName('');
    setCourseType('');
    setDescription('');
    setPrice('');
  };

  const handleRemoveDish = (id) => {
    const updatedDishes = dishes.filter((dish) => dish.id !== id);
    setDishes(updatedDishes);
    saveDishesToStorage(updatedDishes);
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.pagecontainer} />
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => navigation.navigate({ name: 'Home' })}>
          <Image source={require('../assets/Figma/Home.png')} style={styles.HomeIcon} />
        </TouchableOpacity>
        <Text style={styles.BannerText}>Chef's Menu</Text>
      </View>

      <View style={styles.logo}>
        <Image source={require('../assets/Figma/kitchen.png')} style={styles.logoIcon} />
      </View>

      <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
        <Text style={styles.addButtonText}>Add New Dish</Text>
      </TouchableOpacity>

      <FlatList
        data={dishes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.dishCard}>
            <Text style={styles.dishName}>{item.name}</Text>
            <Text style={styles.dishDetails}>{item.courseType}</Text>
            <Text style={styles.dishDetails}>{item.description}</Text>
            <Text style={styles.dishPrice}>Price: R{item.price}</Text>
            <TouchableOpacity onPress={() => handleRemoveDish(item.id)} style={styles.removeButton}>
              <Text style={styles.removeButtonText}>Remove</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Add Dish</Text>

            <RNPickerSelect
              onValueChange={(value) => setCourseType(value)}
              items={[
                { label: 'Starter', value: 'starter' },
                { label: 'Main Meal', value: 'main meal' },
                { label: 'Dessert', value: 'dessert' },
              ]}
              style={{
                inputIOS: styles.pickerInput,
                inputAndroid: styles.pickerInput,
              }}
              placeholder={{ label: 'Select Course Type', value: null }}
            />

            <TextInput
              placeholder="Dish Name"
              placeholderTextColor={'black'}
              style={styles.input}
              value={dishName}
              onChangeText={setDishName}
            />
            <TextInput
              placeholder="Description"
              style={styles.input}
              placeholderTextColor={'black'}
              value={description}
              onChangeText={setDescription}
            />
            <TextInput
              placeholder="Price"
              placeholderTextColor={'black'}
              keyboardType="number-pad"
              style={styles.input}
              value={price}
              onChangeText={setPrice}
            />

            <TouchableOpacity style={styles.submitButton} onPress={handleAddDish}>
              <Text style={styles.submitButtonText}>Add to Menu</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.cancelButton}>
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ChefsMenu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFBDE6',
  },
  pagecontainer: {
    backgroundColor: '#F473B9',
  },
  navbar: {
    backgroundColor: '#F473B9',
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  HomeIcon: {
    width: 30,
    height: 30,
  },
  BannerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
    left: 90,
  },
  logo: {
    alignItems: 'center',
  },
  logoIcon: {
    width: 200,
    height: 200,
  },
  addButton: {
    backgroundColor: '#4C6B51',
    padding: 15,
    borderRadius: 10,
    margin: 20,
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 18,
  },
  dishCard: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 20,
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
  removeButton: {
    backgroundColor: '#d9534f',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  removeButtonText: {
    color: 'white',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    margin: 20,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  pickerInput: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    marginBottom: 15,
  },
  input: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 15,
  },
  submitButton: {
    backgroundColor: '#4C6B51',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
  },
  cancelButton: {
    padding: 10,
    marginTop: 10,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#d9534f',
  },
});
