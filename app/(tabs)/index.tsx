import { Image, StyleSheet, Platform, Linking } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import cicleSucatasLogo from '../../assets/images/cicleSucatasLogo2.png';

export default function HomeScreen() {

  const openInstagram = () => {
    const instagramURL = 'instagram://user?username=ciclesucatas';
    const webInstagramURL = 'https://www.instagram.com/ciclesucatas/';

    Linking.canOpenURL(instagramURL)
      .then((supported) => {
        if (supported) {
          Linking.openURL(instagramURL);
        } else {
          alert('Instagram não está instalado no seu dispositivo');
          Linking.openURL(webInstagramURL);
        }
      })
      .catch((err) => console.error('An error occurred', err));
      Linking.openURL(webInstagramURL);
  };



  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={cicleSucatasLogo}
          style={styles.logo}
        />
      }>
      <ThemedText type="title">Bem-vindo ao futuro sustentável!</ThemedText>
      <ThemedText>
        No Sucatão, cada peça tem valor. Vamos juntos fazer a diferença, um pedaço de sucata de cada vez.
      </ThemedText>

      <ThemedText type="subtitle">Aqui você terá acesso a diversas informações sobre o sucatão</ThemedText>
      <ThemedText>
        No Sucatão, cada peça tem valor. Vamos juntos fazer a diferença, um pedaço de sucata de cada vez.
      </ThemedText>
      <Image
        source={require('@/assets/images/dall-e.webp')}
        style={styles.scrapImage}
      />
      <ThemedText onPress={openInstagram} style={styles.instagramLink}>
        Siga-nos no Instagram: @ciclesucatas
      </ThemedText>

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  scrapImage: {
    width: '100%',
    height: 250,
    marginTop: 16,
  },
  instagramLink: {
    color: '#007AFF',
    marginTop: 16,
    textDecorationLine: 'underline',
  },
  logo: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    backgroundColor: '#fff',
  },
});
