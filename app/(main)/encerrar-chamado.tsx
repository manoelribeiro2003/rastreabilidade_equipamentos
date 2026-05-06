import { MyTextInput } from "@/src/components/controls/my-text-input"
import { CardComponent } from "@/src/components/iu/card-component"
import { PRIMARY_COLOR } from "@/src/theme/colors"
import React from "react"
import { Text, View, StyleSheet } from "react-native"
import { MaterialCommunityIcons } from '@expo/vector-icons'

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
})

export default EncerrarChamado