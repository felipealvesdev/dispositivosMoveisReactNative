import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, Button } from 'react-native';
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import exploreScreenImage from '../../assets/images/exploreScreenImage.jpg';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Audio } from 'expo-av';

export default function TabTwoScreen() {

  const [sound, setSound] = useState<Audio.Sound | undefined>(undefined);

  async function playSoundMista() {
    console.log('Loading Sound');
    if (sound) {
      await sound.stopAsync(); // Stop the previous audio
      console.log('Previous audio stopped');
    }
    const { sound: newSound } = await Audio.Sound.createAsync(
      require('../../assets/audios/sucataMistaAudioDescription.mp3')
    );
    setSound(newSound);
    console.log('Playing Sound');
    await newSound.playAsync();
  }

  async function playSoundMiuda() {
    console.log('Loading Sound');
    if (sound) {
      await sound.stopAsync(); // Stop the previous audio
      console.log('Previous audio stopped');
    }
    const { sound: newSound } = await Audio.Sound.createAsync(
      require('../../assets/audios/sucataMiudaAudioDescription.mp3')
    );
    setSound(newSound);
    console.log('Playing Sound');
    await newSound.playAsync();
  }

  async function playSoundLatinha() {
    console.log('Loading Sound');
    if (sound) {
      await sound.stopAsync(); // Stop the previous audio
      console.log('Previous audio stopped');
    }
    const { sound: newSound } = await Audio.Sound.createAsync(
      require('../../assets/audios/sucataLatinhaAudioDescription.mp3')
    );
    setSound(newSound);
    console.log('Playing Sound');
    await newSound.playAsync();
  }

  async function playSoundAerosol() {
    console.log('Loading Sound');
    if (sound) {
      await sound.stopAsync(); // Stop the previous audio
      console.log('Previous audio stopped');
    }
    const { sound: newSound } = await Audio.Sound.createAsync(
      require('../../assets/audios/sucataAerosolAudioDescription.mp3')
    );
    setSound(newSound);
    console.log('Playing Sound');
    await newSound.playAsync();
  }

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <Image
          source={exploreScreenImage}
          style={styles.logo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Veja o preço das sucatas!</ThemedText>
      </ThemedView>
      <ThemedText>Basta clicar no botão para visualizar a descrição do item e quanto cobramos!</ThemedText>

      <Collapsible title="Sucata Mista">
        <TouchableOpacity onPress={() => playSoundMista()} style={styles.audioButton}>
          <ThemedText style={styles.buttonText}>Tocar Descrição de Sucata Mista</ThemedText>
        </TouchableOpacity>
        <ThemedText>
          Sucata Mista refere-se a uma combinação de diversos tipos de sucatas de ferro e aço, geralmente de menor valor. É composta por peças variadas de ferro, frequentemente enferrujadas e desgastadas.
        </ThemedText>
        <Image
          source={require('@/assets/images/sucataMista.webp')}
          style={styles.scrapImage}
        />
        <ThemedText>Nosso preço atualmente para sucata Mista é de: R$0,80</ThemedText>
      </Collapsible>

      <Collapsible title="Sucata Miúda">
        <TouchableOpacity onPress={() => playSoundMiuda()} style={styles.audioButton}>
          <ThemedText style={styles.buttonText}>Tocar Descrição de Sucata Miúda</ThemedText>
        </TouchableOpacity>
        <ThemedText>
          A sucata miúda consiste em pequenos pedaços de metal, como ferro e aço, provenientes de processos industriais e demolições.
        </ThemedText>
        <Image
          source={require('@/assets/images/sucataMiuda.jpg')}
          style={styles.scrapImage}
        />
        <ThemedText>Nosso preço atualmente para sucata miúda é de: R$1,10</ThemedText>
      </Collapsible>

      <Collapsible title="Sucata de Alumínio Latinha">
        <TouchableOpacity onPress={() => playSoundLatinha()} style={styles.audioButton}>
          <ThemedText style={styles.buttonText}>Tocar Descrição de Sucata de Latinha</ThemedText>
        </TouchableOpacity>
        <ThemedText>
          A sucata de latinha de alumínio são latas vazias descartadas que podem ser recicladas. Elas são valorizadas por sua fácil reciclagem e menor impacto ambiental.
        </ThemedText>
        <Image
          source={require('@/assets/images/sucataLatinha.jpg')}
          style={styles.scrapImage}
        />
        <ThemedText>Nosso preço atualmente para sucata de alumínio latinha é de: R$7,50</ThemedText>
      </Collapsible>

      <Collapsible title="Sucata de Alumínio Aerosol">
        <TouchableOpacity onPress={() => playSoundAerosol()} style={styles.audioButton}>
          <ThemedText style={styles.buttonText}>Tocar Descrição de Sucata de Aerosol</ThemedText>
        </TouchableOpacity>
        <ThemedText>
          A sucata de alumínio de aerosol refere-se a latas de spray vazias, como aquelas usadas para produtos de beleza ou limpeza. Essas latas são recicláveis e têm valor, pois o alumínio pode ser reutilizado na produção de novos produtos.
        </ThemedText>
        <Image
          source={require('@/assets/images/sucataAerosol.jpg')}
          style={styles.scrapImage}
        />
        <ThemedText>Nosso preço atualmente para sucata de alumínio aerosol é de: R$9,30</ThemedText>
      </Collapsible>

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  scrapImage: {
    width: '100%',
    height: 200,
    marginTop: 8,
    marginBottom: 8,
  },
  logo: {
    width: '100%',
    backgroundColor: '#fff',
    height: 300,
    resizeMode: 'cover',
  },
  // Style for the button
  audioButton: {
    backgroundColor: '#007BFF', // Button color
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
