import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3D4D6',
    paddingHorizontal: 20,
  },
  iconContainer: {
    alignItems: 'center',
    marginTop: 30,
  },
  successTitle: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '700',
    marginTop: 10,
  },
  successSubtitle: {
    textAlign: 'center',
    fontSize: 14,
    color: '#6c757d',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    elevation: 3,
    marginBottom: 20,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  label: {
    fontSize: 14,
    color: '#6c757d',
  },
  value: {
    fontSize: 14,
    fontWeight: '600',
  },
  divider: {
    height: 1,
    backgroundColor: '#e9ecef',
    marginVertical: 10,
  },
  sectionTitle: {
    fontWeight: '600',
    marginBottom: 8,
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  itemTitle: {
    flex: 1,
    fontSize: 13,
  },
  itemMeta: {
    fontSize: 13,
    color: '#495057',
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: '700',
  },
  totalAmount: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2ecc71',
  },
  primaryButton: {
    backgroundColor: '#F78C1B',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 12,
  },
  primaryButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  secondaryButton: {
    borderWidth: 1,
    borderColor: '#000',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  secondaryButtonText: {
    fontWeight: '600',
    fontSize: 16,
  },
});
