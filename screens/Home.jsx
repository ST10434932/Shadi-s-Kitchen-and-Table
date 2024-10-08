import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native'
import React from 'react'

const Home = ({ navigation }) => {
  const handleReserve = (dishName) => {
    alert(`You have reserved the ${dishName}!`);
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.pagecontainer} />

      <View style={styles.navbar}>
        <TouchableOpacity style={styles.chefButton} onPress={() => navigation.navigate({ name: 'ChefsLogin' })}>
          <Image source={require('../assets/Figma/chef.png')} style={styles.chefButtonIcon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.userButton}>
          <Image source={require('../assets/Figma/userButton.png')} style={styles.userButtonIcon} />
        </TouchableOpacity>
      </View>

      <View style={styles.logo}>
        <Text style={styles.logoText}>Shadi's Kitchen and Table.</Text>
        <Image source={require('../assets/Figma/kitchen.png')} style={styles.logoIcon} />
      </View>

      <ScrollView style={styles.menuSection}>
        <TouchableOpacity style={styles.starterCard}>
          <Text style={styles.dishTitle}>View Menu</Text>
          <Text style={styles.dishDescription}>View what the chef has to offer.</Text>
          <TouchableOpacity style={styles.reserveButton} onPress={() => navigation.navigate('Menu')}>
            <Text style={styles.reserveButtonText}>View</Text>
          </TouchableOpacity>
        </TouchableOpacity>


      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E6A4B4',
    flex: 1,
  },
  pagecontainer: {
    backgroundColor: '#E48586',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    alignItems: 'center',
  },
  userButton: {},
  chefButton: {},
  userButtonIcon: {
    width: 40,
    height: 40,
  },
  chefButtonIcon: {
    width: 40,
    height: 40,
  },
  logo: {
    alignItems: 'center',
  },
  logoIcon: {
    width: 300,
    height: 300,
  },
  logoText: {
    fontFamily: 'Baithe',
    fontSize: 28,
    color: '#',
  },
  menuSection: {
    marginVertical: 20,
  },
  starterCard: {
    backgroundColor: 'white',
    borderRadius: 20,
    alignSelf: 'center',
    width: 350,
    padding: 30,
    marginBottom: 20,
  },
  mainMealCard: {
    backgroundColor: 'white',
    borderRadius: 20,
    alignSelf: 'center',
    width: 350,
    padding: 30,
    marginBottom: 20,
  },
  dessertCard: {
    backgroundColor: 'white',
    borderRadius: 20,
    alignSelf: 'center',
    width: 350,
    padding: 30,
    marginBottom: 20,
  },
  dishTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  dishDescription: {
    fontSize: 16,
    marginBottom: 20,
  },
  reserveButton: {
    backgroundColor: '#4C6B51',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  reserveButtonText: {
    color: 'white',
    fontSize: 16,
  },
});
