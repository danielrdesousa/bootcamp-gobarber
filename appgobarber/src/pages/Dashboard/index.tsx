import React from 'react';
import { Image, View, Button, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import { useAuth } from '../../hooks/Auth';

import logoImg from '../../assets/logo.png';

import { Container, Title } from './styles';

const Dashboard: React.FC = () => {
  const navigation = useNavigation();
  const { signOut } = useAuth();

  return (
    <>
      <Container>
        <Image source={logoImg} />
        <View>
          <Title>Dashboard</Title>
          <Button onPress={signOut} title="Deslogar" color="#ff9000" />
        </View>
      </Container>
    </>
  );
};

export default Dashboard;
