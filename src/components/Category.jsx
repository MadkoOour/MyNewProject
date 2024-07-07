import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Category = ({
  item,
  selectedCategory,
  setSelectedCategory,
  handleCategory,
}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        setSelectedCategory(item);
        handleCategory(item);
      }}>
      <Text
        style={[
          styles.categoryText,
          selectedCategory === item && {
            color: '#fff',
            backgroundColor: '#E96E6E',
          },
        ]}>
        {item}
      </Text>
    </TouchableOpacity>
  );
};

export default Category;

const styles = StyleSheet.create({
  categoryText: {
    fontSize: 16,
    fontWeight: '600',
    backgroundColor: '#DFDCDC',
    color: '#938F8F',
    borderRadius: 16,
    textAlign: 'center',
    marginHorizontal: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
