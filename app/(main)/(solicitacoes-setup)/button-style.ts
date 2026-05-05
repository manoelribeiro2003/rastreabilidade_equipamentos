import { StyleSheet } from 'react-native';
import { PRIMARY_COLOR } from '@/src/theme/colors';

const styleButton = StyleSheet.create({
    buttonContainer: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignSelf: 'flex-end'
    },
    buttonView: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: PRIMARY_COLOR,
        aspectRatio: 1,
        overflow: 'hidden',
        elevation: 4,
    },
    textButton: {
        color: '#000',
        textAlign: 'center',
        flex: 1,
        textAlignVertical: 'center',
    },
    pressable: {
        width: '100%',
        aspectRatio: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default styleButton