import { StyleSheet, TextInput, View, KeyboardTypeOptions, Pressable, DimensionValue } from 'react-native'
import { PRIMARY_COLOR } from '@/src/theme/colors'
import { SvgBarCodeScanner } from '@/assets/svg'
import { adjustHexColor } from '../../theme/colors-utils'

export const MyTextInputButton = ({
    placeholder = "Digite...",
    defaultValue = '' as string | number,
    keyboardType = 'default' as KeyboardTypeOptions,
    onPress = () => (console.log(placeholder)),
    buttonWidth = 60 as DimensionValue,
    height = 35 as DimensionValue
}) => (
    <View style={styles.containerView}>
        <TextInput
            placeholder={placeholder}
            style={styles.textInput}
            defaultValue={defaultValue.toString()}
            keyboardType={keyboardType}
        />
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [
                styles.pressable,
                {
                    opacity: pressed ? 0.9 : 1,
                    backgroundColor: pressed ? adjustHexColor(PRIMARY_COLOR, 0.8) : '#fff',
                    width: buttonWidth,
                    height: height
                },
            ]}
        >
            {({ pressed }) => (
                <View style={styles.containerSVG}>
                    <SvgBarCodeScanner
                        style={{ transform: [{ scale: pressed ? 0.95 : 1 }] }}
                    />
                </View>
            )}
        </Pressable>
    </View>
)

const styles = StyleSheet.create({
    containerView: {
        borderWidth: 1,
        borderColor: PRIMARY_COLOR,
        borderRadius: 14,
        overflow: 'hidden',
        flexDirection: 'row',
        width: '100%'
    },
    textInput: {
        flex: 1,
        paddingLeft: 8,
        textAlignVertical: 'center',
        fontSize: 16,
        fontWeight: '500',
        padding: 0,
        height: '100%'
    },
    pressable: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'stretch',
    },
    containerSVG: {
        flex: 1,
        backgroundColor: PRIMARY_COLOR,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
})