import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Category from '../components/Category';
import ProductCard from '../components/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, setProducts } from '../app/reducers/ProductsSlice';
import { fetchCategories } from '../app/reducers/CategoriesSlice';

export default function HomeScreen() {
  const dispatch = useDispatch();
  
  const products = useSelector(state => state.products);
  const categories = useSelector(state => state.categories);
  
  const [fetchedProducts, setFetchedProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Fetching data
  useEffect(() => {
    const fetchData = async () => {
      const productsAction = await dispatch(fetchProducts());
      setFetchedProducts(productsAction.payload);
      dispatch(fetchCategories());
    };

    fetchData();
  }, [dispatch]);

  const handleCategory = category => {
    setSelectedCategory(category);
    if (category === 'All') {
      dispatch(setProducts(fetchedProducts));
    } else {
      const filteredProducts = fetchedProducts.filter(prod => prod.category === category.toLowerCase());
      dispatch(setProducts(filteredProducts));
    }
  };

  const handleLiked = item => {
    const favProducts = products.map(product => {
      if (item.id === product.id) {
        return {
          ...product,
          isLiked: !product.isLiked,
        };
      }
      return product;
    });
    dispatch(setProducts(favProducts));
  };

  return (
    <LinearGradient colors={['#FDF0F3', '#FFFBFC']} style={styles.container}>
      <Header />
      <FlatList
        data={products}
        renderItem={({ item, index }) => (
          <ProductCard item={item} handleLiked={handleLiked} />
        )}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
        ListHeaderComponent={
          <>
            <Text style={styles.headerText}>Match Your Style</Text>
            <View style={styles.inputContainer}>
              <View style={styles.iconContainer}>
                <Fontisto name={'search'} size={26} color={'#c0c0c0'} />
              </View>
              <TextInput style={styles.textInput} placeholder="Search" />
            </View>
            <FlatList
              data={categories}
              renderItem={({ item }) => (
                <Category
                  item={item}
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                  handleCategory={handleCategory}
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
    padding: 20,
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
