import React, {useState} from 'react';
import {View, StyleSheet, TouchableHighlight} from 'react-native';

function DrawArea() {
  const [drawing, setDrawing] = useState(false);

  function handleDraw(evt) {
    setDrawing(true);
    if (drawing) {
      setInterval(() => {
        console.log(`x coord = ${evt.nativeEvent.locationX}`);
        console.log(`y coord = ${evt.nativeEvent.locationY}`);
      }, 1000);
    } else {
      clearInterval();
    }
  }
  function handleOut() {
    setDrawing(false);
  }

  return (
    <TouchableHighlight
      onPressIn={(evt) => handleDraw(evt)}
      onPressOut={() => handleOut()}
      style={styles.container}>
      <View />
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
  },
});

export default DrawArea;
