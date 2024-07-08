import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/Header';
import CartCard from '../components/CartCard';
import {useDispatch, useSelector} from 'react-redux';
import {reset_cart} from '../app/reducers/CartSlice';

const CartScreen = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  const calculateTotalAmount = () => {
    if (cart && cart.length > 0) {
      const total = cart
        .reduce((sum, prod) => sum + prod.amount * prod.price, 0)
        .toFixed(2);
      return parseFloat(total); // Convert to number
    }
    return 0;
  };

  const totalAmount = calculateTotalAmount();
  const shippingCost = 50;
  const grandTotal = totalAmount > 0 ? totalAmount + shippingCost : 0;

  return (
    <LinearGradient colors={['#FDF0F3', '#FFFBFC']} style={styles.container}>
      <View style={styles.headerContainer}>
        <Header isCart={true} />
      </View>
      <FlatList
        data={cart}
        renderItem={({item}) => <CartCard item={item} />}
        ListFooterComponent={
          <>
            <View style={styles.priceAndTitleContainer}>
              <View style={styles.priceContainer}>
                <Text style={styles.text}>Total :</Text>
                <Text style={[styles.text, styles.textPrice]}>
                  ${totalAmount.toFixed(2)}
                </Text>
              </View>
              <View style={styles.shippingContainer}>
                <Text style={styles.text}>Shipping :</Text>
                <Text style={[styles.text, styles.textPrice]}>
                  ${shippingCost.toFixed(2)}
                </Text>
              </View>
            </View>
            <View style={styles.divider} />
            <View style={styles.shippingContainer}>
              <Text style={styles.text}>Grand Total:</Text>
              <Text style={[styles.text, styles.textGrandPrice]}>
                ${grandTotal.toFixed(2)}
              </Text>
            </View>
          </>
        }
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 15}}
      />
      <View style={styles.actions}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Checkout</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            dispatch(reset_cart());
          }}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>
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
    width: '45%',
    marginHorizontal: 'auto',
    marginVertical: 20,
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
  actions: {
    flexDirection: 'row',
  },
});
