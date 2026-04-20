import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  FlatList,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';

import styles from './styles';
import {
  getProductsByCategory,
  FOOD_CATEGORIES,
  searchMap,
} from '../api/dummyjson';
import BannerCarousel from '../components/BannerCarousel';
import CategoryChip from '../components/home/CategoryChip';
import ProductCard from '../components/home/ProductCard';
import SectionHeader from '../components/home/SectionHeader';
import { addOrder } from '../features/ordersSlice';
import { Product } from '../types';

const categories = FOOD_CATEGORIES;

const DATA = [
  { id: '1', image: require('../../assets/banners/banner1.png') },
  { id: '2', image: require('../../assets/banners/banner2.png') },
  { id: '3', image: require('../../assets/banners/banner3.png') },
  { id: '4', image: require('../../assets/banners/banner4.png') },
];

const HomeScreen = () => {
  const navigation = useNavigation<any>();
  const dispatch = useDispatch();
  const currentUser = useSelector((state: any) => state.auth.currentUser);
  const cartCount = useSelector((state: any) => state.cart.items.length);
  const [error, setError] = useState<string | null>(null);

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const [topPicks, setTopPicks] = useState<any[]>([]);
  const [topLoading, setTopLoading] = useState(false);
  const [categoryLoading, setCategoryLoading] = useState(false);
  const [categoryName, setCategoryName] = useState<string | null>();
  const [categoryPicks, setCategoryPicks] = useState<any[]>([]);

  const [query, setQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [searchLoading, setSearchLoading] = useState(false);

  const order = useSelector((state: any) => state.order.orders);

  useEffect(() => {
    fetchTopPicks();
  }, []);

  const fetchTopPicks = async () => {
    try {
      setTopLoading(true);
      setError(null);
      const categories = ['fragrances', 'furniture', 'beauty'];

      const results = await Promise.all(
        categories.map((cat) => getProductsByCategory(cat, 1, 4)),
      );
      const merged = results.flat();
      const uniqueMap = new Map<string, Product>();

      for (const item of merged) {
        if (!uniqueMap.has(item.id)) {
          uniqueMap.set(item.id, item);
        }
      }
      const uniqueProducts = Array.from(uniqueMap.values());
      setTopPicks(uniqueProducts.slice(0, 12));
    } catch (e: any) {
      console.log('Top Picks Error:', e);
      setError(e?.message || 'Failed to load top picks');
    } finally {
      setTopLoading(false);
    }
  };

  const handleSearch = async () => {
    if (!query) return;
    try {
      setSearchLoading(true);
      setError(null);

      const normalized = query.toLowerCase();
      setQuery('');

      const matchedCategory = Object.keys(searchMap).find((category) =>
        searchMap[category].some((keyword) => normalized.includes(keyword)),
      );

      if (!matchedCategory) {
        throw new Error('No matching category found');
      }

      const result = await getProductsByCategory(matchedCategory, 1, 4);
      setSearchResults(result);
    } catch (e: any) {
      alert(e?.message || 'Failed to search');
    } finally {
      setSearchLoading(false);
    }
  };

  const fetchProductByCategory = async (category: string) => {
    try {
      setCategoryLoading(true);
      setError(null);
      const result = await getProductsByCategory(category, 1, 12);
      setCategoryPicks(result);
    } catch (e: any) {
      console.log('Category Picks Error:', e);
      setError(e?.message || 'Failed to load category picks');
    } finally {
      setCategoryLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <StatusBar style="dark" />

      <View style={styles.screen}>
        <ScrollView
          bounces={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <View style={styles.header}>
            <View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={styles.headerTitle}>
                  Hello, {currentUser?.name || 'Guest'}
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Orders')}>
                  <Ionicons
                    style={{ position: 'absolute', left: 45, top: -10 }}
                    name="receipt-outline"
                    size={35}
                    color="#111827"
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.subtitleRow}>
                <Ionicons name="location-outline" size={14} color="#000" />
                <Text style={styles.subtitleText}>Delivering to Home</Text>
              </View>
            </View>

            <View style={styles.headerActions}>
              <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <Image
                  source={require('../../assets/avatar.png')}
                  style={styles.avatar}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.searchContainer}>
            <View style={styles.searchBar}>
              <Ionicons name="search-outline" size={20} color="#6B7280" />
              <TextInput
                placeholder="Search for products"
                placeholderTextColor="#9CA3AF"
                value={query}
                onChangeText={(text) => setQuery(text)}
                onEndEditing={handleSearch}
                autoCorrect={false}
                autoCapitalize="none"
                returnKeyType="search"
                onSubmitEditing={() => {
                  Keyboard.dismiss();
                }}
                style={styles.searchInput}
              />
            </View>
          </View>

          {searchResults.length > 0 &&
            (searchLoading ? (
              <View style={{ flex: 1 }}>
                <ActivityIndicator size="large" color="#10B981" />
              </View>
            ) : (
              <View style={{ flex: 1 }}>
                <SectionHeader title="Search Results" />
                <View style={styles.searchResultsContainer}>
                  <TouchableOpacity
                    onPress={() => {
                      const resetSearch = async () => {
                        setQuery('');
                        setSearchResults([]);
                      };
                      resetSearch();
                    }}
                  >
                    <Text
                      style={{
                        color: '#000',
                        fontSize: 16,
                        alignSelf: 'flex-end',
                        paddingRight: 15,
                        paddingTop: 10,
                      }}
                    >
                      Clear
                    </Text>
                  </TouchableOpacity>
                  <FlatList
                    data={searchResults}
                    numColumns={2}
                    scrollEnabled={false}
                    keyExtractor={(item) => item.id}
                    columnWrapperStyle={{
                      justifyContent: 'space-between',
                    }}
                    contentContainerStyle={styles.productsList}
                    renderItem={({ item }) => (
                      <View style={{ flex: 1 }}>
                        <ProductCard product={item} />
                      </View>
                    )}
                  />
                </View>
              </View>
            ))}

          <View style={styles.bannerContainer}>
            <BannerCarousel data={DATA} />
          </View>

          <SectionHeader title="Categories" onPressAction={() => {}} />

          <FlatList
            data={categories}
            numColumns={4}
            scrollEnabled={false}
            keyExtractor={(item) => item.id}
            columnWrapperStyle={styles.row}
            contentContainerStyle={styles.categoriesList}
            renderItem={({ item }) => (
              <View style={styles.itemContainer}>
                <CategoryChip
                  label={item.name}
                  icon={item.image}
                  selected={selectedCategory === item.id}
                  onPress={() => {
                    setSelectedCategory(
                      selectedCategory === item.id ? null : item.id,
                    );
                    setCategoryName(item.name);
                    fetchProductByCategory(item.id);
                  }}
                />
              </View>
            )}
          />

          {selectedCategory && categoryName && (
            <View style={{ flex: 1 }}>
              <SectionHeader title={categoryName} onPressAction={() => {}} />

              {categoryLoading ? (
                <View style={{ alignItems: 'center', marginTop: 16 }}>
                  <ActivityIndicator size="large" color="#F78C1B" />
                </View>
              ) : (
                <FlatList
                  data={categoryPicks}
                  numColumns={2}
                  scrollEnabled={false}
                  keyExtractor={(item) => item.id}
                  columnWrapperStyle={{
                    justifyContent: 'space-between',
                  }}
                  contentContainerStyle={styles.productsList}
                  renderItem={({ item }) => (
                    <View style={{ flex: 1 }}>
                      <ProductCard product={item} />
                    </View>
                  )}
                />
              )}
            </View>
          )}

          <SectionHeader title="Top Picks on Zesto" onPressAction={() => {}} />

          {topLoading ? (
            <View style={{ alignItems: 'center', marginTop: 16 }}>
              <ActivityIndicator size="large" color="#F78C1B" />
            </View>
          ) : (
            <FlatList
              data={topPicks}
              numColumns={2}
              scrollEnabled={false}
              keyExtractor={(item) => item.id}
              columnWrapperStyle={{
                justifyContent: 'space-between',
              }}
              contentContainerStyle={styles.productsList}
              renderItem={({ item }) => (
                <View style={{ flex: 1 }}>
                  <ProductCard product={item} />
                </View>
              )}
            />
          )}
        </ScrollView>
        <TouchableOpacity
          onPress={() => navigation.navigate('Cart')}
          // onPress={() => dispatch(addOrder(order))}

          style={styles.cartBadge}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles.cartBadgeCountText}>View Cart</Text>
            <Ionicons name="cart-outline" size={22} color="#fff" />
          </View>
          <View style={styles.cartBadgeCountContainer}>
            <Text style={styles.cartBadgeCount}>{cartCount}</Text>
            <Text style={styles.cartBadgeCountText}> items</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

// Load Top Picks
// Category Horizontal chips rendering
// Badge hooks
// Live search query logic