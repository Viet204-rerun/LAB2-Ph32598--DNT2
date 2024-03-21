import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { CameraOptions, ImagePickerResponse, OptionsCommon, launchCamera } from 'react-native-image-picker';

const Bai41 = () => {
    const [images, setImages] = useState<ImagePickerResponse['assets'] | undefined>(undefined);
    const commonOptions: OptionsCommon = {
        mediaType: 'photo',
        maxWidth: 500,
        maxHeight: 500,
    };
    const cameraOption: CameraOptions = {
        cameraType: 'front',
        saveToPhotos: true,
        ...commonOptions
    };

    const onOpenCamera = async () => {
        const response: ImagePickerResponse = await launchCamera(cameraOption);
        if (response?.assets) {
            setImages(response.assets);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hình Ảnh</Text>
           
            {images && images.length > 0 && (
                <Image style={styles.image} source={{ uri: images[0].uri }} />
            )}
            {!images && (
                <Image style={styles.image} source={require('../nguoidung.jpg')} />
            )}
             <TouchableOpacity style={styles.button} onPress={onOpenCamera}>
                <Text style={styles.buttonText}>Chụp Ảnh</Text>
            </TouchableOpacity>
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
    image: {
        width: 200,
        height: 200,
        resizeMode: 'cover',
        marginVertical: 120,
        borderRadius:100
    },
});

export default Bai41;
