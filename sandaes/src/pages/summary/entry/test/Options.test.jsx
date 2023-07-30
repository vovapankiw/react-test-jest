import { render, screen } from "@testing-library/react";

import Options from "../Options";

it("displays image for each scoop option for a aserver", async () => {
  render(<Options optionType="scoops" />);

  const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i });
  expect(scoopImages).toHaveLength(2);

  const altText = scoopImages.map((el) => el.alt);
  expect(altText).toEqual(["Chocolate scoop", "Vanila scoop"]);
});
