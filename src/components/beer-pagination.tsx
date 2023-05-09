import { FC } from "react";
import { Pagination } from "react-bootstrap";

const BeerPagination: FC<{
  page: number;
  currentBeer: number;
  perPage: number;
  onChangePage: (nextPage: number) => void;
}> = ({ page, currentBeer, perPage, onChangePage }) => (
  <Pagination>
    <Pagination.Prev
      disabled={page === 1}
      onClick={() => onChangePage(page - 1)}
    />
    <Pagination.Item>{`${page}`}</Pagination.Item>
    <Pagination.Next
      disabled={currentBeer < perPage}
      onClick={() => onChangePage(page + 1)}
    />
  </Pagination>
);

export default BeerPagination;
