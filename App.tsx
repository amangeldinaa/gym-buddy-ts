import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, StyleProp, ViewStyle } from 'react-native';
// import ButtonStyled from './components/ButtonStyled';
import Carousel from 'react-native-snap-carousel';

interface Exercise {
img: number;
name: string;
}

export default function App(): JSX.Element {
const [count, setCount] = useState<number>(1);

const exercises: Exercise[] = [
  {
  img: require('./assets/1.jpeg'),
  name: 'НАКЛОНЫ НА ОДНОЙ НОГЕ'
  },
  {
  img: require('./assets/2.jpeg'),
  name: 'ВЫПАДЫ С ПЕРЕВОДОМ ГИРИ'
  },
  {
  img: require('./assets/3.jpeg'),
  name: 'ПОДЪЕМЫ НА СКАМЬЕ'
  }
];

const onPress = (): void => {
  if (count < 3) {
    setCount(prevCount => prevCount + 1);
  }
};

const renderImage = ({ item, index }: { item: Exercise, index: number }): JSX.Element => {
  return (
    <View>
      <Image
          source={item.img}
          style={styles.image}
          alt="slider img" />
    </View>
  );
};

const renderItem = ({ item, index }: { item: number, index: number }): JSX.Element => {
  return (
    <View style={styles.verticleLine}>
      <Text style={styles.scrollNum}>{item}</Text>
    </View>
  );
};

return (
  <View style={styles.container}>
  <Text style={styles.trisestText}>ТРИСЕТ</Text>
  <Text style={styles.numText}>{count}/3</Text>
  <Text style={styles.secondaryText}>ПОДХОД</Text>
  <Text style={styles.mainText}>{exercises[count - 1].name}</Text>

  <Carousel
    data={exercises}
    renderItem={renderImage}
    sliderWidth={500}
    itemWidth={100}
    inactiveSlideOpacity={0.5}
    inactiveSlideScale={0.8}
    activeSlideOffset={20}
    onSnapToItem={(index) => setCount(index + 1)}
    firstItem={count - 1}
  />

  <Text style={styles.mainText}>УКАЖИТЕ ВЕС С КОТОРЫМ ВЫ РАБОТАЛИ</Text>

  <Carousel
    data={[...Array(16).keys()]}
    renderItem={renderItem}
    sliderWidth={500}
    itemWidth={100}
    inactiveSlideOpacity={0.5}
    inactiveSlideScale={0.8}
  />

  <Text style={styles.mainText}>УКАЖИТЕ КОЛИЧЕСТВО ПОВТОРЕНИЙ</Text>

  <Carousel
    data={[...Array(16).keys()]}
    renderItem={renderItem}
    sliderWidth={500}
    itemWidth={100}
    inactiveSlideOpacity={0.5}
    inactiveSlideScale={0.8}
  />

  <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>ПОДТВЕРДИТЬ ({count} из 3)</Text>
  </TouchableOpacity>

  <StatusBar style="auto" />
</View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
  },
  secondaryText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 12,
  },
  mainText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
    marginVertical: 15
  }, 
  trisestText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 12,
    marginTop: 70,
    marginBottom: 15
  }, 
  numText: {
    color: 'white',
    fontSize: 50,
    fontWeight: '700',
    marginBottom: 5
  },
  image: {
    width: 110,
    height: 200,
    borderRadius: 10,
    marginBottom: 25
  },
  verticleLine: {
    borderLeftWidth: 2,
    borderLeftColor: 'grey',
    padding: 5,
  },
  scrollNum: {
    fontSize: 45,
    color: 'white',
    fontWeight: '700',
    marginHorizontal: 30
  },
  scrollbar: {
    height: 50,
    marginBottom: 30
  },
  itemText: {
    fontSize: 22,
    color: 'blue'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 50,
    width: 350,
    height: 70,
    marginBottom: 35,
    marginTop: 25,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,   
  },
});
