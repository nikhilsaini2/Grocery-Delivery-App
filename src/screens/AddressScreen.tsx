import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';

import { addAddress, selectAddress } from '../features/addressSlice';

const generateId = () =>
  Date.now().toString() + Math.random().toString(36).substring(2, 9);

const AddressScreen = () => {
  const navigation = useNavigation<any>();
  const dispatch = useDispatch();
  const addresses = useSelector((state: any) => state.address.addresses);

  const [showForm, setShowForm] = useState(false);
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [stateName, setStateName] = useState('');
  const [pincode, setPincode] = useState('');
  const [phone, setPhone] = useState('');

  const handleSaveAddress = () => {
    if (!street || !city || !stateName || !pincode || !phone) {
      alert('Please fill in all the fields');
      return;
    }

    const newAddress = {
      id: generateId(),
      street,
      city,
      state: stateName,
      pincode,
      phone,
    };

    dispatch(addAddress(newAddress));
    dispatch(selectAddress(newAddress));

    setShowForm(false);
    navigation.goBack();
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#D3D4D6' }}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={28} color="#111827" />
        </TouchableOpacity>
        <Text style={styles.title}>Select Address</Text>
      </View>

      <TouchableOpacity
        style={styles.addAddressContainer}
        onPress={() => setShowForm(true)}
      >
        <Text style={styles.addText}>Add Address</Text>
        <Ionicons name="add" size={24} color="#111827" />
      </TouchableOpacity>

      {showForm && (
        <View style={styles.form}>
          <TextInput
            placeholder="Street"
            style={styles.input}
            value={street}
            onChangeText={setStreet}
          />
          <TextInput
            placeholder="City"
            style={styles.input}
            value={city}
            onChangeText={setCity}
          />
          <TextInput
            placeholder="State"
            style={styles.input}
            value={stateName}
            onChangeText={setStateName}
          />
          <TextInput
            placeholder="Pincode"
            style={styles.input}
            value={pincode}
            onChangeText={setPincode}
            keyboardType="number-pad"
          />
          <TextInput
            placeholder="Phone"
            style={styles.input}
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
          />

          <TouchableOpacity
            style={styles.saveButton}
            onPress={handleSaveAddress}
          >
            <Text style={styles.saveText}>Save Address</Text>
          </TouchableOpacity>
        </View>
      )}

      <FlatList
        data={addresses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.addressCard}
            onPress={() => {
              dispatch(selectAddress(item));
              navigation.goBack();
            }}
          >
            <Text style={styles.cardText}>
              {item.street}, {item.city}
            </Text>
            <Text style={styles.cardText}>
              {item.state} - {item.pincode}
            </Text>
            <Text style={styles.cardText}>📞 {item.phone}</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default AddressScreen;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
  },
  backButton: {
    position: 'absolute',
    left: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
  },
  addAddressContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    margin: 16,
    padding: 14,
    borderRadius: 12,
  },
  addText: {
    fontSize: 16,
    fontWeight: '600',
  },
  form: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 12,
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 12,
    paddingVertical: 6,
  },
  saveButton: {
    backgroundColor: '#F78C1B',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  saveText: {
    color: '#fff',
    fontWeight: '700',
  },
  addressCard: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 14,
    borderRadius: 12,
  },
  cardText: {
    fontSize: 14,
  },
});
