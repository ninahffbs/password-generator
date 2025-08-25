import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './BatLogoStyles';
import batlogo from '../../../assets/bat-logo.png'

export function BatLogo() {
  return (
    <>
        <Text style={styles.title}>
            BAT PASS GENERATOR
        </Text>
        <Image 
            source = {batlogo}
            style={{
                resizeMode: 'contain',
                height:180,
            }}
        />
    </>
  );
}