import React, { useState } from 'react';
import { Button, Image, View } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

const ImageUploadComponent = () => {
  const [imageSource, setImageSource] = useState(null);

  const selectImage = () => {
    const options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
      mediaType: 'photo',
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        const source = { uri: response.assets[0].uri };
        setImageSource(source);
        //console.log('Image Source:', source.uri);
      }
    });
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button title="Select Image" onPress={selectImage} />
      {imageSource && <Image source={imageSource} style={{width: 200, height: 200}} />}
    </View>
  );
};

export default ImageUploadComponent;
