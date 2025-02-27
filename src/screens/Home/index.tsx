import { Text, View, TextInput, TouchableOpacity, FlatList, Alert, ScrollView} from 'react-native';
import {styles} from './styles'

import { Participant } from '../../components/Participant';

export function Home() {
     const participants = ['22222', '33333', '44444','55555','1111111','6666666','7777777','888888','9999999','10101010'];

    function handleParticipantsAdd(){
        alert("teste");
    }

    function handleParticipantRemove(name: string){
        alert(`removido ${name}`);
    }

    return (
        <View style={styles.container}>
            <Text key='1' style={styles.eventName}>Open up App.tsx to stdddart working on your app!33</Text>
            <Text key='2' style={{ 
                color:'red',
                fontSize: 16
            }}>Open up App.tsx to start wssorking on your</Text>
            <View style={styles.form}>
                <TextInput style={styles.input} 
                    placeholder='Nome do participante'
                    placeholderTextColor="#6b6b6b"/>
                <TouchableOpacity style={styles.button} onPress={handleParticipantsAdd}>
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>

            </View>
            <FlatList 
                data={participants}
                keyExtractor={item => item}
                renderItem={({item }) =>(
                    <Participant key={item} name={item} onRemove={() => handleParticipantRemove(item)} />

                )}
                ListEmptyComponent={() =>(
                    <Text style={styles.listEmptyText}>
                        Ninguém chegou no evento!
                    </Text>
                )}
            />
        </View>
    )
}