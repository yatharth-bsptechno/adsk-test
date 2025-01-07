import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import SectionWelcome from "../components/SectionWelcome";

describe("SectionWelcome", () => {
  it("renders the welcome section", () => {
    render(<SectionWelcome onNext={() => {}} />);
    expect(screen.getByText("Welcome to Autodesk")).toBeInTheDocument();
  });

  it("calls onNext when next button is clicked", () => {
    const onNext = jest.fn();
    render(<SectionWelcome onNext={onNext} />);
    fireEvent.click(screen.getByText("Next"));
    expect(onNext).toHaveBeenCalled();
  });
});