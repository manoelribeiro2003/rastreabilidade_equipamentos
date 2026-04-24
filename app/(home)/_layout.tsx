import { View, StyleSheet, Text, StatusBar, Image } from 'react-native';
import { Slot } from 'expo-router';
import ButtonTitleBar from '../../src/components/button-title-bar';
import { SvgRefresh, SvgSair } from '../../assets/svg/index';
import PRIMARY_COLOR from '../../src/config/theme';

const HeaderHomeScreen = () => (
  <View style={styles.headerContainer}>
    <View style={styles.containerImgPerfil}>
      <Image
        source={require('../../assets/images/imagem-de-perfil.png')}
        style={{ height: '100%', aspectRatio: 1 }}
      />
    </View>

    <View style={styles.containerNomeUsuario}>
      <Text style={{ color: '#fff', fontSize: 18 }}>
        Manoel Ribeiro
      </Text>
    </View>

    <View style={styles.containerBotoesHeader}>
      <ButtonTitleBar SvgElement={SvgRefresh} />
      <ButtonTitleBar SvgElement={SvgSair} />
    </View>
  </View>
);

export default function Layout() {
  return (
    <View style={{ flex: 1 }}>
      <HeaderHomeScreen />
      <Slot />
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    height: 100,
    marginTop: StatusBar.currentHeight || 0,
    padding: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: PRIMARY_COLOR,
  },
  containerImgPerfil: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    marginRight: 10
  },
  containerBotoesHeader:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
    gap: 20,
  }
});