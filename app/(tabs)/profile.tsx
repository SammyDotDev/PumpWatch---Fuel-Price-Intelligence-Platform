import React from 'react';
import { StyleSheet } from 'react-native';
import { Screen } from '@/components/ui/screen';
import { ActionHeader } from '@/components/ui/action-header';
import { ProfileFavoritesScreen } from '@/features/profile/screens/profile-favorites';

export default function ProfileTab() {
  return (
    <Screen style={styles.container}>
      <ActionHeader title="Profile" />
      <ProfileFavoritesScreen />
    </Screen>
  );
}

const styles = StyleSheet.create({ container: { flex: 1 } });
