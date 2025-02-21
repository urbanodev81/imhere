import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

type Props ={
    name: string;
}
export function Participant(props: Props) {

    function handleParticipantsAdd() {
        alert("teste do componente");
    }
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{props.name}</Text>
              <TouchableOpacity style={styles.button} onPress={handleParticipantsAdd}>
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
        </View>
    )
}