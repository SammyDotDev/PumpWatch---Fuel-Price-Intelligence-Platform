import React from "react";
import { ScrollView, StyleSheet } from "react-native";
// import { ProfileHeader } from '@/components/profile-header';

export function ProfileFavoritesScreen() {
	return (
		<ScrollView style={styles.container}>{/* <ProfileHeader /> */}</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1, padding: 16 },
});
