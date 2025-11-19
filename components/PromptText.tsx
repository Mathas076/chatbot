import React, { useState } from "react";
import { TextInput, TextInputProps, NativeSyntheticEvent, TextInputContentSizeChangeEventData } from "react-native";

type PromptTextProps = {
  value: string;
  onChangeText: (text: string) => void;
  onSubmitEditing?: () => void;
} & TextInputProps;

export default function PromptText({
  value,
  onChangeText,
  onSubmitEditing,
  ...rest
}: PromptTextProps) {
  const [inputHeight, setInputHeight] = useState(50); // altura mínima

  const handleContentSizeChange = (
    e: NativeSyntheticEvent<TextInputContentSizeChangeEventData>
  ) => {
    const height = e.nativeEvent.contentSize.height;
    // Limitar crecimiento excesivo
    setInputHeight(Math.min(Math.max(50, height), 200));
  };

  return (
    <TextInput
      placeholder="Pregunta lo que quieras..."
      placeholderTextColor="#aaa"
      value={value}
      onChangeText={onChangeText}
      onContentSizeChange={handleContentSizeChange}
      onSubmitEditing={onSubmitEditing}
      className="
        border border-gray-600
        rounded-2xl
        p-3
        text-white
        bg-neutral-800
        text-base
      "
      multiline
      style={{ height: inputHeight }}
      accessible
      accessibilityLabel="Caja de texto para escribir tu pregunta"
      {...rest}
    />
  );
}
