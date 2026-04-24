import { View, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PRIMARY_COLOR from '../../src/config/theme';
import { BottomSheet } from '../../src/components/sheet';

const SolicitarEquipamentoScreen = () => (
    <View style={styles.containerScreen}>
        <TouchableOpacity
            style={styles.botaoOpcoes}
            activeOpacity={0.4}
        >
            <Ionicons name="options" size={24} color={'#000'} />
        </TouchableOpacity>
        <Text>Tela Solicitar Equipamento</Text>
        <BottomSheet />
    </View>
)

const styles = StyleSheet.create({
    containerScreen: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    botaoOpcoes: {
        marginTop: 20,
        alignSelf: 'flex-end',
        marginRight: 20
    }
});

export default SolicitarEquipamentoScreen