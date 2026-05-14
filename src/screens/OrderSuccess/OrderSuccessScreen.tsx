import { Ionicons } from '@expo/vector-icons';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';
import { RootStackParamList, OrderItem } from '../../types';

type Props = NativeStackScreenProps<RootStackParamList, 'OrderSuccess'>;

const OrderSuccessScreen = ({ route }: Props) => {
  const navigation = useNavigation<any>();
  const { orderId, orderDate, items, totalAmount, paymentMethod } =
    route.params;

  const handleGoHome = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      }),
    );
  };

  const handleViewOrders = () => {
    navigation.popToTop();
    navigation.navigate('Orders' as never);
  };

  const renderItem = ({ item }: { item: OrderItem }) => (
    <View style={styles.itemRow}>
      <Text style={styles.itemTitle} numberOfLines={1}>
        {item.title}
      </Text>
      <Text style={styles.itemMeta}>
        {item.quantity} × ₹{Math.ceil(item.price * 90.87)}
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.iconContainer}>
        <Ionicons name="checkmark-circle" size={90} color="#2ECF71" />
      </View>

      <Text style={styles.successTitle}>Order Placed Successfully!</Text>
      <Text style={styles.successSubtitle} />

      <View style={styles.card}>
        <View style={styles.rowBetween}>
          <Text style={styles.label}>Order ID</Text>
          <Text style={styles.value}>{orderId}</Text>
        </View>

        <View style={styles.rowBetween}>
          <Text style={styles.label}>Date</Text>
          <Text style={styles.value}>{orderDate}</Text>
        </View>

        <View style={styles.rowBetween}>
          <Text style={styles.label}>Payment</Text>
          <Text style={styles.value}>{paymentMethod}</Text>
        </View>

        <View style={styles.divider} />
        <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
          <Text style={styles.sectionTitle}>Items: </Text>
          <Text style={styles.sectionTitle}>{items.length}</Text>
        </View>

        <FlatList
          data={items}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          scrollEnabled={false}
        />

        <View style={styles.divider} />

        <View style={styles.rowBetween}>
          <Text style={styles.totalLabel}>Total:</Text>
          <Text style={styles.totalAmount}>
            ₹{Math.ceil(totalAmount * 90.87)}
          </Text>
        </View>
      </View>

      <TouchableOpacity style={styles.primaryButton} onPress={handleViewOrders}>
        <Text style={styles.primaryButtonText}>View Orders</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.secondaryButton} onPress={handleGoHome}>
        <Text style={styles.secondaryButtonText}>Back to Home</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default OrderSuccessScreen;
