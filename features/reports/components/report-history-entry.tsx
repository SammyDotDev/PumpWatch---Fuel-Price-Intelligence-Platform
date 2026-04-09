import { Text } from "@/components/ui/themed-text";
import { Colors } from "@/shared/theme";
import { PriceReport } from "@/types";
import { formatPrice } from "@/utils/helpers";
import React from "react";
import { StyleSheet, View } from "react-native";

export function ReportHistoryEntry({ report }: { report: PriceReport }) {
	const isVerified = report.status === "verified";
	return (
		<View style={styles.container}>
			<View style={styles.timeline}>
				<View style={styles.line} />
				<View
					style={[
						styles.dot,
						isVerified ? styles.dotVerified : styles.dotPending,
					]}
				/>
			</View>
			<View style={styles.content}>
				<Text variant="labelCapsWide" style={styles.grade}>
					{report.grade}
				</Text>
				<Text variant="displaySm" style={styles.price}>
					{formatPrice(report.price)}
				</Text>
				<Text variant="bodySm" style={styles.station}>
					{report.stationName}
				</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		marginBottom: 24,
	},
	timeline: {
		width: 24,
		alignItems: "center",
		marginRight: 16,
	},
	line: {
		...StyleSheet.absoluteFillObject,
		width: 1,
		backgroundColor: Colors.surfaceContainerHighest,
		left: 11,
	},
	dot: {
		width: 12,
		height: 12,
		borderRadius: 6,
		borderWidth: 3,
		borderColor: Colors.background,
		marginTop: 6,
	},
	dotVerified: {
		backgroundColor: Colors.secondary,
	},
	dotPending: {
		backgroundColor: Colors.outline,
	},
	content: {
		flex: 1,
		backgroundColor: Colors.surfaceContainerLow,
		padding: 16,
		borderRadius: 16,
	},
	grade: {},
	price: {
		marginTop: 4,
		marginBottom: 4,
	},
	station: {},
});
