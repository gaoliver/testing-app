import React from "react";
import { Alert } from "react-native";
import { fireEvent, render } from "@testing-library/react-native";

import HomeScreen from "../views/HomeScreen";
describe("Home", () => {
  // Getting the function
  jest.spyOn(Alert, "alert");

  it("should return True", () => {
    // Pointing the components to be tested
    const page = render(<HomeScreen />);
    const trueButton = page.getByTestId("true_button");

    // Creating the event for the component (pressing it)
    fireEvent.press(trueButton);

    // What is expected to be returned from the called function
    expect(Alert.alert).toHaveBeenCalledWith("True");
  });

  it("should return False", () => {
    const page = render(<HomeScreen />);
    const falseButton = page.getByTestId("false_button");

    fireEvent.press(falseButton);

    expect(Alert.alert).toHaveBeenCalledWith("False");
  });

  it("should return True and False", () => {
    const page = render(<HomeScreen />);
    const trueButton = page.getByTestId("true_button");
    const falseButton = page.getByTestId("false_button");

    fireEvent.press(trueButton);
    fireEvent.press(falseButton);

    expect(Alert.alert).toHaveBeenCalledWith("True" && "False");
  });
});
