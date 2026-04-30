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
    paddingHorizontal: 16,
    paddingVertical: 14,
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111827',
  },

  deliveryBadge: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    gap: 6,
    backgroundColor: '#F78C1B',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
  },

  deliveryText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '600',
  },

  addressCard: {
    backgroundColor: '#fff',
    margin: 16,
    padding: 16,
    borderRadius: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2,
  },

  sectionLabel: {
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 6,
    fontWeight: '600',
  },

  addressMain: {
    fontSize: 15,
    fontWeight: '600',
    color: '#111827',
  },

  addressSub: {
    fontSize: 13,
    color: '#6B7280',
    marginTop: 2,
  },

  itemsCount: {
    fontSize: 16,
    fontWeight: '600',
    marginHorizontal: 16,
    marginBottom: 10,
    color: '#111827',
  },

  summaryCard: {
    backgroundColor: '#fff',
    margin: 16,
    padding: 16,
    borderRadius: 14,
    elevation: 2,
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

  divider: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginVertical: 12,
  },

  totalText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
  },

  checkoutBar: {
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
    paddingHorizontal: 22,
    paddingVertical: 12,
    borderRadius: 30,
  },

  payButtonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 14,
  },

  emptyContainer: {
    flex: 1,
    backgroundColor: '#D3D4D6',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  emptyTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginTop: 16,
    color: '#111827',
  },

  emptySubtitle: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    marginTop: 6,
    marginBottom: 20,
  },

  shopButton: {
    backgroundColor: '#F78C1B',
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 30,
  },

  shopButtonText: {
    color: '#fff',
    fontWeight: '700',
  },

  backButton: {
    position: 'absolute',
    top: 70,
    left: 20,
    padding: 8,
  },
});
