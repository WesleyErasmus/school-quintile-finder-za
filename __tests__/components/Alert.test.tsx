import { render, screen } from "@testing-library/react";
import Alert from "../../src/components/Alert";
import { describe, it } from "vitest";

describe("Alert", () => {
  it("renders the Alert component", () => {
    render(<Alert icon={undefined} message={""} />);

    screen.debug(); 
  });
});
