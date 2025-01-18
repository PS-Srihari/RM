import React, { useState } from 'react';
import styles from './styles';
import MapView, { Polyline, Polygon} from 'react-native-maps';

interface Props{
    isDrawing : boolean;
    updataMissionData : any;
    updatePolygonData: any;
    openModal: (type) => void;
}

const map = ({isDrawing,updataMissionData,updatePolygonData,openModal}:Props)  => {
    const [lineCoordinates, setLineCoordinates] = useState([]);
    const [polygonCoordinates, setPolygonCoordinates] = useState([]);
    const [currentMode, setCurrentMode] = useState<any>('LineString');

    const handleMapPress = (e: any) => {
        const coordinate = e.nativeEvent.coordinate;

        if(currentMode === 'LineString' && isDrawing){
        const newCoordinates = [...lineCoordinates, coordinate];
        setLineCoordinates(newCoordinates)
        updataMissionData(newCoordinates)
        }

        if(currentMode === 'Polygon' && isDrawing){
        const newCoordinates = [...polygonCoordinates, coordinate]
        setPolygonCoordinates(newCoordinates)
        updatePolygonData(newCoordinates)
        } 
    };

    const finishDrawing = () => {
        if(currentMode === 'LineString'){
            openModal('mission')
        }else if(currentMode === 'Polygon'){
            openModal('polygon')
        }
        setCurrentMode(null)
    };

    return (
        <MapView 
            style ={styles.mapStyle}
            onPress = {handleMapPress}
            onLongPress = {finishDrawing}
        >
            {lineCoordinates.length > 0 && (
                <Polyline 
                    coordinates={lineCoordinates}
                    fillColor='rgba(0, 255, 255, 0.3)'
                    strokeColor='green'
                    strokeWidth = {3}
                />
            )}
        </MapView>
    )
};

export default map;