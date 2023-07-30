import { render, screen } from "@testing-library/react";

import Options from "../Options";

it("displays image for each scoop option for a a server", async () => {
  render(<Options optionType="scoops" />);

  const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i });
  expect(scoopImages).toHaveLength(2);

  const altText = scoopImages.map((el) => el.alt);
  expect(altText).toEqual(["Chocolate scoop", "Vanila scoop"]);
});

it("displays image for each topping option for a aserver", async () => {
  render(<Options optionType="toppings" />);

  const toopingImages = await screen.findAllByRole("img", {
    name: /topping$/i,
  });
  expect(toopingImages).toHaveLength(3);

  const altText = toopingImages.map((el) => el.alt);
  expect(altText).toEqual([
    "Cherries topping",
    "M&Ms topping",
    "Hot fudge topping",
  ]);
});
