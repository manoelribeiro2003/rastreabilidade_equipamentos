import React from "react"
import { View, StyleSheet, Text, Pressable } from "react-native"
import { MyDropdownPicker } from "@/src/components/controls/my-dropdown-picker"
import { COLOR_RED, PRIMARY_COLOR } from "@/src/theme/colors"
import { CardComponent } from "@/src/components/iu/card-component"
import Svg, { Path } from "react-native-svg"
import { adjustHexColor } from "@/src/theme/colors-utils"
import { SvgSetaBaixo } from "@/assets/svg"

function SvgLink(props: any) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#832A75"
            {...props}
        >
            <Path d="M0 0h24v24H0V0z" fill="none" />
            <Path d="M17 7h-4v2h4c1.65 0 3 1.35 3 3s-1.35 3-3 3h-4v2h4c2.76 0 5-2.24 5-5s-2.24-5-5-5zm-6 8H7c-1.65 0-3-1.35-3-3s1.35-3 3-3h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-2zm-3-4h8v2H8z" />
        </Svg>
    )
}

const ButtonCard = ({
    SvgElement = SvgLink,
    buttonSize = 60,
    onPress = () => alert("Botão Clicado"),
    defaultBackgroudColor = PRIMARY_COLOR,
    defaultlightenHex = 0.75,
}) => {
    const baseBackground = adjustHexColor(
        defaultBackgroudColor,
        defaultlightenHex
    );

    const pressedBackground = adjustHexColor(
        defaultBackgroudColor,
        defaultlightenHex - 0.1
    );

    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [
                buttonStyle.buttonView,
                {
                    width: buttonSize * 0.7,
                    borderRadius: buttonSize * 0.25,
                    backgroundColor: pressed ? pressedBackground : baseBackground,
                    opacity: pressed ? 0.85 : 1,
                    transform: [{ scale: pressed ? 0.95 : 1 }],
                },
            ]}
        >
            <SvgElement
                height={buttonSize * 0.4}
                style={{ aspectRatio: 1 }}
            />
        </Pressable>
    );
};

const GestaoSetup = () => {

    // const [open, setOpen] = useState(false);

    return (
        <>
            <View style={styles.containerGroup}>
                <View style={styles.containerControle}>
                    <Text style={styles.textLabel}>Fábrica</Text>
                    <MyDropdownPicker placeholder="" />
                </View>
                <View style={styles.containerControle}>
                    <Text style={styles.textLabel}>Setor</Text>
                    <MyDropdownPicker placeholder="" />
                </View>
                <View style={styles.containerControle}>
                    <Text style={styles.textLabel}>Situação</Text>
                    <MyDropdownPicker placeholder="" />
                </View>
            </View>

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
                    <View style={{ alignItems: 'center', marginTop: 10 }}>
                        <Text style={{ color: PRIMARY_COLOR }}>Solicitado:</Text>
                        <Text style={{ color: '#000' }}>05:43</Text>
                    </View>
                    <View style={{ alignItems: 'center', marginTop: 5, flex: 1 }}>
                        <Text style={{ color: '#000', fontWeight: '600', textAlign: 'center' }}>Setup Completo</Text>
                        <Text style={{ color: COLOR_RED, fontWeight: '600', fontSize: 16 }}>-02:16:23</Text>
                    </View>
                    <View style={{ alignItems: 'center', marginTop: 10 }}>
                        <Text style={{ color: PRIMARY_COLOR }}>Entrega:</Text>
                        <Text style={{ color: '#000' }}>06:30</Text>
                    </View>
                </View>
                <View style={styles.viewSituacao}>
                    <Text style={{ color: '#fff', fontWeight: '600', fontSize: 16 }}>Pendente</Text>
                </View>
                <Text style={{ color: PRIMARY_COLOR, fontWeight: '600', fontSize: 16, marginTop: 15 }}>PINTURA - S7P76</Text>
                <View style={styles.viewLabels}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ color: PRIMARY_COLOR, fontSize: 15 }}>Combinação Atual: </Text>
                            <Text style={{ color: '#000', fontSize: 15 }}>5320 - 21307</Text>
                        </View>
                        <ButtonCard />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ color: PRIMARY_COLOR, fontSize: 15 }}>Combinação Futura: </Text>
                            <Text style={{ color: '#000', fontSize: 15 }}>83991 - BZ240</Text>
                        </View>
                        <ButtonCard />
                    </View>
                </View>
                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'flex-end', marginTop: 10 }}>
                    <ButtonCard
                        SvgElement={
                            (props) => (
                                <SvgSetaBaixo {...props} fill={PRIMARY_COLOR} />
                            )
                        }
                    />
                </View>
                {/* <View style={stylesModal.container}>
                    <Button
                        title="Abrir Modal"
                        onPress={() => setOpen(true)}
                    />

                    <Modal
                        visible={open}
                        transparent
                        animationType="fade"
                    >
                        <View style={stylesModal.overlay}>
                            <View style={stylesModal.modal}>
                                <Text>Meu modal</Text>

                                <Button
                                    title="Fechar"
                                    onPress={() => setOpen(false)}
                                />
                            </View>
                        </View>
                    </Modal>
                </View> */}

            </CardComponent>
        </>
    )
}

const styles = StyleSheet.create({
    containerControle: {
        flex: 1,
    },
    textLabel: {
        color: PRIMARY_COLOR,
        fontSize: 16,
        fontWeight: '500',
    },
    containerGroup: {
        width: '100%',
        padding: 5,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: PRIMARY_COLOR,
        borderRadius: 16,
        flexDirection: 'row',
        gap: 10
    },
    viewCardHeader: {
        flexDirection: 'row',
        width: '100%'
    },
    viewSituacao: {
        backgroundColor: COLOR_RED,
        width: '80%',
        borderRadius: 20,
        alignItems: 'center',
        marginTop: 10
    },
    viewLabels: {
        alignSelf: 'flex-start',
        marginTop: 15,
        gap: 10,
        width: '100%',
    }
});

const buttonStyle = StyleSheet.create({
    buttonView: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0)',
        aspectRatio: 1,
    },
    pressable: {
        width: '100%',
        aspectRatio: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

// const stylesModal = StyleSheet.create({
//     container: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//     },

//     overlay: {
//       flex: 1,
//       backgroundColor: 'rgba(0,0,0,0.5)',
//       justifyContent: 'center',
//       alignItems: 'center',
//     },

//     modal: {
//       width: '80%',
//       backgroundColor: 'white',
//       padding: 20,
//       borderRadius: 12,
//     },
//   });

export default GestaoSetup