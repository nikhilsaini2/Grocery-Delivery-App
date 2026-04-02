import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  ImageSourcePropType,
} from 'react-native';

type Props = {
  label: string;
  icon: ImageSourcePropType;
  selected?: boolean;
  onPress?: () => void;
};

export default function CategoryChip({
  label,
  icon,
  selected,
  onPress,
}: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.chip, selected && styles.chipSelected]}
    >
      <View style={[styles.iconBox, selected && styles.iconBoxSelected]}>
        <Image source={icon} style={styles.icon} resizeMode="contain" />
      </View>

      <Text
        style={[styles.text, selected && styles.textSelected]}
        numberOfLines={1}
      >
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  chip: {
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 5,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },

  chipSelected: {
    backgroundColor: '#000',
  },
  iconBox: {
    width: 64,
    height: 64,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F3F4F6',
    marginBottom: 6,
  },

  iconBoxSelected: {
    // backgroundColor: "#ECFDF3",
  },
  icon: {
    width: 65,
    height: 65,
    borderRadius: 16,
    resizeMode: 'contain',
  },

  text: {
    fontSize: 12,
    fontWeight: '600',
    color: '#111827',
    textAlign: 'center',
  },

  textSelected: {
    color: '#FFFFFF',
  },
});
