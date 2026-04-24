import { View, Text, TouchableOpacity } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';

export default function Missing() {
  const { title } = useLocalSearchParams();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      
      <Text style={{ fontSize: 18, marginBottom: 20 }}>
        Tela "{title || 'Desconhecida'}" ainda não criada
      </Text>

      <TouchableOpacity onPress={() => router.replace('/')}>
        <Text style={{ color: 'blue' }}>Voltar para Home</Text>
      </TouchableOpacity>

    </View>
  );
}