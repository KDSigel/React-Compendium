import { screen, render, getByText } from "@testing-library/react";
import App from "./App";

it('testing the App will render', () => {
render(<App />)
const isLoading = screen.getByText('No Poke for you!...')
expect(isLoading).toBeInTheDocument()
}
)