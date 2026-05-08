import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3D4D6',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111827',
  },

  card: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginTop: 16,
    padding: 16,
    borderRadius: 14,
    elevation: 2,
  },

  sectionTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: '#6B7280',
    marginBottom: 10,
  },

  addressMain: {
    fontSize: 15,
    fontWeight: '600',
    color: '#111827',
  },

  addressSub: {
    fontSize: 13,
    color: '#6B7280',
    marginTop: 4,
  },

  changeText: {
    marginTop: 10,
    color: '#F78C1B',
    fontWeight: '600',
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 6,
  },

  rowText: {
    fontSize: 14,
    color: '#374151',
  },

  totalText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
  },

  divider: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginVertical: 12,
  },

  paymentOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },

  paymentLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  paymentText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#111827',
  },

  radioOuter: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#D1D5DB',
    alignItems: 'center',
    justifyContent: 'center',
  },

  radioOuterActive: {
    borderColor: '#F78C1B',
  },

  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#F78C1B',
  },

  securityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    gap: 6,
  },

  securityText: {
    fontSize: 12,
    color: '#6B7280',
  },

  payBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 10,
  },

  payLabel: {
    fontSize: 12,
    color: '#6B7280',
  },

  payAmount: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
  },

  payButton: {
    backgroundColor: '#F78C1B',
    paddingHorizontal: 26,
    paddingVertical: 12,
    borderRadius: 30,
  },

  payButtonText: {
    color: '#fff',
    fontWeight: '700',
  },
});
