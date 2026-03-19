import { StyleSheet, Platform } from 'react-native';
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#D3D4D6' },
  screen: { flex: 1, position: 'relative' },
  scrollContent: { paddingBottom: 140 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 6,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#111827',
  },
  subtitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 2,
  },
  subtitleText: {
    fontSize: 13,
    color: '#6B7280',
    fontWeight: '500',
  },
  notificationPopup: {
    position: 'absolute',
    top: 50,
    right: 16,
    backgroundColor: '#000',
    padding: 16,
    borderRadius: 12,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    minWidth: 240,
  },

  overlay: {
    position: 'absolute',
    top: -10,
    right: 0,
    left: Platform.OS === 'web' ? -300 : -100,
    bottom: -200,
    zIndex: 1000,
  },

  notificationText: {
    color: '#fff',
    fontSize: 16,
  },

  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  dropdown: {
    position: 'absolute',
    zIndex: 1,
    top: 40,
    right: 10,
    backgroundColor: '#1E1E1E',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 8,
    width: 120,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },

  dropdownItem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    color: '#fff',
    fontSize: 16,
  },

  iconButton: {
    position: 'absolute',
    right: '110%',
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 2,
  },

  categoriesWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 16,
    marginTop: 8,
    marginBottom: 12,
    rowGap: 14,
    columnGap: 12,
  },

  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderColor: '#FFFFFF',
    borderWidth: 2,
  },
  searchContainer: {
    paddingHorizontal: 16,
    marginTop: 10,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#111827',
    paddingVertical: 0,
    paddingHorizontal: 10,
  },

  searchResultsContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    paddingBottom: 16,
  },
  searchResultsList: {
    justifyContent: 'space-between',
  },

  divider: {
    width: 1,
    height: 18,
    backgroundColor: '#E5E7EB',
  },
  filterButton: {
    width: 36,
    height: 36,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bannerContainer: {
    marginTop: 20,
  },

  cartBadgeCountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  cartBadgeCountText: {
    color: '#fff',
    fontSize: 18,
  },

  loadingRow: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  errorText: {
    paddingHorizontal: 16,
    color: '#EF4444',
    fontWeight: '700',
  },

  row: {
    justifyContent: 'space-between',
    marginBottom: 2.5,
  },

  itemContainer: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 6,
  },

  categoriesList: {
    paddingHorizontal: 8,
    marginBottom: -10,
  },
  productsList: {
    paddingHorizontal: 10,
    paddingBottom: 6,
  },
  cartBadge: {
    position: 'absolute',
    bottom: 40,
    right: '30%',
    minWidth: '40%',
    height: 58,
    borderRadius: 50,
    backgroundColor: '#F78C1B',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 6,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: '#111',
  },
  cartBadgeCount: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 16,
  },
});

export default styles;
