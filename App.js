import React, {Component} from 'react';
import { View, Text, Image } from 'react-native';
// Os estilos no React Native não é em pixels, mas sim em pontos. 
// precisa ter o source e style da width e heigth para ser exibida a imagem.


class App extends Component{
  render(){
    let nome = 'jonas';
    let img = 'https://sujeitoprogramador.com/steve.png';

    return(
      <View>
        <Text style={{color: 'blue', fontSize: 25, margin: 15}}>
          Grandes Celebridades da Tecnologia
        </Text>
        <Text style={{color: 'red', fontSize: 25}}>
          1 - Steve Jobs
        </Text>

        <Image 
          source={{ uri: img}}
          style={{  width: 300, height: 300}}
        />

        <Text style={{ fontSize: 30}}>{nome}</Text>
      </View>
    );
  }
}

export default App;