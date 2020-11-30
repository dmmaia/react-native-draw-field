import React, {useState} from 'react';
import {View, StyleSheet, TouchableHighlight} from 'react-native';

function DrawArea() {
  const [touchCoordinates, setTouchCoordinates] = useState([]);
  var drawTime;
  function handleDraw(evt) {
    drawTime = setInterval(() => {
      var tempCoordinates = [];
      tempCoordinates.push({
        x: evt.nativeEvent.locationX,
        y: evt.nativeEvent.locationY,
      });
      console.log(evt.nativeEvent.locationX);
    }, 100);
  }
  function handleOut() {
    clearInterval(drawTime);
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
