import { Pressable, StyleSheet, Text, View, DimensionValue } from 'react-native'
import { SvgSetaBaixo } from '../../../assets/svg/index'
import { PRIMARY_COLOR } from '../../theme/colors'
import { adjustHexColor } from '../../theme/colors-utils'

export const MyDropdownPicker = ({
    placeholder = "Selecione..." as string,
    onPress = () => (console.log(placeholder)),
    maxWidth = 40 as DimensionValue,
    height = 35 as DimensionValue
}) => {
    return (
        <View style={[styles.containerView]}>
            <Pressable
                onPress={onPress}
                style={({ pressed }) => [
                    styles.pressable,
                    {
                        /*transform: [{ scale: pressed ? 0.95 : 1 }],*/
                        opacity: pressed ? 0.9 : 1,
                        backgroundColor: pressed ? adjustHexColor(PRIMARY_COLOR, 0.8) : '#fff',
                        height: height
                    },
                ]}
            >
                <Text style={[styles.placeholder,]}>{placeholder}</Text>
                <View style={[styles.containerSeta, { maxWidth: maxWidth }]}>
                    <SvgSetaBaixo />
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    containerView: {
        borderWidth: 1,
        borderColor: PRIMARY_COLOR,
        borderRadius: 14,
        overflow: 'hidden',
        width: '100%',
        flexDirection: 'row',
    },
    pressable: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        flex: 1
    },
    containerSeta: {
        backgroundColor: PRIMARY_COLOR,
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
        alignSelf: 'flex-end'
    },
    placeholder: {
        paddingLeft: 8,
        textAlignVertical: 'center',
        fontSize: 16,
        fontWeight: '500'
    }
})