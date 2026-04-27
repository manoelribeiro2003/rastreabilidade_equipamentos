import React from 'react';
import { MyTextInputButton } from '@/src/components/controls/my-text-input-button'
import { MyDropdownPicker } from '@/src/components/controls/my-dropdown-picker'
import { CardComponent } from '@/src/components/iu/card-component'
import { Text, View, StyleSheet } from 'react-native';
import { PRIMARY_COLOR } from '@/src/theme/colors'
import { MyTextInput } from '@/src/components/controls/my-text-input';

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
          />
        </View>
        <View style={styles.containerControle}>
          <Text style={styles.textLabel}>Fábrica</Text>
          <MyTextInput
            editable={false}
          />
        </View>
        <View style={styles.containerControle}>
          <Text style={styles.textLabel}>Localização Atual</Text>
          <MyTextInput
            editable={false}
          />
        </View>
      </CardComponent>

      <View style={styles.containerGroup}>

        <View style={styles.containerSubGroupExt}>
          <View style={styles.containerSubGroupIn}>
            <View style={styles.containerControle}>
              <Text style={styles.textLabel}>Filial</Text>
              <MyDropdownPicker />
            </View>
            <View style={styles.containerControle}>
              <Text style={styles.textLabel}>*Fábrica</Text>
              <MyDropdownPicker />
            </View>
          </View>

        </View>

      </View>

    </>
  );
}

const styles = StyleSheet.create({
  containerControle: {
    marginBottom: 15,
  },
  containerControleIn:{
    flex: 1,
  },
  textLabel: {
    color: PRIMARY_COLOR,
    fontSize: 16,
    fontWeight: '500'
  },
  containerGroup: {
    width: '100%',
    padding: 10,
    marginTop: 20,
    borderWidth: 1,
    borderColor: PRIMARY_COLOR,
    borderRadius: 16
  },
  containerSubGroupExt: {
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: 'red'
  },
  containerSubGroupIn: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'blue'
  }

});