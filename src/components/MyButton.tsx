import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

interface IProps {
  onPress?: () => void;
  color?: string;
  testID?: string;
  children: React.ReactNode;
}

const translate = (props: IProps) => ({
  onPress: props.onPress ? props.onPress : () => {},
  color: props.color ? props.color : "blue",
  testID: props.testID && props.testID,
  children: props.children && props.children,
});

const MyButton: React.FC<IProps> = (props: IProps) => {
  const { color, onPress, testID, children } = translate(props);
  const styles = StyleSheet.create({
    buttonContainer: {
      backgroundColor: color,
      borderRadius: 10,
      paddingHorizontal: 20,
      paddingVertical: 10,
    },
    textButton: {
      color: "white",
      fontWeight: "bold",
    },
  });

  return (
    <Pressable onPress={onPress} style={styles.buttonContainer} testID={testID}>
      <Text style={styles.textButton}>{children}</Text>
    </Pressable>
  );
};

export default MyButton;
