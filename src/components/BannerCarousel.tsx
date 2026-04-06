import React, { useState } from 'react';
import {
  FlatList,
  Image,
  ImageSourcePropType,
  StyleSheet,
  View,
  useWindowDimensions,
} from 'react-native';

export type BannerCarouselItem = {
  id: string;
  image: ImageSourcePropType;
};

type Props = {
  data: BannerCarouselItem[];
  height?: number;
  borderRadius?: number;
  horizontalPadding?: number;
  showDots?: boolean;
};

export default function BannerCarousel({
  data,
  height = 190,
  borderRadius = 20,
  horizontalPadding = 16,
  showDots = true,
}: Props) {
  const { width } = useWindowDimensions();
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!data?.length) return null;

  const onScrollEnd = (e: any) => {
    const index = Math.round(e.nativeEvent.contentOffset.x / width);
    setCurrentIndex(index);
  };

  return (
    <View style={{ height }}>
      <FlatList
        data={data}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        onMomentumScrollEnd={onScrollEnd}
        renderItem={({ item }) => (
          <View style={{ width, paddingHorizontal: horizontalPadding }}>
            <View style={[styles.card, { borderRadius, height }]}>
              <Image
                source={item.image}
                style={[styles.image, { borderRadius }]}
              />
            </View>
          </View>
        )}
      />

      {showDots && (
        <View style={styles.dots}>
          {data.map((_, i) => (
            <View
              key={i}
              style={[styles.dot, i === currentIndex && styles.dotActive]}
            />
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#fff',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.18,
    shadowRadius: 14,
    elevation: 6,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
  },
  dots: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 999,
    backgroundColor: 'rgba(255,255,255,0.65)',
    marginHorizontal: 4,
  },
  dotActive: {
    width: 18,
    backgroundColor: 'rgba(255,255,255,0.95)',
  },
});
