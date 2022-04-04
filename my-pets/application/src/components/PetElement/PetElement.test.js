import { BrowserRouter } from "react-router-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";

import PetElement from "./PetElement";
import * as petService from "../../services/petService";

jest.mock("../../services/petService");

describe("PetCard Component", () => {
  it("Should display name", () => {
    render(
      // Because of the Link elem
      <BrowserRouter>
        <PetElement name="Pesho" />
      </BrowserRouter>
    );

    // screen.getByText("...");
    expect(document.querySelector("h3").textContent).toBe("Name: Pesho");
  });

  it("Should increase likes when pet button is pressed", async () => {
    petService.pet.mockResolvedValue({ likes: 6 });

    render(
      <BrowserRouter>
        <PetElement likes={5} />
      </BrowserRouter>
    );

    fireEvent.click(screen.getByText("Pet"));

    await waitFor(() => screen.getByText("Pet"));
    expect(document.querySelector(".pet-info span").textContent).toBe("6");
  });
});
