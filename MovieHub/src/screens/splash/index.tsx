import { Text, View } from "react-native";
import styles from "./styles";

export default function Splash() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MovieHub</Text>
      <Text style={styles.text}>Gerenciador de Filmes</Text>
    </View>
  );
}
