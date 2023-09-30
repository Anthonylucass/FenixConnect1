import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function SignupStep1() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleNext = () => {
    navigation.navigate('SignUp2'); 
  };


  return (
    <View style={styles.container}>
      <Text style={[styles.title, { fontFamily: 'inter-regular' }]}>Cadastro</Text>

      <Text style={[styles.stepIndicator, { backgroundColor: '#F15124' }]}>1</Text>

      <TextInput
        style={[styles.input, { fontFamily: 'inter-regular' }]}
        placeholder="Nome"
        onChangeText={(text) => setFirstName(text)}
        value={firstName}
      />
      <TextInput
        style={[styles.input, { fontFamily: 'inter-regular' }]}
        placeholder="Sobrenome"
        onChangeText={(text) => setLastName(text)}
        value={lastName}
      />
      <TextInput
        style={[styles.input, { fontFamily: 'inter-regular' }]}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
        keyboardType="email-address"
      />
      <TextInput
        style={[styles.input, { fontFamily: 'inter-regular' }]}
        placeholder="Senha"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <TextInput
        style={[styles.input, { fontFamily: 'inter-regular' }]}
        placeholder="Confirme a Senha"
        onChangeText={(text) => setConfirmPassword(text)}
        value={confirmPassword}
        secureTextEntry
      />

      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#F15124' }]}
        onPress={handleNext}
      >
        <Text style={[styles.buttonText, { color: 'white' }]}>Próxima</Text>
      </TouchableOpacity>
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
  button: {
    backgroundColor: '#F15124',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});
