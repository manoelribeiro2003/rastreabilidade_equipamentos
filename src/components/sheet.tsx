import { StyleSheet, Dimensions, View, Text } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { GestureDetector, Gesture } from 'react-native-gesture-handler'

const DIMENSIONS = Dimensions.get('window')
export const SHEET_HEIGHT = 220

export const BottomSheet = () => {
    const pan = Gesture.Pan().onChange((event) => {
        console.log(event)
    });

    return (
        <GestureDetector gesture={pan}>
            <View style={styles.container}>
                <MaterialCommunityIcons
                    style={styles.dragIcon}
                    name='drag-horizontal'
                    color='#999'
                    size={24}
                />
                <Text style={styles.title}>OPÇÕES</Text>
            </View>
        </GestureDetector>
    )
}

const styles = StyleSheet.create({
    container: {
        width: DIMENSIONS.width,
        height: SHEET_HEIGHT,
        backgroundColor: '#1E1F23',

        position: 'absolute',
        bottom: 0,
    },
    title: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
        margin: 24
    },
    dragIcon: {
        marginTop: 16,
        alignSelf: 'center',
    }
})