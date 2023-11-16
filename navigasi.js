// Navigasi.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Artikel from './Artikel';
import DetailArtikel from './DetailArtikel';

const Stack = createStackNavigator();

function NavigasiUtama() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Artikel" component={Artikel} />
      <Stack.Screen name="DetailArtikel" component={DetailArtikel} />
    </Stack.Navigator>
  );
}

export default NavigasiUtama;
