import { MyTextInputButton } from '@/src/components/controls/my-text-input-button'
import { Text, View, StyleSheet } from 'react-native';
import { PRIMARY_COLOR } from '@/src/theme/colors'

export default function AtualizarLocalizacao() {

  return (
    <>
      <View style={styles.containerControle}>
        <Text style={styles.textLabel}>BEM</Text>
        <MyTextInputButton
          placeholder='Quantidade de equipamentos'
        />
      </View>
    </>
  );
}

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