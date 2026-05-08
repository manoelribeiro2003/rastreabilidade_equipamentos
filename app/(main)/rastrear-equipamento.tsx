import React from "react"
import { View, StyleSheet, Text, Pressable } from "react-native"
import { MyDropdownPicker } from "@/src/components/controls/my-dropdown-picker"
import { PRIMARY_COLOR } from "@/src/theme/colors"

const RastrearEquipamento = () => (
    <>
        <View style={styles.containerGroup}>
            <View style={{flex: 1}}>
                <Text style={styles.textLabel}>Filial</Text>
                <MyDropdownPicker placeholder="" />
            </View>
            <View style={{flex: 1}}>
                <Text style={styles.textLabel}>Fábrica</Text>
                <MyDropdownPicker placeholder="" />
            </View>
        </View>
        <View>
            <Text style={styles.textLabel}>Situação</Text>
            <MyDropdownPicker placeholder="" />
        </View>
        <View style={}>
            <Text style={styles.textLabel}>Situação</Text>
            <MyDropdownPicker placeholder="" />
        </View>

    </>

)

const styles = StyleSheet.create({
    textLabel: {
        color: PRIMARY_COLOR,
        fontSize: 16,
        fontWeight: '500',
    },
    containerGroup: {
        width: '100%',
        padding: 5,
        marginBottom: 10,
        borderRadius: 16,
        flexDirection: 'row',
        gap: 10
    },
});

export default RastrearEquipamento