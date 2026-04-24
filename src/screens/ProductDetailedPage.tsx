import { Ionicons } from '@expo/vector-icons';
import { useRoute, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';

import RatingStars from '../components/RatingStars';
import {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from '../features/cartSlice';

const ProductDetailedPage = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const { product } = route.params;

  const cartItems = useSelector((state: any) => state.cart.items) || [];
  const cartItem = cartItems.find((item: any) => item.id === product.id);
  const isInCart = !!cartItem;
  const quantity = cartItem?.quantity || 0;

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity: 1 }));
  };

  const handleIncrement = () => {
    dispatch(incrementQuantity(product.id));
  };

  const handleDecrement = () => {
    if (quantity === 1) {
      dispatch(removeFromCart(product.id));
    } else {
      dispatch(decrementQuantity(product.id));
    }
  };

  const priceInRupees = Math.ceil(product.price * 90.87);

  return (
    <SafeAreaView style={styles.safeArea}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={24} color="#111" />
      </TouchableOpacity>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Image source={{ uri: product.image }} style={styles.image} />

        <View style={styles.card}>
          <Text style={styles.title}>{product.name}</Text>

          <View style={styles.ratingRow}>
            <RatingStars rating={product.rating} />
            <Text style={styles.reviewText}>({product.reviews} reviews)</Text>
          </View>
          <Text style={styles.price}>₹ {priceInRupees}</Text>

          {product.brand && (
            <Text style={styles.brand}>
              Brand: <Text style={styles.brandValue}>{product.brand}</Text>
            </Text>
          )}

          <View style={styles.stockBadge}>
            <Text style={styles.stockText}>In Stock</Text>
          </View>

          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>

      <View style={styles.bottomContainer}>
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
              style={styles.plusButton}
            >
              <Text style={styles.plusText}>+</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('Cart')}
              style={{ ...styles.cartButton, backgroundColor: '#10B981' }}
            >
              <Ionicons name="cart" size={20} color="#fff" />
              <Text style={styles.cartButtonText}>View Cart</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity
            style={[
              styles.cartButton,
              isInCart && { backgroundColor: '#10B981' },
            ]}
            onPress={handleAddToCart}
            disabled={isInCart}
          >
            <Ionicons name="cart-outline" size={20} color="#fff" />
            <Text style={styles.cartButtonText}>Add to Cart</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

export default ProductDetailedPage;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#E4E6E9',
  },

  backButton: {
    position: 'absolute',
    top: 56,
    left: 16,
    zIndex: 10,
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 20,
    elevation: 4,
  },

  image: {
    width: '100%',
    height: 320,
    resizeMode: 'cover',
  },

  card: {
    backgroundColor: '#fff',
    marginTop: -30,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111',
  },

  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },

  reviewText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#6B7280',
  },

  price: {
    fontSize: 24,
    fontWeight: '700',
    color: '#F78C1B',
    marginTop: 10,
  },

  brand: {
    marginTop: 8,
    fontSize: 15,
    color: '#6B7280',
  },

  brandValue: {
    fontWeight: '600',
    color: '#111',
  },

  stockBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#10B981',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
    marginTop: 12,
  },

  stockText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '600',
  },

  sectionTitle: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: '600',
    color: '#111',
  },

  description: {
    marginTop: 6,
    fontSize: 15,
    lineHeight: 22,
    color: '#4B5563',
  },

  bottomContainer: {
    padding: 16,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#E5E7EB',
  },

  cartButton: {
    flexDirection: 'row',
    backgroundColor: '#F78C1B',
    paddingVertical: 14,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },

  cartButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },

  quantity: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 2,
  },
  minusButton: {
    width: '20%',
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
    width: '20%',
    height: 38,
    borderRadius: 14,
    backgroundColor: '#F78C1B',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '10%',
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
});

// Brand stock badge display