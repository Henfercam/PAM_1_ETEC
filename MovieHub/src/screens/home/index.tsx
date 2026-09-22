import { Button, Text, View } from "react-native";
import styles from "./styles";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MovieHub</Text>

      <Text style={styles.text}>Bem-vindo ao MovieHub!</Text>

      <Button title="Ver filmes" onPress={() => {}} />

      <Button title="Favoritos" onPress={() => {}} />
    </View>
  );
}
