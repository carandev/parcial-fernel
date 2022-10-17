import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Button } from 'react-native';
import Map from './Map';
import Modal from './Modal';
import Panel from './Panel';
import Input from './Input';
import List from './List';

export default function App() {
  const [ puntos, setPuntos ] = useState([])
  const [ puntoTem, setPuntoTemp ] = useState({})
  const [ nombre, setNombre ] = useState('')
  const [ visibilityFilter, setVisibilityFilter ] = useState('new_puntos')
  const [ visibility, setVisibility ] = useState(false)
  const [ pointsFilter, setpointsFilter ] = useState(true)

  const togglePointsFilter = () => setpointsFilter(!pointsFilter)
  const handleLongPress = ({ nativeEvent }) => {
    //console.log(nativeEvent);
    //setvisibilityFilter('new_puntos')
    setPuntoTemp(nativeEvent.coordinate)
    setVisibility(true)

    //Guaradar los puntos
    //const newPuntos = puntos.concat({ coordinate: nativeEvent.coordinate })
    //setPuntos(newPuntos)
  }
  //console.log(puntos);
  const handleChangeText = (text) => {
    setNombre(text)
  }

  const handleSubmit = () => {
    const newPunto = { coordinate: puntoTem, name: nombre};
    setPuntos(puntos.concat(newPunto))
    setVisibilityFilter('all_puntos')
    setVisibility(false)
    setNombre('')
  }

  const handleLista = () => {
    setVisibilityFilter('all_puntos')
    setVisibility('true')
  }

  console.log(puntos);
  return (
    <View style={styles.container}>
      <Map onlongPress={handleLongPress} puntos={puntos} pointsFilter={pointsFilter}/>
      <Panel onPressLeft={handleLista} textLeft='Lista' togglePointsFilter={togglePointsFilter}/>
      <Modal visibility={visibility}>
        { visibilityFilter === 'new_puntos'
          ?
          <View style={styles.form}>
            <Input
              title='Nombre' placeholder='Nombre del punto' onChangeText={handleChangeText}/>
            <Button title='Aceptar' onPress={handleSubmit}/>
          </View>
          : <List puntos={puntos} closeModal={() => setVisibility(false)}/>
        }
        
      </Modal>
                     
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    padding: 15,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
