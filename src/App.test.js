import { render, screen, shallow } from "@testing-library/react";
import App from "./App";

it("renders without crashing", () => {
	shallow(<App />);
});
