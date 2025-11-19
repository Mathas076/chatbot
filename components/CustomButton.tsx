import React from "react";
import { TouchableOpacity, Text, ActivityIndicator } from "react-native";

type ButtonProps = {
  isLoading?: boolean;
  onPress: () => void;
  title?: string;
};

export default function CustomButton({ isLoading = false, onPress, title = "Enviar" }: ButtonProps) {
  return (
    <TouchableOpacity
      className="bg-green-600 p-3 rounded-lg mt-3 items-center"
      onPress={onPress}
      disabled={isLoading}
    >
        <Text className="text-white font-bold">{title}</Text>
    </TouchableOpacity>
  );
}