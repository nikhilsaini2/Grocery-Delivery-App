import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';

import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from '../features/cartSlice';
import { CartProps } from '../types';

const CartProduct = ({ id, name, price, quantity, image }: CartProps) => {
  const dispatch = useDispatch();
  const handleIncrement = () => {
    if (quantity <= 9) {
      dispatch(incrementQuantity(id));
    }
  };

  const handleDecrement = () => {
    if (quantity === 1) {
      dispatch(removeFromCart(id));
    } else {
      dispatch(decrementQuantity(id));
    }
  };
  return (
    <View style={styles.productContainer}>
      <View style={styles.productCard}>
        <Image source={{ uri: image }} style={styles.productImage} />
        <View style={styles.productDetails}>
          <Text style={styles.productName}>{name}</Text>
          <Text style={styles.productQuantity}>Qty: {quantity}</Text>
        </View>
        <View style={styles.PriceDetails}>
          <Text style={styles.priceText}>₹{price * quantity}</Text>
          <View style={styles.quantity}>
            <TouchableOpacity
              onPress={() => handleDecrement()}
              style={styles.minusButton}
            >
              <Text>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantityText}>{quantity}</Text>
            <TouchableOpacity
              onPress={() => handleIncrement()}
              disabled={quantity === 10}
              style={
                quantity === 10
                  ? { ...styles.plusButton, opacity: 0.5 }
                  : styles.plusButton
              }
            >
              <Text>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartProduct;

const styles = StyleSheet.create({
  productContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 7,
    marginHorizontal: 16,
  },
  productCard: {
    width: '100%',
    marginTop: 8,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingVertical: 14,
    paddingHorizontal: 14,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 12,
  },
  productImage: {
    width: 59,
    height: 59,
    resizeMode: 'contain',
  },
  productDetails: {
    marginLeft: 22,
    maxWidth: '50%',
  },
  productName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },
  productQuantity: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6B7280',
    paddingTop: 8,
  },
  PriceDetails: {
    marginLeft: 'auto',
    alignItems: 'flex-end',
  },
  priceText: {
    marginRight: 10,
    fontSize: 20,
    fontWeight: '600',
    color: '#111827',
  },
  quantity: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  minusButton: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#E5E7EB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusButton: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#E5E7EB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantityText: {
    marginHorizontal: 12,
    fontSize: 18,
    fontWeight: '500',
    color: '#111827',
  },
});
