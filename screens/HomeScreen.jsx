import { Button, Text, View } from "react-native";

export default function HomeScreen({ navigation}) {
  return (
    <View>
      <Text>Inicial</Text>
      <Text>Bem vindo</Text>
      <Button
        onPress={()=>navigation.navigate("SobreScreen")}> 
         Ir para sobre
      </Button>
    </View>
  );
}
