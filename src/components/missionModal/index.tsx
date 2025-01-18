import React from 'react';
import {View,Text,Button, StyleSheet,FlatList} from 'react-native';
import styles from './styles';
import Modal from 'react-native-modal';

interface missionProps{
    visible: boolean;
    data: any;
    onClose: () => {};
}
const missionModal = ({visible,data,onClose}:missionProps) => {
    const renderWayPoint = ({item,index}) => (
        <View style={styles.itemStyle}>
            <Text>
                WP({index + 1}):{item.latitude.toFixed(6)},{item.longitude.toFixed(6)}
            </Text>
        </View>
    );

    return (
        <Modal isVisible= {visible}>
            <View style = {styles.container}>
                <Text style = {styles.titleStyle}>
                    Mission WayPoints
                </Text>

                <FlatList 
                    data = {data} 
                    renderItem = {renderWayPoint} 
                    keyExtractor={(item,index) => index.toString()} 
                />
                
                <Button title="Close" onPress = {onClose}/>
            </View>
        </Modal>
    )
};

export default missionModal;
