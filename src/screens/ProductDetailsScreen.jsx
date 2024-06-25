import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/Header';
import {useRoute} from '@react-navigation/native';

const ProductDetailsScreen = () => {
  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];
  const colorsArray = [
    '#91A1B0',
    '#B11D1D',
    '#1F44A3',
    '#9F632A',
    '#1D752B',
    '#000000',
  ];
  const route = useRoute();
  // console.log(route.params.item);
  const item = route.params.item
  const [selectedSize, setSelectedSize] = useState('L');
  const [selectedColor, setSelectedColor] = useState(null);
  return (
    <LinearGradient colors={['#FDF0F3', '#FFFBFC']} style={styles.container}>
      <ScrollView>
        <View style={styles.headerContainer}>
          <Header />
        </View>
        <Image
          source={{
            uri: item.image,
          }}
          style={styles.coverImage}
        />
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={[styles.title, styles.price]}>${item.price}</Text>
        </View>

        {/* size container */}
        <Text style={[styles.title, styles.sizeText]}>Size</Text>
        <View style={styles.sizeContainer}>
          {sizes.map(size => (
            <TouchableOpacity
              style={styles.sizeValueContainer}
              onPress={() => {
                setSelectedSize(size);
              }}
              key={size}>
              <Text
                style={[
                  styles.sizeValue,
                  selectedSize === size && {color: '#E55B5B'},
                ]}>
                {size}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* colors container */}
        <Text style={[styles.title, styles.colorText]}>Colors</Text>
        <View style={styles.colorsContainer}>
          {colorsArray.map(color => (
            <View
              style={[
                styles.circleBorder,
                selectedColor === color && {borderColor: color, borderWidth: 2},
              ]}
              key={color}>
              <TouchableOpacity
                style={[styles.innerCircle, {backgroundColor: color}]}
                onPress={() => setSelectedColor(color)}
              />
            </View>
          ))}
        </View>

        <TouchableOpacity title="Add to Cart" style={styles.button}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    // marginTop:20,
    padding: 20,
  },
  coverImage: {
    width: '100%',
    marginHorizontal:'auto',
    height: 420,
    borderRadius:50,
    aspectRatio:6/8,
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 20,
  },
  title: {
    fontSize: 20,
    color: '#444444',
    fontWeight: '500',
  },
  price: {
    color: '#4D4C4C',
    fontWeight: '600',
  },
  sizeText: {
    marginHorizontal: 20,
  },
  sizeContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  sizeValueContainer: {
    height: 36,
    width: 36,
    borderRadius: 18,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  sizeValue: {
    fontSize: 18,
    fontWeight: '600',
  },
  colorText: {
    marginHorizontal: 20,
    marginTop: 10,
  },
  colorsContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  circleBorder: {
    borderRadius: 48,
    height: 48,
    width: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  innerCircle: {
    width: 36,
    height: 36,
    borderRadius: 36,
    marginHorizontal: 10,
  },
  button: {
    backgroundColor: '#E96E6E',
    margin: 20,
    padding: 20,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
  },
});
