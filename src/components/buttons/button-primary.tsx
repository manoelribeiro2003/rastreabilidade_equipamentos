import { Pressable, StyleSheet, Text, View } from 'react-native';

export const ButtonPrimary = ({
    textButton = "Pressione aqui",
    onPress = () => console.log(textButton),
    backgroundColor = '#28A745',
    fontColor = '#FFF'
}) => (

    <Pressable
        onPress={onPress}
        style={({ pressed }) => [
            styles.pressable,
            {
                transform: [{ scale: pressed ? 0.98 : 1 }],
                opacity: pressed ? 0.85 : 1,
                backgroundColor: backgroundColor
            },
        ]}
    >
        <Text style={[
            styles.textButton,
            {
                color: fontColor
            }
        ]}
        >
            {textButton}
        </Text>
    </Pressable>
);

const styles = StyleSheet.create({
    pressable: {
        height: 55,
        justifyContent: 'center',
        paddingHorizontal: 10,
        borderRadius: 23,
        width: 150
    },
    textButton: {
        fontWeight: '500',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 15
    }
});