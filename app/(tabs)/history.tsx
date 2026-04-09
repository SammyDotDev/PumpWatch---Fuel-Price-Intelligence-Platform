import React from 'react';
import { StyleSheet } from 'react-native';
import { Screen } from '@/components/ui/screen';
import { ActionHeader } from '@/components/ui/action-header';
import { ReportHistoryScreen } from '@/features/reports/screens/report-history';

export default function HistoryTab() {
  return (
    <Screen style={styles.container}>
      <ActionHeader title="History" />
      <ReportHistoryScreen />
    </Screen>
  );
}

const styles = StyleSheet.create({ container: { flex: 1 } });
