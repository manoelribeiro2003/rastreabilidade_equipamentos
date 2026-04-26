import { StyleSheet, TextInput, View, KeyboardTypeOptions, Pressable } from 'react-native'
import { PRIMARY_COLOR } from '@/src/theme/colors'
import { SvgBarCodeScanner } from '@/assets/svg'
import { adjustHexColor } from '../../theme/colors-utils'

export const MyTextInputButton = ({
    placeholder = "Digite...",
    defaultValue = '' as string | number,
    keyboardType = 'default' as KeyboardTypeOptions,
    onPress = () => (console.log(placeholder)),
    width = 40 as number
}) => (
    <View style={styles.container}>
        <TextInput
            placeholder={placeholder}
            style={styles.placeholder}
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
                    width: width,
                },
            ]}
        >
            {({ pressed }) => (
                <View
                    style={[
                        styles.containerSVG,
                        { transform: [{ scale: pressed ? 0.95 : 1 }] }
                    ]}
                >
                    <SvgBarCodeScanner />
                </View>
            )}
        </Pressable>
    </View>
)

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: PRIMARY_COLOR,
        borderRadius: 14,
        overflow: 'hidden',
    },
    placeholder: {
        paddingLeft: 8,
        textAlignVertical: 'center',
        fontSize: 16,
        fontWeight: '500',
        padding: 0,
        height: 35
    },
    pressable: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        height: 35,
    },
    containerSVG: {
        backgroundColor: PRIMARY_COLOR,
        borderWidth: 0,
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
    },
})