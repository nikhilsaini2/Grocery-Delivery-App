import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from '../../features/cartSlice';
import { Props } from '../../types';

export default function ProductCard({ product }: Props) {
  const navigation = useNavigation<any>();
  const dispatch = useDispatch();
  const cartItems = useSelector((state: any) => state.cart.items) || [];

  const cartItem = cartItems.find((item: any) => item.id === product.id);
  const isInCart = !!cartItem;
  const quantity = cartItem?.quantity || 0;

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity: 1 }));
  };

  const handleIncrement = () => {
    if (quantity <= 9) {
      dispatch(incrementQuantity(product.id));
    }
  };

  const handleDecrement = () => {
    if (quantity === 1) {
      dispatch(removeFromCart(product.id));
    } else {
      dispatch(decrementQuantity(product.id));
    }
  };

  const iconName = isInCart ? 'cart' : 'cart-outline';

  return (
    <View style={styles.card}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ProductDetails', { product });
        }}
      >
        <Image source={{ uri: product.image }} style={styles.image} />
        <Text style={styles.title} numberOfLines={1}>
          {product.name}
        </Text>
        <Text style={styles.brand} numberOfLines={1}>
          {product.brand}
        </Text>
        <View style={styles.row}>
          <Text style={styles.price}>₹{Math.ceil(product.price * 90.87)}</Text>
          <Text style={styles.rating}>{product.rating} / 5 </Text>
        </View>
      </TouchableOpacity>
      {isInCart ? (
        <View style={styles.quantity}>
          <TouchableOpacity
            onPress={handleDecrement}
            style={styles.minusButton}
          >
            <Text style={styles.minusText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{quantity}</Text>
          <TouchableOpacity
            onPress={handleIncrement}
            disabled={quantity == 10}
            style={
              quantity == 10
                ? { ...styles.plusButton, opacity: 0.5 }
                : styles.plusButton
            }
          >
            <Text style={styles.plusText}>+</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <Pressable onPress={handleAddToCart}>
          <LinearGradient colors={['#F78C1B', '#F78C1B']} style={styles.add}>
            <Text style={styles.addText}>Add</Text>
            <Ionicons name={iconName} size={18} color="#fff" />
          </LinearGradient>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 14,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    // marginTop: 8,
    margin: 2,
  },
  like: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#F9FAFB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 110,
    borderRadius: 16,
    resizeMode: 'contain',
    backgroundColor: '#F3F4F6',
  },
  title: {
    marginTop: 12,
    fontSize: 14,
    fontWeight: '700',
    color: '#0F172A',
  },
  brand: {
    fontSize: 12,
    color: '#64748B',
    marginTop: 2,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  price: {
    fontSize: 16,
    fontWeight: '800',
    color: '#0F172A',
  },
  calorieBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: '#FFF7ED',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  calorieText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#F97316',
  },
  add: {
    flexDirection: 'row',
    marginTop: 12,
    height: 38,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantity: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
    paddingHorizontal: 2,
  },
  minusButton: {
    width: '40%',
    height: 38,
    borderRadius: 14,
    backgroundColor: '#F78C1B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  minusText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 22,
  },
  plusButton: {
    width: '40%',
    height: 38,
    borderRadius: 14,
    backgroundColor: '#F78C1B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 22,
  },
  quantityText: {
    marginHorizontal: 12,
    fontSize: 22,
    fontWeight: '500',
    color: '#111827',
  },
  addText: {
    color: '#fff',
    fontWeight: '700',
    marginRight: 6,
  },

  rating: {
    fontSize: 12,
    fontWeight: '600',
    color: '#555',
  },
});
