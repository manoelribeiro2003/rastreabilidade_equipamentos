import React from 'react';
import { MyTextInputButton } from '@/src/components/controls/my-text-input-button'
import { Text, View, StyleSheet, Pressable } from 'react-native';
import { PRIMARY_COLOR } from '@/src/theme/colors';
import { CardComponent } from '@/src/components/iu/card-component'
import { MyTextInput } from '@/src/components/controls/my-text-input';
import { MyDropdownPicker } from '@/src/components/controls/my-dropdown-picker'
import { ButtonPrimary } from '@/src/components/buttons/button-primary';
import Svg, { Path } from "react-native-svg";
import styleButton from './button-style';

const ButtonPhoto = ({
    SvgElement = function SvgPhoto(props: any) {
        return (
            <Svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#fff"
                {...props}
            >
                <Path d="M0 0h24v24H0V0z" fill="none" />
                <Path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.9 13.98l2.1 2.53 3.1-3.99c.2-.26.6-.26.8.01l3.51 4.68a.5.5 0 01-.4.8H6.02c-.42 0-.65-.48-.39-.81L8.12 14c.19-.26.57-.27.78-.02z" />
            </Svg>
        )
    },
    buttonSize = 70,
    textButton = "Ver Foto",
    onPress = () => alert(textButton)
}) => (

    <View style={[styleButton.buttonContainer, { width: buttonSize, height: buttonSize + buttonSize * 0.07 }]}>

        <View style={[styleButton.buttonView, { borderRadius: buttonSize * 0.2, width: buttonSize * 0.7 }]}>
            <Pressable
                onPress={onPress}
                style={({ pressed }) => [
                    styleButton.pressable,
                    {
                        transform: [{ scale: pressed ? 0.95 : 1 }],
                        opacity: pressed ? 0.85 : 1,
                    },
                ]}
            >
                <SvgElement
                    height={buttonSize * 0.4}
                    width={buttonSize * 0.4}
                />
            </Pressable>
        </View>
        <Text style={[styleButton.textButton, { fontSize: buttonSize * 0.18 }]}>{textButton}</Text>

    </View>
);

export default function SolicitacaoRecolhimento() {
    return (
        <>
            <View style={[styles.containerControle, { marginHorizontal: 20 }]}>
                <Text style={styles.textLabel}>BEM Recolhimento</Text>
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
                    <Text style={styles.textLabel}>Equipamento</Text>
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

            <ButtonPhoto />

            <ButtonPrimary
                textButton='Solicitar'
                onPress={() => (alert('Solicitado com sucesso'))}
            />
        </>
    )
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
        marginTop: 20,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: PRIMARY_COLOR,
        borderRadius: 16
    },

});