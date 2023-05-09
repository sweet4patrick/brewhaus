import { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Row, Col, Button } from "react-bootstrap";
import punkAPI from "../services/punk.service";

const Details = () => {
  const { id } = useParams();
  const [productId, setProductId] = useState<string>(id ?? "");
  const [product, setProduct] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);

  const getProductDetails = useCallback(async () => {
    if (!productId) return;
    setLoading(true);
    const { data } = await punkAPI.getBeerById(productId);
    data?.length && setProduct(data[0]);
    setLoading(false);
  }, [productId]);

  useEffect(() => {
    getProductDetails();
  }, [productId, getProductDetails]);

  return (
    <>
      <Link to={`/`}>
        <Button variant="primary">Go Back</Button>
      </Link>
      {product ? (
        <>
          <Row>
            <Col md={5} className="text-center">
              <img
                src={product.image_url}
                alt={product.name}
                className="beer-detail_img"
              />
            </Col>
            <Col md={7}>
              <h1>{product.name}</h1>
              <h5>{product.description}</h5>
              <ul>
                <li>
                  <p>
                    <span className="fw-bold">ABV:</span> {`< .`}
                    {product.abv}%
                  </p>
                </li>
              </ul>
            </Col>
          </Row>
        </>
      ) : loading ? (
        <p className="text-center">Loading</p>
      ) : (
        <p className="text-center">No such product</p>
      )}
    </>
  );
};

export default Details;
