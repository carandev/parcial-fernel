import React from "react";
import { StyleSheet, Dimensions, } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default ({ onlongPress, puntos, pointsFilter }) => {
    return (
        <MapView
            style={styles.map}
            onLongPress={onlongPress}
        >
            {pointsFilter && puntos.map(x =>
                <Marker
                    key={x.name}
                    coordinate={x.coordinate}
                    title={x.name}
                />)}
        </MapView>
    )
}

const styles = StyleSheet.create({
    map: {
        width: Dimensions.get('window').width - 150,
        height: Dimensions.get('window').height,
    },
});
