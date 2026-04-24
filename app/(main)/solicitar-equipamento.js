import { StyleSheet, Text, View } from 'react-native';
import { MyDropdownPicker } from '../../src/components/controls/my-dropdown-picker';
import { MyTextInput } from '../../src/components/controls/my-text-input';
import { ButtonPrimary } from '../../src/components/buttons/button-primary';
import { PRIMARY_COLOR } from '../../src/theme/colors';

const SolicitarEquipamentoScreen = () => (
    <View style={styles.containerScreen}>
        {/*<TouchableOpacity
            style={styles.botaoOpcoes}
            activeOpacity={0.4}
        >
            <Ionicons name="options" size={24} color={'#000'} />
        </TouchableOpacity>*/}
        {/*<BottomSheet />*/}
        <View style={styles.containerControle}>
            <Text style={styles.textLabel}>Filial Destino</Text>
            <MyDropdownPicker
                placeholder='Selecione a Filial'
            />
        </View>
        <View style={styles.containerControle}>
            <Text style={styles.textLabel}>Fábrica Destino</Text>
            <MyDropdownPicker
                placeholder='Selecione a Fábrica'
            />
        </View>
        <View style={styles.containerControle}>
            <Text style={styles.textLabel}>Setor Destino</Text>
            <MyDropdownPicker
                placeholder='Selecione o Setor'
            />
        </View>
        <View style={styles.containerControle}>
            <Text style={styles.textLabel}>Solicitante</Text>
            <MyTextInput
                placeholder='Nome do solicitante'
                defaultValue="Manoel Ribeiro do Nascimento"
            />
        </View>
        <View style={styles.containerControle}>
            <Text style={styles.textLabel}>Equipamento</Text>
            <MyDropdownPicker
                placeholder='Selecione o Equipamento'
            />
        </View>
        <View style={styles.containerControle}>
            <Text style={styles.textLabel}>Quantidade</Text>
            <MyTextInput
                placeholder='Quantidade de equipamentos'
                defaultValue={1}
            />
        </View>

        <ButtonPrimary
            textButton='Solicitar Equipamento'
            onPress={() => (alert('Equipamento solicitado com sucesso'))}
        />


    </View>
)

const styles = StyleSheet.create({
    containerScreen: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 20,
        alignItems: 'center'
    },
    botaoOpcoes: {
        marginTop: 20,
        alignSelf: 'flex-end',
        marginRight: 20,
    },
    containerControle: {
        minWidth: 330,
        maxWidth: 400,
        marginBottom: 15
    },
    textLabel: {
        color: PRIMARY_COLOR,
        fontSize: 16,
        fontWeight: '500'
    }
});

export default SolicitarEquipamentoScreen