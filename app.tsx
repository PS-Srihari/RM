import React, { useState } from 'react';
import {View, Button} from 'react-native';
import styles from './styles';
import map from './src/components/map';
import missionModal from './src/components/missionModal/index';
import polygonModal from './src/components/polygonModal/index';

const app = () => {
    const [isDrawing,setIsDrawing] = useState(false)
    const [missionData,setMissionData] = useState([])
    const [polygonData,setPolygonData] = useState([])
    const [modalType, setModalType] = useState(null);
    
    const toggleDrawing = () => {
        setIsDrawing(!isDrawing)
    }
    const openModal = (type,data) => {
        setModalType(type)
    };

    const closeModal = () => {
        setModalType(null)
    };

    const updateMissionData = (data) => {
        setMissionData(data)
    };

    const updatePolygonData = (data) => {
        setPolygonData(data)
    };

    return(
        <View style={styles.container}>
            <Button title = {isDrawing ? "Stop Drawing": "Draw on Map"} onPress= {toggleDrawing}/>

            <map 
                isDrawing = {isDrawing} 
                updateMissionData = {updateMissionData}
                updatePolygonData = {updatePolygonData}
                openModal = {openModal}
            />

            {modalType === 'mission' && (
                <missionModal
                    visible = {modalType === "mission"}
                    data = {missionData}
                    onClose = {closeModal}
             />)}
            
            {modalType === 'polygon' && (
                <polygonModal
                    visible = {modalType === "polygon"}
                    data = {polygonData}
                    onClose = {closeModal}
            />)}
        </View>
    );
};

export default app