import React from "react"
import { View, StyleSheet, Text } from "react-native"
import { MyDropdownPicker } from "@/src/components/controls/my-dropdown-picker"
import { PRIMARY_COLOR } from "@/src/theme/colors"

const GestaoSetup = () => {
    return (
        <>
            <View style={{ flexDirection: 'row', gap: 10 }}>
                <View style={styles.containerControle}>
                    <Text style={styles.textLabel}>Fábrica</Text>
                    <MyDropdownPicker placeholder=""/>
                </View>
                <View style={styles.containerControle}>
                    <Text style={styles.textLabel}>Setor</Text>
                    <MyDropdownPicker placeholder=""/>
                </View>
                <View style={styles.containerControle}>
                    <Text style={styles.textLabel}>Situação</Text>
                    <MyDropdownPicker placeholder=""/>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    containerControle: {
        flex: 1,
        marginBottom: 15,
    },
    textLabel: {
        color: PRIMARY_COLOR,
        fontSize: 16,
        fontWeight: '500'
    }
});

export default GestaoSetup