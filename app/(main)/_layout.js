import { View, StyleSheet, Text, StatusBar } from 'react-native';
import { Slot } from 'expo-router';
import { router, useLocalSearchParams } from 'expo-router';
import PRIMARY_COLOR from '../../src/config/theme';




 function Layout() {

    const { title } = useLocalSearchParams();
    const MainHeader = () => (
        <View style={styles.containerTitleBar}>
            <Text style={styles.titleBar}>{title || 'App'}</Text>
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
        paddingTop: StatusBar.currentHeight || 0,
        height: 110,
        backgroundColor: PRIMARY_COLOR,
        elevation: 1,
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,

    },
    titleBar: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    }
});

export default Layout;