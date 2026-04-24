import { Slot, useLocalSearchParams } from 'expo-router';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { PRIMARY_COLOR } from '@/src/theme/colors';




export default function Layout() {

    const { title } = useLocalSearchParams();
    const MainHeader = () => (
        <View style={styles.containerTitleBar}>
            <Text style={styles.titleBar}>{title.toUpperCase() || 'App'}</Text>
        </View>
    )

    return (
        <View style={{ flex: 1 }}>
            <MainHeader />
            <Slot />
        </View>
    );
}

const styles = StyleSheet.create({
    containerTitleBar: {
        marginTop: StatusBar.currentHeight || 0,
        height: 60,
        backgroundColor: PRIMARY_COLOR,
        elevation: 1,
        borderBottomRightRadius: 13,
        borderBottomLeftRadius: 13,
        justifyContent: 'center'

    },
    titleBar: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'center'
    }
});