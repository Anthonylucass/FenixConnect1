import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function SignupStep2({ navigation }) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');

  const handleNext = () => {
    navigation.navigate('SignupStep3'); 
  };

  const handleBack = () => {
    navigation.goBack(); 
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { fontFamily: 'inter-regular' }]}>Cadastro</Text>

      <Text style={[styles.stepIndicator, { backgroundColor: '#F15124' }]}>2</Text>

      <TextInput
        style={[styles.input, { fontFamily: 'inter-regular' }]}
        placeholder="Número de Telefone"
        onChangeText={(text) => setPhoneNumber(text)}
        value={phoneNumber}
        keyboardType="phone-pad"
      />
      <TextInput
        style={[styles.input, { fontFamily: 'inter-regular' }]}
        placeholder="Endereço"
        onChangeText={(text) => setAddress(text)}
        value={address}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#F15124' }]}
          onPress={handleBack}
        >
          <Text style={[styles.buttonText, { color: 'white' }]}>Voltar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#F15124' }]}
          onPress={handleNext}
        >
          <Text style={[styles.buttonText, { color: 'white' }]}>Próxima</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: 'black',
    marginBottom: 20,
  },
  stepIndicator: {
    width: 30,
    height: 30,
    borderRadius: 15,
    textAlign: 'center',
    lineHeight: 30,
    fontSize: 18,
    color: 'white',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  button: {
    backgroundColor: '#F15124',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: '45%', // Define a largura para alinhar os botões
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});
