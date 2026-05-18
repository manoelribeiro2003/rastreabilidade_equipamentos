import React, { useState } from "react"
import { View, StyleSheet, Text, Switch, FlatList } from "react-native"
import { MyDropdownPicker } from "@/src/components/controls/my-dropdown-picker"
import { PRIMARY_COLOR } from "@/src/theme/colors"

type FabricaStatus = {
    producao: number;
    manutencao: number;
    estoque: number;
    transito: number;
};

type Fabrica = {
    id: number;
    nome: string;
    quantidadeTotal: number;
    status: FabricaStatus;
};

const RastrearEquipamento = () => {

    const [ativo, setAtivo] = useState(false);
    const dadosFabricas: Fabrica[] = [
        {
            id: 1,
            nome: 'FÁBRICA 1',
            quantidadeTotal: 1031,
            status: {
                producao: 315,
                manutencao: 45,
                estoque: 242,
                transito: 10,
            },
        },

        {
            id: 2,
            nome: 'FÁBRICA 2',
            quantidadeTotal: 6,
            status: {
                producao: 0,
                manutencao: 0,
                estoque: 0,
                transito: 4,
            },
        },

        {
            id: 3,
            nome: 'FÁBRICA 3',
            quantidadeTotal: 1,
            status: {
                producao: 1,
                manutencao: 0,
                estoque: 0,
                transito: 0,
            },
        },

        {
            id: 5,
            nome: 'FÁBRICA 5',
            quantidadeTotal: 1092,
            status: {
                producao: 371,
                manutencao: 15,
                estoque: 1,
                transito: 2,
            },
        },

        {
            id: 6,
            nome: 'FÁBRICA 6',
            quantidadeTotal: 1462,
            status: {
                producao: 916,
                manutencao: 6,
                estoque: 215,
                transito: 14,
            },
        },
        {
            id: 7,
            nome: 'FÁBRICA 7',
            quantidadeTotal: 1496,
            status: {
                producao: 1167,
                manutencao: 45,
                estoque: 251,
                transito: 3,
            },
        },
    ];



    return (
        <View style={styles.containerScreen}>
            <View style={styles.containerGroup}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.textLabel}>Filial:</Text>
                    <MyDropdownPicker placeholder="" />
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={styles.textLabel}>Fábrica:</Text>
                    <MyDropdownPicker placeholder="" />
                </View>
            </View>
            <View style={styles.controle}>
                <Text style={styles.textLabel}>Família:</Text>
                <MyDropdownPicker placeholder="" />
            </View>
            <View style={styles.controle}>
                <Text style={styles.textLabel}>Equipamento:</Text>
                <MyDropdownPicker placeholder="" />
            </View>

            <View style={styles.toggleButton}>
                <Switch
                    trackColor={{ true: PRIMARY_COLOR }}
                    thumbColor="#fff"
                    value={ativo}
                    onValueChange={setAtivo}
                />
                <Text>Visão Geral</Text>
            </View>

            <View style={resumoDimen.conteinerResumoDimen}>
                <FlatList
                    data={dadosFabricas}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={resumoDimen.cardFabrica}>

                            <View style={resumoDimen.cabecalhoFabrica}>
                                <Text style={resumoDimen.labelFabrica}>
                                    {item.nome}
                                </Text>

                                <Text style={resumoDimen.qtdFabrica}>
                                    QTD: {item.quantidadeTotal}
                                </Text>
                            </View>

                            <View style={resumoDimen.statusContainer}>

                                <View style={[resumoDimen.status, resumoDimen.producao,]}>
                                    <Text style={resumoDimen.statusText}>
                                        Produção: {item.status.producao}
                                    </Text>
                                </View>

                                <View style={[resumoDimen.status, resumoDimen.manutencao,]}>
                                    <Text style={resumoDimen.statusText}>
                                        Manutenção: {item.status.manutencao}
                                    </Text>
                                </View>

                                <View style={[resumoDimen.status, resumoDimen.estoque,]}>
                                    <Text style={resumoDimen.statusText}>
                                        Estoque: {item.status.estoque}
                                    </Text>
                                </View>

                                <View style={[resumoDimen.status, resumoDimen.transito,]}>
                                    <Text style={resumoDimen.statusText}>
                                        Trânsito: {item.status.transito}
                                    </Text>
                                </View>

                            </View>
                        </View>
                    )}
                    numColumns={1}
                    contentContainerStyle={{
                        paddingBottom: 50,
                        gap: 14,
                    }}
                    showsVerticalScrollIndicator={false}
                />
            </View>

        </View>
    )
}




const styles = StyleSheet.create({
    containerScreen: {
        flex: 1,
        flexGrow: 1,
        padding: 20,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    textLabel: {
        color: PRIMARY_COLOR,
        fontSize: 16,
        fontWeight: '500',
    },
    containerGroup: {
        width: '100%',
        borderRadius: 16,
        flexDirection: 'row',
        gap: 10,
    },
    controle: {
        marginTop: 5
    },

    toggleButton: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start'
    },

});

const resumoDimen = StyleSheet.create({
    conteinerResumoDimen: {
        alignItems: 'stretch',
        width: '100%',
        flex: 1
    },
    cardFabrica: {
        backgroundColor: PRIMARY_COLOR,
        padding: 10,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#fff',
    },
    cabecalhoFabrica: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    labelFabrica: {
        color: 'white',
        fontSize: 18

    },
    qtdFabrica: {
        color: 'white',
        fontSize: 18

    },
    statusContainer: {
        flexDirection: 'row'

    },
    status: {
        padding: 7,
        borderRadius: 15
    },
    statusText: {
        fontSize: 14,
        color: 'black',


    },
    producao: {
        backgroundColor: 'white'

    },
    manutencao: {
        
    },
    estoque: {

    },
    transito: {

    }
});

export default RastrearEquipamento