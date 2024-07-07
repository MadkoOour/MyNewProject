import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import React from 'react';

const imageURL =
  'https://cdn-prd-strapi.debutify.com/8_Kbs_Bz1y_Oh106o_Hx_Jw7_TKS_Kfcdoci_Ulfow4_VAB_3_O_c8f01d06ea.jpg';

const CartCard = () => {
  return (
    <View style={styles.container}>
      <Image source={{uri: imageURL}} style={styles.itemImage} />
      <View style={styles.cardContent}>
        <Text style={styles.title}>Jacket Jeans</Text>
        <Text style={styles.price}>$37.9</Text>
        <View style={styles.specificSelections}>
          <View style={styles.specificColor} />
          <View style={styles.sizeContainer} >
            <Text style={styles.specificSize}>L</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity>
        <FontAwesome6 name={'trash'} color={'#F68CB5'} size={25} />
      </TouchableOpacity>
    </View>
  );
};

export default CartCard;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  itemImage: {
    // width:250,
    height: 125,
    aspectRatio: 4 / 6,
    borderRadius: 15,
  },
  cardContent: {
    flex:1,
    flexDirection: 'column',
    marginHorizontal:20,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    color: '#444444',
    marginBottom:15,
  },
  price:{
    fontSize: 18,
    fontWeight: '500',
    color: '#797979',
    marginBottom:15,
  },
  specificSelections:{
    flexDirection:'row',
    alignItems:'center',
  },
  specificColor:{
    backgroundColor:'red',
    width:32,
    height:32,
    borderRadius:20,
    marginRight:20,

  },
  sizeContainer:{
    height:32,
    width:32,
    borderRadius:20,
    backgroundColor:"#ffffff",
    justifyContent:"center",
    alignItems:"center",
  },
  specificSize:{
    color:"#444444",
    fontWeight:'500',
    fontSize:18,
  }
});
