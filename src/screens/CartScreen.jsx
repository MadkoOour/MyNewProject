import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/Header';
import CartCard from '../components/CartCard';

const CartScreen = () => {
  return (
    <LinearGradient colors={['#FDF0F3', '#FFFBFC']} style={styles.container}>
      <View style={styles.headerContainer}>
        <Header isCart={true} />
      </View>
      {/* <CartCard />
      <CartCard /> */}
      <FlatList
        data={[1, 2, 3, 4, 5]}
        renderItem={CartCard}
        ListFooterComponent={
          <>
            {/* price info */}
            <View style={styles.priceAndTitleContainer}>
              <View style={styles.priceContainer}>
                <Text style={styles.text}>Total :</Text>
                <Text style={[styles.text, styles.textPrice]}>$119.7</Text>
              </View>
              <View style={styles.shippingContainer}>
                <Text style={styles.text}>Shipping :</Text>
                <Text style={[styles.text, styles.textPrice]}>$0.0</Text>
              </View>
            </View>
            <View style={styles.divider} />
            <View style={styles.shippingContainer}>
              <Text style={styles.text}>Grand Total:</Text>
              <Text style={[styles.text, styles.textGrandPrice]}>$119.7</Text>
            </View>
          </>
        }
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom:15}}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Checkout</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  headerContainer: {
    marginBottom: 25,
  },
  priceAndTitleContainer: {
    marginTop: 20,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  shippingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: '500',
    color: '#757575',
  },
  textPrice: {
    fontWeight: '600',
    color: '#888888',
  },
  textGrandPrice: {
    fontWeight: '600',
    color: '#3C3C3C',
  },
  divider: {
    width: '95%',
    marginHorizontal: 'auto',
    height: 1,
    backgroundColor: '#C0C0C0',
    marginVertical: 10,
  },
  button: {
    width: '100%',
    marginHorizontal: 'auto',
    marginVertical:20,
    paddingVertical: 10,
    backgroundColor: '#E96E6E',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#FFF',
  },
});
