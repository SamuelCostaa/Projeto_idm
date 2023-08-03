import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { startGame } from './GameScreen'; 

const HomeScreen = ({ navigation }) => {
  const [, setBoard] = useState([]); 
  const [, setPlayer] = useState('🔴');
  const [, setShowModal] = useState(false);

  const handleStartGame = () => {
    resetGame(); 
    setBoard(generateEmptyBoard());
    startGame(setBoard, setPlayer, setShowModal);
    navigation.navigate('Game'); 
  };

  const generateEmptyBoard = () => {
    return Array(6).fill(null).map(() => Array(7).fill(null));
  };

  const resetGame = () => {
    setBoard(generateEmptyBoard());
    setPlayer('🔴'); 
    setShowModal(false); 
  };

  return (
    <View>
      <Text>Bem-vindo ao 4 em linha</Text>
      <Button title="Iniciar Jogo" onPress={handleStartGame} />
      <Button title="Histórico" onPress={() => navigation.navigate('History')} />
    </View>
  );
};

export default HomeScreen;