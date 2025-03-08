import React, {useState} from 'react';
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert,} from 'react-native';
import {styles} from './styles'

import { Participant } from '../../components/Participant';

export function Home() {

    const [participants, setParticipants] = useState<string[]>([]);
    const [participantName, setParticipantName] = useState('');

    function handleParticipantsAdd(){
        if(participants.includes(participantName)){
            return Alert.alert("Participante Existe", "Já existe um participante com esse nome!");
        }
        setParticipants(prevState => [...prevState, participantName]);
        setParticipantName('');
    }

    function handleParticipantRemove(name: string){
        Alert.alert("Remover Participante", `Que remover o participante ${name}?`, 
        [
            {
                text: 'Sim',
                onPress: () =>Alert.alert("Deletado!")
            },
            {
                text: 'Não', 
                style: 'cancel'

            }
        ]);
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
                    placeholderTextColor="#6b6b6b"
                    // onChangeText={text =>setParticipantName(text)}
                    onChangeText={setParticipantName}
                    value={participantName}
                    />
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