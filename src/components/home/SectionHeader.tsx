import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Props = {
  title: string;
  actionLabel?: string;
  onPressAction?: () => void;
};

export default function SectionHeader({
  title,
  actionLabel = 'See All',
  onPressAction,
}: Props) {
  return (
    <View style={styles.row}>
      <Text style={styles.title}>{title}</Text>
      {/* {onPressAction ? (
        <Pressable style={styles.action} hitSlop={10} onPress={onPressAction}>
          <Text style={styles.actionText}>{actionLabel}</Text>
          <Ionicons name="chevron-forward" size={16} color="#10B981" />
        </Pressable>
      ) : null} */}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginVertical: 16,
  },

  title: {
    fontSize: 18,
    fontWeight: '800',
    color: '#111827',
  },
  action: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  actionText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#10B981',
  },
});
