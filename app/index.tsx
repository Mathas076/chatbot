import { Button } from "@/components/Button";
import { PromptText } from "@/components/PromptText";
import { ResponseBox } from "@/components/ResponseBox";
import '@/global.css';
import axios from "axios";
import { useState } from "react";
import { KeyboardAvoidingView, ScrollView, Text, View } from "react-native";

export default function Index() {
const API_KEY = process.env.EXPO_PUBLIC_GEMINI_API_KEY;//APikeyde google desde .env
  const ai = new <GoogleGenAI({ apiKey: API_KEY });
  const consultarGemini = async (pregunta: string) => {
    setIsLoading(true);
    await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: pregunta,
    }).then((res) => {
        if(res.text != undefined){
          setResponse(res.text);
        }else{
          setResponse("No se pudo obtener la respuesta");
        }
    }).catch((err) => {
      console.log(err);
    }).finally(() => {
      setIsLoading(false);
    });
}
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
