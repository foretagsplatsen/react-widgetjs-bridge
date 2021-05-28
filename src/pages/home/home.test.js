import { render, screen } from "@testing-library/react";
import Home from "./home";
import React from "react";

test("renders learn react link", () => {
	render(<Home/>);
	const linkElement = screen.getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
});
