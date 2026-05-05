import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { MyTextInputButton } from '@/src/components/controls/my-text-input-button'
import { MyDropdownPicker } from '@/src/components/controls/my-dropdown-picker'
import { CardComponent } from '@/src/components/iu/card-component'
import { PRIMARY_COLOR } from '@/src/theme/colors'
import { MyTextInput } from '@/src/components/controls/my-text-input';
import { ButtonPrimary } from '@/src/components/buttons/button-primary';

export default function AtualizarLocalizacao() {

  return (
    <>

      <View style={[styles.containerControle, { marginHorizontal: 20 }]}>
        <Text style={styles.textLabel}>BEM</Text>
        <MyTextInputButton
          placeholder='Digite o número de BEM'
          keyboardType='numeric'
        />
      </View>

      <CardComponent>
        <View style={styles.containerControle}>
          <Text style={styles.textLabel}>Família</Text>
          <MyTextInput
            editable={false}
            placeholder=''
          />
        </View>
        <View style={styles.containerControle}>
          <Text style={styles.textLabel}>Fábrica</Text>
          <MyTextInput
            editable={false}
            placeholder=''
          />
        </View>
        <View style={styles.containerControle}>
          <Text style={styles.textLabel}>Localização Atual</Text>
          <MyTextInput
            editable={false}
            placeholder=''
          />
        </View>
      </CardComponent>

      <View style={styles.containerGroup}>

        <View style={styles.containerSubGroup}>
          <View style={[styles.containerControle, { flex: 1 }]}>
            <Text style={styles.textLabel}>Filial</Text>
            <MyDropdownPicker />
          </View>
          <View style={[styles.containerControle, { flex: 1 }]}>
            <Text style={styles.textLabel}>*Fábrica</Text>
            <MyDropdownPicker />
          </View>
        </View>
        <View style={styles.containerSubGroup}>
          <View style={[styles.containerControle, { flex: 1 }]}>
            <Text style={styles.textLabel}>*Setor</Text>
            <MyDropdownPicker />
          </View>
          <View style={[styles.containerControle, { flex: 1 }]}>
            <Text style={styles.textLabel}>Local</Text>
            <MyDropdownPicker />
          </View>
        </View>

        <View style={styles.containerControle}>
          <Text style={styles.textLabel}>Motivo da Movimentação</Text>
          <MyDropdownPicker />
        </View>
        <View style={[styles.containerControle, { marginBottom: 0 }]}>
          <Text style={styles.textLabel}>Motivo do Concerto</Text>
          <MyTextInput
            editable={false}
            placeholder='Digite o motivo do concerto'
          />
        </View>

      </View>

      <ButtonPrimary
        textButton='Atualizar'
        onPress={() => (alert('Equipamento atualizado com sucesso'))}
      />

    </>
  );
}

const styles = StyleSheet.create({
  containerControle: {
    marginBottom: 15,
  },
  textLabel: {
    color: PRIMARY_COLOR,
    fontSize: 16,
    fontWeight: '500'
  },
  containerGroup: {
    width: '100%',
    padding: 10,
    marginVertical: 20,
    borderWidth: 1,
    borderColor: PRIMARY_COLOR,
    borderRadius: 16
  },
  containerSubGroup: {
    flexDirection: 'row',
    gap: 10
  }

});