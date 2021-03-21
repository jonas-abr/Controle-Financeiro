import React, {Component} from 'react';
import { View, Text, Image } from 'react-native';
// Os estilos no React Native não é em pixels, mas sim em pontos. 
// precisa ter o source e style da width e heigth para ser exibida a imagem.
//

class App extends Component{
  render(){
    let nome = 'jonas';
  

    return(
      <View>
        <Text style={{color: 'blue', fontSize: 25, margin: 15}}>
          Grandes Celebridades da Tecnologia
        </Text>
        <Text style={{color: 'red', fontSize: 25}}>
          1 - Steve Jobs
        </Text>
        <Text style={{ fontSize: 30}}>{nome}</Text>
        <Jobs Largura={100} altura={200} fulano="steve jobs"/>

      </View>
    );
  }
}

export default App;

class Jobs extends Component {
  render(){

    let img = 'https://sujeitoprogramador.com/steve.png';
    return(
      <View>
        <Image
          source={{uri: img}}
          style={{ width: this.props.Largura, height: this.props.altura}}
         />
         <Text> {this.props.fulano}</Text>
      </View>
    );
  }

}