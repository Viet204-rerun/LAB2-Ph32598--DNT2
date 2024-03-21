import React, { useState } from 'react';
import { View, Text, Button, Alert, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { ImageLibraryOptions, ImagePickerResponse, OptionsCommon, launchImageLibrary } from 'react-native-image-picker';

const Bai42 = () => {
    const [images, setImages] = useState<ImagePickerResponse['assets'] >([]);

    const commonOptions: OptionsCommon = {
        mediaType: 'photo',
        maxWidth: 500,
        maxHeight: 500,
    };
    const libraryOptions: ImageLibraryOptions = {
        selectionLimit: 10,
        ...commonOptions
    };
    const onOpenLibrary = async () => {
        const response: ImagePickerResponse = await launchImageLibrary(
            libraryOptions,
        );
        if (response?.assets) {
            setImages(response.assets);
        } else {
            Alert.alert('Có lỗi xảy ra', response.errorMessage || 'Không có lỗi được thông báo');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Chọn ảnh từ thư viện</Text>
            <TouchableOpacity style={styles.button} onPress={onOpenLibrary}>
                <Text style={styles.buttonText}>Mở Thư Viện</Text>
            </TouchableOpacity>
            <ScrollView contentContainerStyle={styles.imageContainer}>
    {images && images.map((image, index) => (
        <Image
            key={index}
            source={{ uri: image.uri }}
            style={styles.image}
        />
    ))}
</ScrollView>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#8EC5F3',
        padding:30
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color:'#F35151',
        marginBottom: 20,

    },
    imageContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        borderRadius:100
    },
    image: {
      width: 200,
      height: 200,
      resizeMode: 'cover',
      marginVertical: 120,
      borderRadius:100
    },
    button: {
      backgroundColor: '#FCF4A4',
      padding: 10,
      borderRadius: 15,
      marginBottom: 20,
      width:"100%",
      borderWidth:3,borderColor:'white',
      justifyContent:'center',
      alignItems:'center'
  },
  buttonText: {
      color: '#8EC5F3',
      fontSize: 16,
      fontWeight: 'bold',

  },
});

export default Bai42;
