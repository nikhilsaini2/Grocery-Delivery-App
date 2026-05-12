import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector, useDispatch } from 'react-redux';

import { styles } from './styles';
import { clearCart } from '../../features/cartSlice';
import { addOrder } from '../../features/ordersSlice';

const PayScreen = () => {
  const navigation = useNavigation<any>();
  const dispatch = useDispatch();

  const cartItems = useSelector((state: any) => state.cart.items);
  const selectedAddress = useSelector(
    (state: any) => state.address.selectedAddress,
  );

  const [selectedMethod, setSelectedMethod] = useState('UPI');

  const subtotal = cartItems.reduce(
    (sum: number, item: any) => sum + item.price * item.quantity,
    0,
  );

  const deliveryFee = subtotal > 0 ? 10 : 0;
  const tax = subtotal * 0.05;
  const total = subtotal + deliveryFee + tax;

  const formatPrice = (amount: number) =>
    `₹${Math.ceil(amount * 90.87).toLocaleString()}`;

  const handlePayment = () => {
    if (!selectedAddress) {
      Alert.alert('Address Required', 'Please select delivery address');
      return;
    }

    if (cartItems.length === 0) {
      Alert.alert('Cart Empty', 'Add items before checkout');
      return;
    }

    const newOrder = {
      id: `ORD-${Date.now()}`,
      items: cartItems,
      total,
      paymentMethod: selectedMethod,
      address: selectedAddress,
      createdAt: new Date().toISOString(),
    };

    dispatch(addOrder(newOrder));
    dispatch(clearCart());

    navigation.popToTop();
    navigation.navigate('OrderSuccess', {
      orderId: newOrder.id,
      orderDate: new Date().toLocaleDateString(),
      items: cartItems,
      totalAmount: total,
      paymentMethod: selectedMethod,
    });
  };

  const PaymentOption = ({ title, icon }: { title: string; icon: string }) => (
    <TouchableOpacity
      style={styles.paymentOption}
      onPress={() => setSelectedMethod(title)}
    >
      <View style={styles.paymentLeft}>
        <Ionicons name={icon as any} size={22} color="#F78C1B" />
        <Text style={styles.paymentText}>{title}</Text>
      </View>

      <View
        style={[
          styles.radioOuter,
          selectedMethod === title && styles.radioOuterActive,
        ]}
      >
        {selectedMethod === title && <View style={styles.radioInner} />}
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#111827" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Checkout</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>DELIVERY ADDRESS</Text>
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
            <Text style={styles.addressMain}>No address selected</Text>
          )}

          <TouchableOpacity onPress={() => navigation.navigate('Address')}>
            <Text style={styles.changeText}>Change Address</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>ORDER SUMMARY</Text>

          <View style={styles.row}>
            <Text style={styles.rowText}>Subtotal</Text>
            <Text style={styles.rowText}>{formatPrice(subtotal)}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.rowText}>Delivery Fee</Text>
            <Text style={styles.rowText}>
              {deliveryFee === 0 ? 'Free' : formatPrice(deliveryFee)}
            </Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.rowText}>Tax (5%)</Text>
            <Text style={styles.rowText}>{formatPrice(tax)}</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.row}>
            <Text style={styles.totalText}>Total Amount</Text>
            <Text style={styles.totalText}>{formatPrice(total)}</Text>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>PAYMENT METHOD</Text>

          <PaymentOption title="UPI" icon="phone-portrait-outline" />
          <PaymentOption title="Credit / Debit Card" icon="card-outline" />
          <PaymentOption title="Cash on Delivery" icon="cash-outline" />
        </View>

        <View style={{ height: 120 }} />
      </ScrollView>

      <View style={styles.payBar}>
        <View>
          <Text style={styles.payLabel}>Payable</Text>
          <Text style={styles.payAmount}>{formatPrice(total)}</Text>
        </View>

        <TouchableOpacity
          style={[styles.payButton, !selectedAddress && { opacity: 0.6 }]}
          disabled={!selectedAddress}
          onPress={handlePayment}
        >
          <Text style={styles.payButtonText}>Pay Now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PayScreen;

// Credit card validators