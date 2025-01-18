import React from 'react';
import {View,Text,Button,FlatList} from 'react-native';
import styles from './styles';
import Modal from 'react-native-modal';

interface polygonProps{
    visible: boolean;
    data: any;
    onClose: () => {};
}
const polygonModal = ({visible,data,onClose}:polygonProps) => {
    const renderCoordinates = ({item,index}) => (
        <View style={styles.itemStyle}>
            <Text>
                Point({index + 1}):{item.latitude.toFixed(6)},{item.longitude.toFixed(6)}
            </Text>
        </View>
    );

    return (
        <Modal isVisible= {visible}>
            <View style = {styles.container}>
                <Text style = {styles.titleStyle}>
                    Polygon Coordinates
                </Text>

                <FlatList 
                    data = {data} 
                    renderItem = {renderCoordinates} 
                    keyExtractor={(item,index) => index.toString()} 
                />
                
                <Button title="Close" onPress = {onClose}/>
            </View>
        </Modal>
    )
};

export default polygonModal;
