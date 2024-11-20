import { render, screen } from "@testing-library/react";
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
});
