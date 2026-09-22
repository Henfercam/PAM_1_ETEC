import { Button, Text, TextInput, View } from "react-native";
import styles from "./styles";

export default function Register() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar Conta</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        placeholderTextColor="#999"
      />

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor="#999"
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#999"
        secureTextEntry
      />

      <Button title="Cadastrar" onPress={() => {}} />
    </View>
  );
}
