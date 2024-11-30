import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import InformationCard from "../../src/components/InformationCard";

describe("InformationCard", () => {
  const defaultProps = {
    icon: <span>✅</span>,
    title: "Test Title",
    subtitle: "Test Subtitle",
    buttonText: "Click Me",
    onClick: vi.fn(),
  };

  it("renders all elements correctly", () => {
    render(<InformationCard {...defaultProps} />);

    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test Subtitle")).toBeInTheDocument();
    expect(screen.getByText("Click Me")).toBeInTheDocument();
    expect(screen.getByText("✅")).toBeInTheDocument();
  });

  describe("Prop handling", () => {
    it("it renders with a different icon", () => {
      const customIcon = <div data-testid="custom-icon">🚀</div>;
      render(<InformationCard {...defaultProps} icon={customIcon} />);

      expect(screen.getByTestId("custom-icon")).toBeInTheDocument();
    });
  });

  describe("Interaction Testing", () => {
    it("calls onclick when the entire card is clicked", () => {
      // Create a mock function to track clicks
      const mockOnClick = vi.fn();

      // Render the component with the mock onClick handler
      render(<InformationCard {...defaultProps} onClick={mockOnClick} />);

      // Find the closest parent div containing the "Test Title" text
      const card = screen.getByText("Test Title").closest("div");
      expect(card).toBeTruthy();

      // Simulate a click on the card
      fireEvent.click(card!); // ! tells TypeScript that card is not null

      //Check that the mock function was called exactly once
      expect(mockOnClick).toHaveBeenCalledTimes(1);
    });

    it("handles case when no onClick prop is provided", () => {
      render(
        <InformationCard
          {...{
            icon: <span>✅</span>,
            title: "Test Title",
            subtitle: "Test Subtitle",
            buttonText: "Click Me",
          }}
        />
      );

      const card = screen.getByText("Test Title").closest("div");
      expect(card).toBeTruthy();

      // test ensures no error is thrown when no onClick is provided
      fireEvent.click(card!);
    });
  });

  it("checks nested element classes", () => {
    render(<InformationCard {...defaultProps} />);

    // Find the card content div
    const cardContent = screen
      .getByText("Test Title")
      .closest('div[class*="bg-white"]');

    expect(cardContent).toHaveClass("bg-white");
    expect(cardContent).toHaveClass("rounded-xl");
    expect(cardContent).toHaveClass("hover:shadow-lg");
    expect(cardContent).toHaveClass("active:ring-2");
    expect(cardContent).toHaveClass("active:ring-primary-600");
  });
});
