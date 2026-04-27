import { StyleSheet, TextInput, View, KeyboardTypeOptions, TextInputProps } from 'react-native'
import { PRIMARY_COLOR } from '@/src/theme/colors'


type MyTextInputProps = {
    placeholder?: string;
    defaultValue?: string;
    keyboardType?: KeyboardTypeOptions;
} & TextInputProps;

export const MyTextInput = ({
    placeholder = "Digite...",
    defaultValue = '',
    keyboardType = 'default',
    style,
    editable = true,
    ...props
}: MyTextInputProps) => {

    const disabledStyle = !editable ? { backgroundColor: '#EAEAEA' } : undefined;
    
    return (
        <View style={styles.containerView}>
            <TextInput
                placeholder={placeholder}
                style={[
                    styles.text,
                    disabledStyle,
                    style
                ]}
                defaultValue={defaultValue.toString()}
                keyboardType={keyboardType}
                editable={editable}
                {...props}
            />
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
        flexDirection: 'row'
    },
    text: {
        paddingLeft: 8,
        textAlignVertical: 'center',
        fontSize: 16,
        fontWeight: '500',
        padding: 0,
        height: 35,
        flex: 1
    }
})