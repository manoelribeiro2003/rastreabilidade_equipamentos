import React, { PropsWithChildren } from 'react'
import { View, StyleSheet, Text, DimensionValue, ViewProps } from 'react-native'



type CardProps = PropsWithChildren<{
    width?: DimensionValue;
    padding?: DimensionValue;
}> & ViewProps;



export const CardComponent = ({
    children,
    width = '100%',
    padding = 20,
    style,
    ...props

}: CardProps) => (
    <View style={[
        styles.container,
        {
            width: width,
            padding: padding,

        },
        style
    ]}
        {...props}
    >
        {children}
    </View>
)

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        borderRadius: 14,
        boxShadow: [
            {
                offsetX: 0,
                offsetY: 6,
                blurRadius: 20,
                spreadDistance: 0,
                color: 'rgba(0, 0, 0, 0.25)',
                inset: false,
            },
        ],
    }
})
