import React from "react";
import { StyleSheet, Dimensions, Modal, View, Text } from "react-native";

export default ({ children, visibility }) => {
    return (
            <Modal 
                animationType='slide'
                transparent={true}
                visible={visibility}
            >
                <View style={styles.center}>
                    <View style={styles.modalView}>
                        {children}
                    </View>
                </View>
            </Modal>
    )
}

const styles = StyleSheet.create({
    center: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgb(0,0,0,0.3)'
    },
    modalView: {
        minWidth: Dimensions.get('window').height -250,
        backgroundColor: '#fff',
        borderRadius: 4,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 3,
        }
    }
});
