import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.appIconContainer}>
        <Image source={require('../assets/icon.png')} style={styles.appIcon} />
      </View>
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
});
