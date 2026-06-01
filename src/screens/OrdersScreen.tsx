import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';

import OrderProduct from '../components/OrderProduct';

const OrdersScreen = () => {
  const navigation = useNavigation<any>();
  const Orders = useSelector((state: any) => state.order.orders || []);
  const nonEmptyOrders = Orders.filter(
    (o: any) => Array.isArray(o.items) && o.items.length > 0,
  );
  const hasOrders = nonEmptyOrders.length > 0;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#D3D4D6' }}>
      <View style={{ flex: 1, backgroundColor: '#D3D4D6' }}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.popToTop()}
            style={styles.iconButton}
          >
            <Ionicons name="arrow-back" size={24} color="#111827" />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Orders</Text>

          <View style={{ width: 40 }} />
        </View>

        {hasOrders ? (
          <FlatList
            data={Orders}
            keyExtractor={() => (Math.random() * 10000).toString()}
            renderItem={({ item: order }) => {
              const items = order.items || [];
              return (
                <View style={{ marginBottom: 16 }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Text style={{ marginLeft: 16, fontWeight: '600' }}>
                      Order id: #{order.id}
                    </Text>
                    <Text style={{ marginHorizontal: 16, fontWeight: '600' }}>
                      Date: {new Date(order.createdAt).toLocaleDateString()}
                    </Text>
                  </View>

                  {items.map((p: any) => (
                    <OrderProduct
                      key={p.id}
                      id={p.id}
                      name={p.name}
                      price={p.price}
                      quantity={p.quantity}
                      image={p.image}
                    />
                  ))}
                </View>
              );
            }}
          />
        ) : (
          <View style={styles.noOrder}>
            <Text style={styles.noOrderText}> No orders yet!</Text>
            <TouchableOpacity
              style={styles.startShopping}
              onPress={() => navigation.popToTop()}
            >
              <Text style={styles.startShoppingText}>Start shopping!</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default OrdersScreen;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 20,
    paddingBottom: 6,
    marginBottom: 16,
  },

  iconButton: {
    width: 40,
  },

  headerTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#111827',
  },

  backButton: {
    position: 'absolute',
    left: 16,
    padding: 8,
  },
  profileHeader: {
    marginLeft: 50,
    fontSize: 28,
    fontWeight: '500',
    color: '#000',
    marginHorizontal: 20,
  },

  noOrder: {
    flex: 1,
    marginTop: 270,
    alignItems: 'center',
  },
  noOrderText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#6B7280',
  },
  startShopping: {
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: '#F78C1B',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  startShoppingText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});
