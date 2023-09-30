import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Button, StyleSheet } from 'react-native';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Senha:', password);
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: 'black', fontFamily: 'inter-regular' }]}>Login</Text>

      <Image source={require('./assets/icon.png')} style={styles.logo} />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={handleEmailChange}
          value={email}
        />
        <View style={styles.passwordInput}>
          <TextInput
            style={styles.passwordField}
            placeholder="Senha"
            secureTextEntry={!showPassword}
            onChangeText={handlePasswordChange}
            value={password}
          />
          <TouchableOpacity onPress={togglePasswordVisibility} style={styles.passwordToggle}>
            <Text>{showPassword ? 'Ocultar' : 'Mostrar'}</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Button
        title="Login"
        onPress={handleLogin}
        color="#F15124" // Cor do botão de Login
      />

      <TouchableOpacity onPress={() => console.log('Esqueceu a Senha pressionado')}>
        <Text style={styles.link}>Esqueceu a Senha?</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => console.log('FAQ pressionado')}>
        <Text style={styles.link}>FAQ</Text>
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
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    marginBottom: 10,
  },
  passwordInput: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    height: 40,
    marginBottom: 10,
  },
  passwordField: {
    flex: 1,
    paddingLeft: 10,
  },
  passwordToggle: {
    padding: 10,
  },
  link: {
    textDecorationLine: 'underline',
    marginBottom: 20,
  },
});
