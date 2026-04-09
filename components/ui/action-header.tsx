import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Colors } from '@/shared/theme';

export interface ActionHeaderProps {
  showBack?: boolean;
  showSearch?: boolean;
  avatarUri?: string;
  title?: string;
}

export function ActionHeader({ showBack, showSearch, avatarUri, title }: ActionHeaderProps) {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.left}>
        {showBack && (
          <TouchableOpacity onPress={() => router.back()} style={styles.iconButton}>
            <MaterialIcons name="arrow-back" size={24} color={Colors.onSurface} />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.right}>
        {showSearch && (
          <TouchableOpacity style={styles.iconButton}>
            <MaterialIcons name="search" size={24} color={Colors.onSurface} />
          </TouchableOpacity>
        )}
        {avatarUri && (
          <View style={styles.avatarContainer}>
            <Image source={{ uri: avatarUri }} style={styles.avatar} />
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: 'rgba(248, 249, 250, 0.8)', // surface at 80% opacity
  },
  left: {
    flex: 1,
    alignItems: 'flex-start',
  },
  right: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 16,
  },
  iconButton: {
    padding: 8,
  },
  avatarContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: Colors.surfaceContainerHighest,
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
});
