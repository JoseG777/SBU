import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Camera, useCameraDevices} from 'react-native-vision-camera';

const CameraComponent = () => {
  const [camera, setCamera] = (useState < Camera) | (null > null);
  const devices = useCameraDevices();

  useEffect(() => {
    if (devices.length > 0) {
      Camera.requestCameraPermission().then(granted => {
        if (granted) {
          setCamera(devices[0]);
        }
      });
    }
  }, [devices]);

  if (camera == null) {
    return (
      <View>
        <Text>No camera available</Text>
      </View>
    );
  }

  return (
    <View>
      <Camera style={{flex: 1}} camera={camera} />
      <TouchableOpacity
        onPress={() => {
          camera.takePhoto().then(photo => {
            console.log(photo);
          });
        }}>
        <Text>Take photo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CameraComponent;
