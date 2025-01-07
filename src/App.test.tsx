import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import "@testing-library/jest-dom";

describe("App", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("renders the app", () => {
    render(
      <div>
        <App />
      </div>
    );
    expect(screen.getByText("Welcome to Autodesk")).toBeInTheDocument();
  });

  it("goes to experience page", async () => {
    render(
      <div>
        <App />
      </div>
    );
    userEvent.click(screen.getByText("Next"));
    await waitFor(() => {
      expect(screen.getByText("Your Experience Level")).toBeInTheDocument();
    });
  });
});