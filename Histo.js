import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { GameContext } from './GameContext';

const HistoryScreen = ({ navigation }) => {
  const { history } = useContext(GameContext); 

  return (
    <View>
      <Text>Histórico de Jogos</Text>
      {history.map((result, index) => (
        <Text key={index}>{result}</Text>
      ))}
      <Button title="Voltar para a tela inicial" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default HistoryScreen;
