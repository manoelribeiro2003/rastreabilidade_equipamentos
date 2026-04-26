import { router } from 'expo-router';
import { FlatList, StatusBar, StyleSheet, View } from 'react-native';
import {
  SvgAtualizarLocalizacao,
  SvgCadastroDeEquipamento,
  SvgConfiguracoes,
  SvgEmManutencao,
  SvgEncerrarChamado,
  SvgEnviosERecebimentos,
  SvgEquipamentosConsertados,
  SvgEquipamentosEmEstoque,
  SvgGestaoDeSetup,
  SvgHistoricoDeSetups,
  SvgHistoricoDeTransferencias,
  SvgHistoricoMovimentacoes,
  SvgRastrearEquipamento,
  SvgSolicitacoesDeSetup,
  SvgSolicitacoesEquipamentos,
  SvgSolicitarEquipamento
} from '../../assets/svg/index';
import ButtonHomeScreen from '../../src/components/buttons/button-home-screen';
import { PRIMARY_COLOR } from '../../src/theme/colors'


const botoes = [
  { key: 1, textButton: "Solicitar Equipamento", SvgElement: SvgSolicitarEquipamento, route: "/(main)/solicitar-equipamento" },
  { key: 2, textButton: "Em Manutenção", SvgElement: SvgEmManutencao, route: "/(main)/em-manutencao" },
  { key: 3, textButton: "Cadastro de Equipamento", SvgElement: SvgCadastroDeEquipamento, route: "/(main)/cadastro-equipamento" },
  { key: 4, textButton: "Atualizar Localização", SvgElement: SvgAtualizarLocalizacao, route: "/(main)/atualizar-localizacao" },
  { key: 5, textButton: "Rastrear Equipamento", SvgElement: SvgRastrearEquipamento, route: "/(main)/rastrear-equipamento" },
  { key: 6, textButton: "Solicitações de Equipamentos", SvgElement: SvgSolicitacoesEquipamentos, route: "/(main)/solicitacoes-equipamentos" },
  { key: 7, textButton: "Solicitações de Setup", SvgElement: SvgSolicitacoesDeSetup, route: "/(main)/solicitacoes-setup" },
  { key: 8, textButton: "Equipamentos em Estoque", SvgElement: SvgEquipamentosEmEstoque, route: "/(main)/equipamentos-estoque" },
  { key: 9, textButton: "Envios e Recebimentos", SvgElement: SvgEnviosERecebimentos, route: "/(main)/envios-recebimentos" },
  { key: 10, textButton: "Encerrar Chamado", SvgElement: SvgEncerrarChamado, route: "/(main)/encerrar-chamado" },
  { key: 11, textButton: "Equipamentos Consertados", SvgElement: SvgEquipamentosConsertados, route: "/(main)/equipamentos-consertados" },
  { key: 12, textButton: "Histórico de Transferências", SvgElement: SvgHistoricoDeTransferencias, route: "/(main)/historico-transferencias" },
  { key: 13, textButton: "Gestão de Setup", SvgElement: SvgGestaoDeSetup, route: "/(main)/gestao-setup" },
  { key: 14, textButton: "Histórico de Movimentações", SvgElement: SvgHistoricoMovimentacoes, route: "/(main)/historico-movimentacoes" },
  { key: 15, textButton: "Histórico de Setups", SvgElement: SvgHistoricoDeSetups, route: "/(main)/historico-setups" },
  { key: 16, textButton: "Configurações", SvgElement: SvgConfiguracoes, route: "/(main)/configuracoes" },
] as const

const HomeScreen = () => (
  <View style={styles.containerScreen}>

    <View style={styles.mainContainer}>

      <FlatList
        data={botoes}
        keyExtractor={(item) => item.key.toString()}
        renderItem={({ item }) => (
          <ButtonHomeScreen
            SvgElement={item.SvgElement}
            textButton={item.textButton}
            onPress={() =>
              router.push({
                pathname: item.route as any,
                params: { title: item.textButton }
              })
            }
          />
        )}
        numColumns={3}
        columnWrapperStyle={{ justifyContent: 'space-around' }}
        contentContainerStyle={{ paddingBottom: 50 }}
        showsVerticalScrollIndicator={false}
      />

    </View>

  </View>
);

const styles = StyleSheet.create({
  containerScreen: {
    flex: 1,
    backgroundColor: PRIMARY_COLOR,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  mainContainer: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    paddingHorizontal: 20,
    paddingTop: 30,
    alignItems: 'stretch',
  },
});

export default HomeScreen;