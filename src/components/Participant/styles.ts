import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor:   '#1F1E25',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  } ,
  name: {
    flex: 1,
    fontSize: 16,
    color: '#fff',
    marginLeft: 16
  },
  input: {
    flex:1,
    height: 56,
    backgroundColor: '#1F1E25',
    borderRadius: 5,
    color: '#FDfCFE',
    padding:16,
    fontSize:16,
    marginRight: 12,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 24
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#E23C44',
    justifyContent: 'center',
    alignItems: 'center'
    },
})