import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Address {
  id: string;
  street: string;
  city: string;
  state: string;
  pincode: string;
  phone: string;
}

interface AddressState {
  addresses: Address[];
  selectedAddress: Address | null;
}

const initialState: AddressState = {
  addresses: [],
  selectedAddress: null,
};

const addressSlice = createSlice({
  name: 'address',
  initialState,
  reducers: {
    addAddress: (state, action: PayloadAction<Address>) => {
      state.addresses.push(action.payload);
    },
    selectAddress: (state, action: PayloadAction<Address>) => {
      state.selectedAddress = action.payload;
    },
  },
});

export const { addAddress, selectAddress } = addressSlice.actions;
export default addressSlice.reducer;
