import { MyTextInput } from "@/src/components/controls/my-text-input"
import { CardComponent } from "@/src/components/iu/card-component"
import { COLOR_RED, PRIMARY_COLOR } from "@/src/theme/colors"
import React from "react"
import { Text, View, StyleSheet } from "react-native"
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { ButtonPrimary } from "@/src/components/buttons/button-primary"

const EncerrarChamado = () => (
    <>
        <View style={styles.viewMyTextInput}>
            <MyTextInput
                style={{ textAlign: 'center' }}
                placeholder="Digite sua busca"
            />
        </View>

        <Text style={{ fontSize: 18, marginVertical: 20 }}>Número de Máquinas Atendidas: <Text style={{ color: PRIMARY_COLOR }}>1</Text></Text>

        <CardComponent style={{
            boxShadow: [
                {
                    offsetX: 0,
                    offsetY: 4,
                    blurRadius: 10,
                    spreadDistance: 0,
                    color: 'rgba(0, 0, 0, 0.1)',
                    inset: false,
                },
            ],
            padding: 0,
            paddingHorizontal: 20,
            paddingBottom: 20
        }}>
            <View style={styles.viewCardHeader}>
                <Text style={{ color: PRIMARY_COLOR, marginTop: 20 }}>BEM: <Text style={{ color: '#000' }}>389525</Text></Text>
                <View style={[styles.timeContainer, { marginTop: 10 }]}>
                    <MaterialCommunityIcons
                        name='clock-time-four-outline'
                        color='#000'
                        size={24}
                    />
                    <Text>1h:48m</Text>

                </View>
                <Text style={{ marginTop: 20 }}>10/03/26 11:46</Text>
            </View>
            <View style={styles.viewMoviSolic}>
                <Text style={{ color: '#fff', fontWeight: '600', }}>Substituição de Equipamento</Text>
            </View>
            <Text style={styles.textFamiliaSolic}>MÁQUINA DE SOLDAGEM POR RADIOFREQUÊNCIA</Text>
            <Text style={styles.textLabel}>Local: <Text style={{ color: '#000' }}>S7M01</Text></Text>
            <Text style={styles.textLabel}>Solicitante: <Text style={{ color: '#000' }}>Manoel Ribeiro do Nascimento</Text></Text>
            <Text style={styles.textLabel}>Serviço: <Text style={{ color: '#000' }}>Manutenção de Equipamento</Text></Text>
            <Text style={styles.textLabel}>Desligar Áudio: <Text style={{ color: '#000' }}>S7M01</Text></Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, gap: 15 }}>
                <ButtonPrimary
                    style={styles.actionButton}
                    textButton="Finalizar"
                />
                <ButtonPrimary
                    backgroundColor={COLOR_RED}
                    style={styles.actionButton}
                    textButton="Excluir"
                />
            </View>

        </CardComponent>
    </>
)

const styles = StyleSheet.create({
    viewMyTextInput: {
        width: '65%'
    },
    viewCardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },
    timeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    viewMoviSolic: {
        backgroundColor: COLOR_RED,
        width: '80%',
        borderRadius: 20,
        alignItems: 'center',
        marginTop: 10
    },
    textFamiliaSolic: {
        color: PRIMARY_COLOR,
        fontWeight: '800',
        textAlign: 'center',
        marginTop: 10
    },
    textLabel: {
        color: PRIMARY_COLOR,
        fontWeight: '500',
        alignSelf: 'flex-start',
        marginTop: 10
    },
    actionButton:
    {
        width: 120,
        height: 45
    }
})

export default EncerrarChamado