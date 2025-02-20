import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export function Participant() {

    function handleParticipantsAdd() {
        alert("teste do componente");
    }
    return (
        <View style={styles.container}>
            <Text style={styles.name}>Rodrigo</Text>
              <TouchableOpacity style={styles.button} onPress={handleParticipantsAdd}>
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
        </View>
    )
}