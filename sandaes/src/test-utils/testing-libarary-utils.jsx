import { render } from "@testing-library/react";

import { OrderDetailsProvider } from "../context/OrderDetails";

function Provider({ children }) {
  return <OrderDetailsProvider>{children}</OrderDetailsProvider>;
}
const renderWithContext = (ui, options) =>
  render(ui, { wrapper: Provider, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { renderWithContext as render };
