import { Pressable, StyleSheet, Text, PressableProps } from 'react-native';


type ButtonPrimaryProps = {
    textButton?: string;
    backgroundColor?: string;
    fontColor?: string;
  } & PressableProps;
  
  export const ButtonPrimary = ({
    textButton = 'Pressione aqui',
    backgroundColor = '#28A745',
    fontColor = '#FFF',
    onPress = () => alert(textButton),
    style,
    ...props
  }: ButtonPrimaryProps) => (
    <Pressable
      onPress={onPress}
      {...props}
      style={(state) => [
        styles.pressable,
        {
          transform: [{ scale: state.pressed ? 0.98 : 1 }],
          opacity: state.pressed ? 0.85 : 1,
          backgroundColor: backgroundColor,
        },
        typeof style === 'function' ? style(state) : style,
      ]}
    >
      <Text style={[styles.textButton, { color: fontColor }]}>
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