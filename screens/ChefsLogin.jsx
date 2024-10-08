import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, TextInput, KeyboardAvoidingView,Platform,
  TouchableWithoutFeedback, ScrollView } from 'react-native'
import React from 'react'

const ChefsLogin = ({navigation}) => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.pagecontainer} />
      <View style={styles.navbar}>
        <TouchableOpacity onPress={()=> navigation.navigate({name: 'Home'})}>
          <Image source={require('../assets/Figma/Home.png')} style={styles.HomeIcon} />
        </TouchableOpacity>
        <Text style={styles.BannerText}>
          Chef's Login
        </Text>
      </View>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} >
        <ScrollView>
      <View style={styles.logo}>
      <Image source={require('../assets/Figma/kitchen.png')} style={styles.logoIcon}/>
              <Text style={styles.logoText}>
                  Login.
              </Text>        
      </View>
      <View style={styles.chefsInput}>
        <TextInput placeholder='Username' placeholderTextColor={'black'} style={styles.Username} />
        <TextInput placeholder='Password' placeholderTextColor={'black'} style={styles.Password} />
        <TouchableOpacity style={styles.loginButton} onPress={()=> navigation.navigate({name: 'ChefsMenu'})}>
          <Text>Login</Text>
        </TouchableOpacity>
          </View>
        </ScrollView>
     </KeyboardAvoidingView>
        

      


    </View>
  )
}

export default ChefsLogin

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E6A4B4',
    flex: 1,
},
    pagecontainer: {
    backgroundColor: '#FF597B',
    
  },

  navbar: {
    backgroundColor: '#FF597B',
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
        marginTop: 20,
        width: 300,
        height: 300,
    },

    logoText: {
      fontFamily: 'Baithe',
      fontSize: 28,
      padding: 15,
  },
    
  chefsInput: {
      
  },
  
  Username: {
    backgroundColor: 'white',
    padding: 20,
    marginTop: 10,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 2,

  },

  Password: {
    backgroundColor: 'white',
    padding: 20,
    marginTop: 10,
    borderRadius: 10,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 2,
  },

  loginButton: {
    backgroundColor: 'white',
    padding: 25,
    margin: 5,
    borderRadius: 10,
    width: '70%',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 2,
  }


  
})