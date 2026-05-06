import { StyleSheet, TextInput, View, KeyboardTypeOptions, Pressable, DimensionValue, PressableProps } from 'react-native'
import { PRIMARY_COLOR } from '@/src/theme/colors'
import { SvgBarCodeScanner } from '@/assets/svg'
import { adjustHexColor } from '../../theme/colors-utils'



type MyTextInputButtonProps = {
    placeholder?: string;
    defaultValue?: string | number;
    keyboardType?: KeyboardTypeOptions;
    buttonWidth?: DimensionValue;
    height?: DimensionValue;
} & Omit<PressableProps, 'children'>;

export const MyTextInputButton = ({
    placeholder = 'Digite...',
    defaultValue = '',
    keyboardType = 'default',
    buttonWidth = 60,
    height = 35,
    onPress = () => console.log(placeholder),
    ...pressableProps
}: MyTextInputButtonProps) => (
    <View style={styles.containerView}>
        <TextInput
            placeholder={placeholder}
            style={styles.textInput}
            defaultValue={String(defaultValue)}
            keyboardType={keyboardType}
        />

        <Pressable
            onPress={onPress}
            {...pressableProps}
            style={(state) => [
                styles.pressable,
                {
                    opacity: state.pressed ? 0.9 : 1,
                    backgroundColor: state.pressed
                        ? adjustHexColor(PRIMARY_COLOR, 0.8)
                        : '#fff',
                    width: buttonWidth,
                    height,
                },
                typeof pressableProps.style === 'function'
                    ? pressableProps.style(state)
                    : pressableProps.style,
            ]}
        >
            {(state) => (
                <View style={styles.containerSVG}>
                    <SvgBarCodeScanner
                        style={{
                            transform: [{ scale: state.pressed ? 0.95 : 1 }],
                        }}
                    />
                </View>
            )}
        </Pressable>
    </View>
);



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