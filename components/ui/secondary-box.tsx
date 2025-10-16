import {View, Text} from 'react-native'
import React from 'react'
import {ThemedView} from "@/components/themed-view";
import {useThemeColor} from "@/hooks/use-theme-color";
import {Colors} from "@/constants/theme";

const SecondaryBox = () => {
    const backgroundColor = useThemeColor("background",{light:Colors.light.secondary, dark:Colors.dark.secondary},)
    return (
        <ThemedView style={{backgroundColor}} className={"p-4 rounded-3xl"}>
            <Text>SecondaryBox</Text>
        </ThemedView>
    )
}
export default SecondaryBox
