import { Text, View, TextInput, TouchableOpacity, FlatList, Alert} from 'react-native';
import {styles} from './styles'

export function Home() {
     const participants = ['22222', '33333', '44444','55555','1111111','6666666','7777777','888888','9999999','10101010'];

    return (
        <View style={styles.container}>
            <Text key='1' style={styles.eventName}>Open up App.tsx to stdddart working on your app!33</Text>
            <Text key='2' style={{ 
                color:'red',
                fontSize: 16
            }}>Open up App.tsx to start wssorking on your</Text>
        </View>
    )
}