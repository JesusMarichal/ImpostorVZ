import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import GameController from '../../controllers/GameController';
import SectionCard from '../components/SectionCard';
import Colors from '../../constants/Colors';
import Strings from '../../constants/Strings';

const HomeScreen = () => {
  const header = GameController.getHeaderData();
  const gameInfo = GameController.getGameData();

  const handleStart = () => {
    const result = GameController.startGame();
    Alert.alert('ImpostorVZ', result.message);
  };

  return (
    <View style={styles.screen}>
      <SectionCard title={header.title} subtitle={header.subtitle}>
        <Text style={styles.description}>{Strings.welcomeMessage}</Text>

        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Jugadores:</Text>
          <Text style={styles.infoValue}>{gameInfo.players.join(', ')}</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Regla principal:</Text>
          <Text style={styles.infoValue}>{gameInfo.rule}</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleStart}>
          <Text style={styles.buttonText}>{Strings.startButton}</Text>
        </TouchableOpacity>
      </SectionCard>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
  },
  description: {
    fontSize: 16,
    color: Colors.textSecondary,
    marginBottom: 20,
  },
  infoRow: {
    marginBottom: 12,
  },
  infoLabel: {
    fontSize: 14,
    color: Colors.textPrimary,
    fontWeight: '600',
  },
  infoValue: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginTop: 4,
  },
  button: {
    marginTop: 20,
    backgroundColor: Colors.accent,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
});

export default HomeScreen;
