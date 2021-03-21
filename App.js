import React, {Component} from 'react';
import { View, Text, Image, Button } from 'react-native'; 
// Os estilos no React Native não é em pixels, mas sim em pontos. 
// precisa ter o source e style da width e heigth para ser exibida a imagem.
// As props são estaticas. Por isso existem as states
// States = Mutaveis. 

class App extends Component{
  
    constructor(props){
      super(props);
      this.state = {
        nome: ''
      };
      // Precisa colcoar esse código para que seja possível que a função acesse as propriedades desse componente
      this.entrar = this.entrar.bind(this);
    }

    entrar(nome){
      this.setState({
        nome: nome
      })
    }

    render(){
      return(
        <View style={{marginTop: 20}}>

          <Button title="Entrar" onPress={ ()=> this.entrar('Matheus')} />
          <Text style={{ fontSize: 23, color: 'red', textAlign: 'center'}}>  
              {this.state.nome}
          </Text>
        </View>
      );  
    }
  }
export default App;
