import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function ProfileSelection() {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, { fontFamily: 'inter-regular' }]}>Qual é o seu perfil?</Text>
      <View style={styles.card}>
        <TouchableOpacity style={styles.button}>
          <Text style={[styles.buttonText, { fontFamily: 'inter-regular' }]}>Egresso</Text>
          <Text style={[styles.infoText, { fontFamily: 'inter-regular' }]}>?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={[styles.buttonText, { fontFamily: 'inter-regular' }]}>Programa de Aprendizagem</Text>
          <Text style={[styles.infoText, { fontFamily: 'inter-regular' }]}>?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={[styles.buttonText, { fontFamily: 'inter-regular' }]}>Família</Text>
          <Text style={[styles.infoText, { fontFamily: 'inter-regular' }]}>?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F15124',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: 'black',
    marginBottom: 20,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F15124',
    borderRadius: 30,
    padding: 10,
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    marginRight: 10,
  },
  infoText: {
    color: '#F15124',
    fontSize: 18,
  },
});
