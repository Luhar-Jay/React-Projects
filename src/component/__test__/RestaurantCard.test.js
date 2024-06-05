import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_Data from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

test("Should RestaurantCard component with props data", () => {
  render(<RestaurantCard resData={MOCK_Data} />);

  const name = screen.getByText("Pizza Hut");
  expect(name).toBeInTheDocument();
});
