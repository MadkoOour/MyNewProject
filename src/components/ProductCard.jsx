import {Image, StyleSheet, Text, Touchable, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const ProductCard = ({item , handleLiked}) => {
  const navigate = useNavigation();
  return (
    <TouchableOpacity style={styles.container} onPress={()=>navigate.navigate("PRODUCT_DETAILS",{id: item.id,})}>
      <Image
        source={{uri:item.image}}
        style={styles.coverImage}
      />
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>${item.price}</Text>
      </View>
      <TouchableOpacity style={styles.heartContainer} onPress={()=>{handleLiked(item)}}>
        {item?.isLiked ? (
          <AntDesign name={'heart'} size={20} color={'#E55B5B'} />
        ) : (
          <AntDesign name={'hearto'} size={20} color={'#E55B5B'} />
        )}
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  coverImage: {
    height: 256,
    width: '90%',
    borderRadius: 20,
    marginVertical: 10,
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
    color: '#444444',
    fontWeight: '600',
  },
  price: {
    fontSize: 18,
    fontWeight: '500',
    color: '#9C9C9C',
  },
  content: {
    marginLeft: 15,
  },
  heartContainer: {
    width: 34,
    height: 34,
    backgroundColor: '#fff',
    borderRadius: 17,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 20,
    right: 20,
  },
});
