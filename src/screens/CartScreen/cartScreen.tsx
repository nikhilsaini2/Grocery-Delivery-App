import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';

import { styles } from './styles';
import CartProduct from '../../components/cartProduct';

const CartScreen = () => {
  const navigation = useNavigation<any>();

  const cartItems = useSelector((state: any) => state.cart.items);
  const selectedAddress = useSelector(
    (state: any) => state.address.selectedAddress,
  );

  const subtotal = cartItems.reduce(
    (sum: number, item: any) => sum + item.price * item.quantity,
    0,
  );

  const deliveryFee = subtotal > 0 ? 10 : 0;
  const tax = subtotal * 0.05;
  const total = subtotal + deliveryFee + tax;

  const formatPrice = (amount: number) =>
    `₹${Math.ceil(amount * 90.87).toLocaleString()}`;

  if (cartItems.length === 0) {
    return (
      <SafeAreaView style={styles.emptyContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={28} color="#000" />
        </TouchableOpacity>
        <Ionicons name="cart-outline" size={80} color="#9CA3AF" />
        <Text style={styles.emptyTitle}>Your Cart is Empty</Text>
        <Text style={styles.emptySubtitle}>
          Looks like you haven’t added anything yet.
        </Text>
        <TouchableOpacity
          style={styles.shopButton}
          onPress={() => navigation.popToTop()}
        >
          <Text style={styles.shopButtonText}>Start Shopping</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={26} color="#111827" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Cart</Text>
        <View style={{ width: 26 }} />
      </View>

      <FlatList
        bounces={false}
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 200 }}
        renderItem={({ item }) => (
          <CartProduct
            id={item.id}
            name={item.name}
            price={Math.ceil(item.price * 90.87)}
            quantity={item.quantity}
            image={item.image}
          />
        )}
        ListHeaderComponent={
          <>
            <View style={styles.deliveryBadge}>
              <Text style={styles.deliveryText}>Delivery in 10–15 mins</Text>
            </View>

            <TouchableOpacity
              style={styles.addressCard}
              onPress={() => navigation.navigate('Address')}
            >
              <View>
                <Text style={styles.sectionLabel}>DELIVERY ADDRESS</Text>
                {selectedAddress ? (
                  <>
                    <Text style={styles.addressMain}>
                      {selectedAddress.street}, {selectedAddress.city}
                    </Text>
                    <Text style={styles.addressSub}>
                      {selectedAddress.state} - {selectedAddress.pincode}
                    </Text>
                  </>
                ) : (
                  <Text style={styles.addressMain}>
                    Select Delivery Address
                  </Text>
                )}
              </View>
              <Ionicons name="chevron-forward" size={22} color="#6B7280" />
            </TouchableOpacity>

            <Text style={styles.itemsCount}>{cartItems.length} Items</Text>
          </>
        }
      />

      <View style={styles.checkoutBar}>
        <View>
          <Text style={styles.payLabel}>Total Payable</Text>
          <Text style={styles.payAmount}>{formatPrice(total)}</Text>
        </View>
        <TouchableOpacity
          style={styles.payButton}
          onPress={() => navigation.navigate('Payment')}
        >
          <Text style={styles.payButtonText}>Go to Checkout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CartScreen;
