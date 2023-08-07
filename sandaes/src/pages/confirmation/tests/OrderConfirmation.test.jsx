import { rest } from "msw";

import { server } from "../../../mocks/server";
import {
  render,
  screen,
  waitFor,
} from "../../../test-utils/testing-library-utils";
import OrderConfirmation from "../OrderConfirmation";

describe("OrderConfirmation component should", () => {
  test("show erorr message in case server respond with error", async () => {
    server.resetHandlers(
      rest.post("http://localhost:3030/order", (req, res, ctx) =>
        res(ctx.status(500)),
      ),
    );

    render(<OrderConfirmation setOrderPhase={jest.fn()} />);

    await waitFor(async () => {
      const warrningMessage = await screen.findByRole("alert");
      expect(warrningMessage).toHaveTextContent(
        "An unexpected error occurred. Please try again later.",
      );
    });
  });
});
