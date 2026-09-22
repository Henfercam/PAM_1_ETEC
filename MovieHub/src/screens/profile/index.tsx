import { Button, Text, View } from "react-native";
import styles from "./styles";

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meu Perfil</Text>

      <Text style={styles.text}>Nome: Henrique</Text>

      <Text style={styles.text}>E-mail: henriqfercam@email.com</Text>

      <Button title="Editar perfil" onPress={() => {}} />
    </View>
  );
}
