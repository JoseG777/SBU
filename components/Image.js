// import React, {useState, useEffect} from 'react';
// import {
//   Button,
//   Image,
//   Text,
//   View,
//   StyleSheet,
//   ScrollView,
//   ActivityIndicator,
//   TouchableOpacity,
// } from 'react-native';
// import {launchImageLibrary} from 'react-native-image-picker';
// import SoundComponent from './sound.js';

// const ImageUploadComponent = () => {
//   const [jsonData, setJsonData] = useState(null);
//   const [imageSource, setImageSource] = useState(null);
//   const [imageData, setImageData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [sound, setSound] = useState(null);

//   const selectImage = () => {
//     const options = {
//       title: 'Select Image',
//       storageOptions: {
//         skipBackup: true,
//         path: 'images',
//       },
//       mediaType: 'photo',
//       includeBase64: true,
//     };
//
//     launchImageLibrary(options, response => {
//       if (response.didCancel) {
//         console.log('User cancelled image picker');
//       } else if (response.errorCode) {
//         console.log('ImagePicker Error: ', response.errorMessage);
//       } else if (response.assets && response.assets.length > 0) {
//         const source = {uri: response.assets[0].uri};
//         setImageSource(source);
//         if (response.assets[0].base64) {
//           uploadImage(response.assets[0].base64);
//         }
//       }
//     });
//   };

//   const uploadImage = async base64Image => {
//     setLoading(true);
//     try {
//       const response = await fetch(
//         'https://backend-9b1x.onrender.com/vision/analyze-image',
//         {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             image: base64Image,
//           }),
//         },
//       );

//       const json = await response.json();
//       console.log('Response from server:', json);
//       setImageData(json.data);
//       setSound(json.sound); // this is the url i need
//       setJsonData(json); // this sets the json data to the state variable jsonData and then it allows rendering of the component

//       if (json.message) {
//         alert('Image processed: ' + json.message);
//       }
//     } catch (error) {
//       console.error('Error uploading image:', error);
//       alert('Failed to upload image: ' + error);
//     } finally {
//       setLoading(false); // Stop loading irrespective of the result
//     }
//   };

//   return (
//     <View style={styles.mainContainer}>
//       <ScrollView style={styles.scrollView}>
//         {/* All your scrollable content goes here */}
//         {loading && (
//           <View style={styles.loadingContainer}>
//             <ActivityIndicator size="large" color="#0000ff" />
//             <Text style={styles.loadingText}>Analyzing Image...</Text>
//           </View>
//         )}
//         {!loading && imageData && (
//           <>
//             {/*<Text style={styles.headerText}>Image Analysis</Text>*/}
//             <Text style={styles.ai}>{imageData}</Text>
//             {/* imageSource && <Image source={imageSource} style={styles.image} /> */}
//             {!loading && sound && <SoundComponent sound={sound} />}
//           </>
//         )}
//       </ScrollView>
//       {!loading && (
//         <TouchableOpacity onPress={selectImage} style={styles.button}>
//           <Text style={styles.buttonText}>Select Image</Text>
//         </TouchableOpacity>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   mainContainer: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   scrollView: {
//     // If you have other styles for padding, etc., keep them here
//   },
//   button: {
//     backgroundColor: '#007bff', // Ensure this is a color that contrasts well with white
//     padding: 15,
//     borderRadius: 5,
//     margin: 20,
//     // Make sure the button is big enough to hold your text
//     justifyContent: 'center', // This centers the text vertically
//     alignItems: 'center', // This centers the text horizontally
//   },
//   buttonText: {
//     color: '#fff', // White color for the text, make sure it contrasts with button color
//     fontSize: 20, // Adjust font size as needed
//     textAlign: 'center', // Center text - though this is redundant if alignItems is set to 'center'
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   loadingText: {
//     marginTop: 10,
//     fontSize: 18,
//     color: '#0000ff',
//   },
//   scrollView: {
//     padding: 20,
//   },
//   headerText: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     textAlign: 'center',
//   },
//   ai: {
//     fontSize: 40,
//     fontWeight: 'normal',
//     textAlign: 'left',
//     marginBottom: 20,
//   },
//   image: {
//     width: 300,
//     height: 300,
//     resizeMode: 'contain',
//     marginBottom: 20,
//   },
// });

// export default ImageUploadComponent;
