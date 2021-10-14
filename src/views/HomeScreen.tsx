import React from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import MyButton from "../components/MyButton";

const HomeScreen = () => {
  const handleButton = (message: string) => {
    return Alert.alert(message);
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    title: {
      fontSize: 18,
      fontWeight: "bold",
    },
    area: {
      marginTop: 20,
      height: 80,
      justifyContent: "space-between"
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Testing Test</Text>
      <View style={styles.area}>
        <MyButton
          color="green"
          onPress={() => handleButton("True")}
          testID="true_button"
        >
          True Button
        </MyButton>
        <MyButton
          color="red"
          onPress={() => handleButton("False")}
          testID="false_button"
        >
          False Button
        </MyButton>
      </View>
    </View>
  );
};

export default HomeScreen;
