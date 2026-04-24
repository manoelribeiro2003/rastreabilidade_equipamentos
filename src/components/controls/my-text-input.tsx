import { StyleSheet, TextInput, View } from 'react-native'
import {PRIMARY_COLOR} from '@/src/theme/colors'

export const MyTextInput = ({
    placeholder = "Digite...",
    defaultValue = ''
}) => (
    <View style={[styles.containerView]}>
        <TextInput
            placeholder={placeholder}
            style={styles.text}
            defaultValue={defaultValue.toString()}
            keyboardType='numeric'
        />
    </View>
)

const styles = StyleSheet.create({
    containerView: {
        borderWidth: 1,
        borderColor: PRIMARY_COLOR,
        borderRadius: 14,
        overflow: 'hidden',
    },
    text: {
        paddingLeft: 8,
        textAlignVertical: 'center',
        fontSize: 16,
        fontWeight: '500',
        padding: 0,
        height: 35
    }
})