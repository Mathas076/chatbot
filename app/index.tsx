import "@/global.css";
import CustomButton from "@/components/CustomButton";
import PromptText from "@/components/PromptText";
import { useState } from "react";
import { Alert, KeyboardAvoidingView, ScrollView, Text, View } from "react-native";
import { GoogleGenerativeAI } from "@google/generative-ai";

export default function Index() {
  const API_KEY = process.env.EXPO_PUBLIC_GEMINI_API_KEY;

  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState("");

  // Inicializar la librería oficial
  const ai = new GoogleGenerativeAI(API_KEY);

  const consultarGemini = async (pregunta: string) => {
    if (!pregunta.trim()) {
      Alert.alert("Por favor escribe una pregunta");
      return;
    }

    try {
      setIsLoading(true);
      setResponse("");

      // Modelo oficial
      const model = ai.getGenerativeModel({
        model: "gemini-2.0-flash",
      });

      // Llamada usando generateContent
      const result = await model.generateContent(pregunta);
      const text = result.response.text();

      if (text) {
        setResponse(text);
      } else {
        setResponse("No se pudo obtener la respuesta");
      }
    } catch (error: any) {
      console.error(error);
      Alert.alert("Error al consultar Gemini", error.message || "Desconocido");
    } finally {
      setIsLoading(false);
      setValue("");
    }
  };

  return (
    <KeyboardAvoidingView className="w-screen h-screen bg-white">
      <ScrollView className="w-full h-full p-4">

        <PromptText
          onChangeText={(text) => setValue(text)}
          value={value}
        />

        <CustomButton
          isLoading={isLoading}
          onPress={() => consultarGemini(value)}
          title="Enviar pregunta"
        />

        {response ? (
          <View className="mt-5 bg-gray-600 rounded-xl p-4">
            <Text className="text-white font-semibold mb-2">Tu respuesta aqui:</Text>
            <Text className="text-gray-200">{response}</Text>
          </View>
        ) : null}

      </ScrollView>
    </KeyboardAvoidingView>
  );
}
