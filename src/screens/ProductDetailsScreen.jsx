import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Header from '../components/Header'

const ProductDetailsScreen = () => {
  return (
    <LinearGradient colors={['#FDF0F3', '#FFFBFC']} style={styles.container}>
      <View style={styles.headerContainer}>
        <Header />
      </View>
      <Image source={{uri:"https://res.cloudinary.com/dlc5c1ycl/image/upload/v1710567612/smf81ubnfjennk9qbjm4.png"}} style={styles.coverImage} />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Winter Coat</Text>
        <Text style={[styles.title,styles.price]}>$67.9</Text>
      </View>
      {/* size containerk */}
    </LinearGradient>

  )
}

export default ProductDetailsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer:{
    // marginTop:20,
    padding:20
  },
  coverImage:{
    width:'100%',
    height:420,
  },
  contentContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal:20,
    marginVertical:20
  },
  title:{
    fontSize:20,
    color:"#444444",
    fontWeight:"500"
  },
  price:{
    color:"#4D4C4C",
    fontWeight:"600"
  },
})