import React from 'react';
import { View, ImageBackground, Text, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';

import giveClasesBgImagem from '../../assets/images/give-classes-background.png';

import styles from './styles';

function GiveClasses() {
    const { goBack }  = useNavigation();

    function handleNavigationback(){
        goBack();
    }

    return (
        <View style={styles.container}>
            <ImageBackground resizeMode="contain" source={giveClasesBgImagem} style={styles.content}>
                <Text style={styles.title}>
                    Que ser um Proffy?
                </Text>
                <Text style={styles.description}>
                    Para começar, você precisa se cadastrar como professor na nossa plataforma web.
                </Text>
            </ImageBackground>

            <RectButton onPress={handleNavigationback} style={[styles.okButton]}>
                <Text style={styles.okButtonText}>Tudo bem</Text>
            </RectButton>

        </View>
    );
}

export default GiveClasses;