import React from 'react';
import { View, Text, Image, Button, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: 'black', fontFamily: 'inter-regular' }]}>Fênix Connect</Text>

      <Image source={require('./assets/icon.png')} style={styles.logo} />

      <View style={styles.buttonContainer}>
        <Button
          title="Login"
          onPress={() => console.log('Botão de Login pressionado')}
          color="#F15124" // Cor do botão de Login
        />
        <Button
          title="Cadastro"
          onPress={() => console.log('Botão de Cadastro pressionado')}
          color="#F15124" // Cor do botão de Cadastro
        />
      </View>

      <TouchableOpacity onPress={() => console.log('Esqueceu a Senha pressionado')}>
        <Text style={styles.link}>Esqueceu a Senha?</Text>
      </TouchableOpacity>

      <View style={styles.divider} />

      <Text style={styles.partnerTitle}>Parceiros</Text>

      <Image source={require('./assets/parceiro.png')} style={styles.partnerImage} />
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20,
  },
  link: {
    textDecorationLine: 'underline',
    marginBottom: 20,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    width: '80%',
    marginBottom: 20,
  },
  partnerTitle: {
    fontSize: 20,
    marginBottom: 10,
  },
  partnerImage: {
    width: 200,
    height: 100,
  },
});
