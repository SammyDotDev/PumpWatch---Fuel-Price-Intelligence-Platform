import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Screen } from '@/components/ui/screen';
import { ActionHeader } from '@/components/ui/action-header';
import { FuelGradeFilterBar } from '@/features/stations/components/fuel-grade-filter-bar';
import { NearbyMapScreen } from '@/features/stations/screens/nearby-map';

export default function MapTab() {
  const [grade, setGrade] = useState('Regular');
  return (
    <Screen fullBleed style={styles.container}>
      <ActionHeader title="Map" />
      <FuelGradeFilterBar selected={grade} onSelect={setGrade} />
      <NearbyMapScreen />
    </Screen>
  );
}

const styles = StyleSheet.create({ container: { flex: 1 } });
