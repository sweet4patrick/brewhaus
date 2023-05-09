import { useState, useEffect, useCallback } from "react";
import { Row, Col } from "react-bootstrap";
import { BeerCard, BeerPagination, BeerSearch } from "../components";
import punkAPI from "../services/punk.service";
import { BEER_PER_PAGE } from "../constants";

const Home = () => {
  const [beer, setBeer] = useState([]);
  const [page, setPage] = useState<number>(1);
  const [name, setName] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const getBear = useCallback(async () => {
    setLoading(true);
    if (name) {
      const { data } = await punkAPI.getBeerByName(name, page, BEER_PER_PAGE);
      setBeer(data);
    } else {
      const { data } = await punkAPI.getBeerByPage(page, BEER_PER_PAGE);
      setBeer(data);
    }
    setLoading(false);
  }, [name, page]);

  const handleChangeName = (name: string) => {
    setPage(1);
    setName(name);
  };

  useEffect(() => {
    getBear();
  }, [name, page, getBear]);

  return (
    <>
      <BeerSearch name={name} onChangeName={handleChangeName} />
      {loading ? (
        <p className="text-center">Loading ...</p>
      ) : (
        <>
          {beer.length ? (
            <Row>
              {beer?.map((b: any) => (
                <Col md={3} sm={6} key={`bear_${b.id}`}>
                  <BeerCard beer={b} />
                </Col>
              ))}
            </Row>
          ) : (
            <p className="text-center">No data!</p>
          )}
          <div className="d-flex justify-content-center">
            <BeerPagination
              page={page}
              currentBeer={beer?.length}
              perPage={BEER_PER_PAGE}
              onChangePage={setPage}
            />
          </div>
        </>
      )}
    </>
  );
};

export default Home;
