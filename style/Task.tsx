import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1, // Usa flex: 1 para ocupar toda a tela
    backgroundColor: "#fff", // Cor de fundo neutra e suave
    padding: 20,
  },
  titleInput: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333", // Cor de texto escura para bom contraste
    marginBottom: 12, // Espaço abaixo do título
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    fontSize: 16,
    color: "#333", // Cor do texto dentro do input
    marginBottom: 15, // Espaço abaixo do input
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 5, // Espaço entre os botões
    shadowColor: "#000", // Adiciona sombra para destaque
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2, // Elevação para dispositivos Android
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600", // Peso da fonte mais visível
  },
  saveButton: {
    backgroundColor: "#f49c4c", // Cor de fundo laranja suave
  },
  completeButton: {
    backgroundColor: "#4caf50", // Cor de fundo verde
  },
  deleteButton: {
    backgroundColor: "#e57373", // Cor de fundo vermelho mais suave
  },
  deleteButtonFullWidth: {
    backgroundColor: "#e57373", // Cor de fundo vermelho
    width: "100%",
    paddingVertical: 15, // Aumenta o padding para o botão de excluir completo
  },
});

export default styles;
