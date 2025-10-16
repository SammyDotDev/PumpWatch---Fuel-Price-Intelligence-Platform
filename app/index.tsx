import { Text, View } from "react-native";
import SafeAreaContainer from "@/components/ui/safe-area-container";
import {ThemedText} from "@/components/themed-text";
import PrimaryButton from "@/components/ui/primary-button";
import InputField from "@/components/ui/input-field";

export default function Index() {
  return (
    <SafeAreaContainer
        scroll={true}
      // style={{
      //   flex: 1,
      //   justifyContent: "center",
      //   alignItems: "center",
      // }}
    >
      <ThemedText>Edit app/index.tsx to edit this screen.</ThemedText>
        <InputField value={"ss"}/>
        <PrimaryButton label={"Next"}/>
    </SafeAreaContainer>
  );
}
