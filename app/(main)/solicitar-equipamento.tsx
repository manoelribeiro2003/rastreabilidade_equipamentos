import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MyDropdownPicker } from '../../src/components/controls/my-dropdown-picker';
import { MyTextInput } from '../../src/components/controls/my-text-input';
import { ButtonPrimary } from '../../src/components/buttons/button-primary';
import { PRIMARY_COLOR } from '../../src/theme/colors';

const SolicitarEquipamentoScreen = () => (
    <>
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
                defaultValue={"1"}
                keyboardType='numeric'
            />
        </View>

        <ButtonPrimary
            textButton='Solicitar Equipamento'
            onPress={() => (alert('Equipamento solicitado com sucesso'))}
        />


    </>
)

const styles = StyleSheet.create({
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