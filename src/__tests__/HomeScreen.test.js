import React from "react";
import { Alert } from "react-native";
import { fireEvent, render } from "@testing-library/react-native";
import {} from "jest";

import HomeScreen from "../views/HomeScreen";
describe("Home", () => {
  jest.spyOn(Alert, "alert");
  const page = render(<HomeScreen />);
  it("should return True and False", () => {
    const trueButton = page.getByTestId("true_button");
    const falseButton = page.getByTestId("false_button");

    fireEvent.press(trueButton);
    fireEvent.press(falseButton);

    expect(Alert.alert).toHaveBeenCalledWith("True" && "False");
  });
});
