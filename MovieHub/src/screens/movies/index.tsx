import { Text, View } from "react-native";
import styles from "./styles";

export default function Movies() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filmes</Text>

      <Text style={styles.movie}> Interestelar</Text>
      <Text style={styles.movie}> Batman</Text>
      <Text style={styles.movie}> Homem-Aranha</Text>
      <Text style={styles.movie}> Vingadores</Text>
    </View>
  );
}
