import {FlatList, StyleSheet, Text, TextInput, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import React, {useState} from 'react';
import Header from '../components/Header';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Category from '../components/Category';
import ProductCard from '../components/ProductCard';
import data from '../data/data.json';

const categories = ['Trending Now', 'All', 'New', 'Men', 'Women'];
export default function HomeScreen() {
  const [selectedCategory, setSelectedCategory] = useState('Trending Now');
  const [isLiked, setIsLiked] = useState(false);
  const [products, setProducts] = useState(data.products);
  const handleLiked = item => {
    // console.log("item num "+item.id+" clicked!");
    const favProducts = products.map(product => {
      if (item.id === product.id) {
        return {
          ...product,
          isLiked: !product.isLiked,
        };
      }
      return product;
    });
    setProducts(favProducts)
  };
  return (
    <LinearGradient colors={['#FDF0F3', '#FFFBFC']} style={styles.container}>
      {/* header */}
      <Header />

      {/* product List */}
      <FlatList
        data={products}
        renderItem={({item, index}) => (
          <ProductCard item={item} handleLiked={handleLiked} />
        )}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 50,
        }}
        ListHeaderComponent={
          <>
            <Text style={styles.headerText}>Match Your Style</Text>

            {/* input container */}
            <View style={styles.inputContainer}>
              <View style={styles.iconContainer}>
                <Fontisto name={'search'} size={26} color={'#c0c0c0'} />
              </View>
              <TextInput style={styles.textInput} placeholder="Search" />
            </View>

            {/* category section */}
            <FlatList
              data={categories}
              renderItem={({item}) => (
                <Category
                  item={item}
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                />
              )}
              keyExtractor={item => item}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </>
        }
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 20,
    // margin:20,
    backgroundColor: '#FDF0F3',
  },
  headerText: {
    fontSize: 28,
    color: '#000',
    marginTop: 25,
  },
  inputContainer: {
    backgroundColor: 'white',
    height: 48,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  iconContainer: {
    marginHorizontal: 15,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
  },
});
