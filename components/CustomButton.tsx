import React from "react";
import { TouchableOpacity } from "react-native";

type ButtonProps = {
  isLoading?: boolean;
  onPress: () => void;
  title?: string;
};
export default function Button({ isLoading = false, onPress, title = "Enviar" }: ButtonProps) {
  return (
    <TouchableOpacity
      className="bg-gray-400 p-3 rounded-lg justify-center items-center"
      onPress={onPress}
      disabled={isLoading}>
    </TouchableOpacity>
  );
}