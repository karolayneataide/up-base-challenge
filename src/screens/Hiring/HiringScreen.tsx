import {
  Button,
  Container,
  DatePickerInput,
  TextInput,
  Typography,
} from '@components';
import React from 'react';
import { View } from 'react-native';
import { styles } from './HiringScreen.styles';

const HiringScreen = () => {
  return (
    <Container>
      <View style={styles.wrapper}>
        <Typography>Selecione o dia e horário para o plantão.</Typography>
        <View>
          <TextInput placeholder="Nome do Paciente" />
          <DatePickerInput placeholder="Dia" />
          <DatePickerInput mode="time" placeholder="Horário" />
        </View>
        <View>
          <Button variant="contained">Continuar</Button>
          <Button>Voltar</Button>
        </View>
      </View>
    </Container>
  );
};

export default HiringScreen;
