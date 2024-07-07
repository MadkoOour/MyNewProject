import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const Header = ({isCart}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('HOME_STACK')}
        style={styles.appIconContainer}>
        {isCart ? (
          <Ionicons
            name="chevron-back"
            size={24}
            style={styles.backIcon}
            color="#E96E6E"
          />
        ) : (
          <Image
            source={require('../assets/icon.png')}
            style={styles.appIcon}
          />
        )}
      </TouchableOpacity>
      {isCart && <Text style={styles.myCart}>My Cart</Text>}
      <Image
        source={require('../assets/woman.png')}
        style={styles.profilePhoto}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    // backgroundColor:'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profilePhoto: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderColor: '#444',
    borderStyle: 'solid',
  },
  appIcon: {
    width: 28,
    height: 28,
    backgroundColor: 'yellow',
    borderRadius: 50,
  },
  appIconContainer: {
    width: 44,
    height: 44,
    backgroundColor: '#fff',
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  myCart: {
    fontSize: 28,
    fontWeight: '500',
    color: '#000',
  },
});
