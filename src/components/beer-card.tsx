import { FC } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const BeerCard: FC<{ beer: any }> = ({ beer }) => (
  <Card className="my-2">
    <Card.Img variant="top" src={beer.image_url} className="p-2" />
    <Card.Body>
      <Card.Title>{beer.name}</Card.Title>
      <Card.Text>
        {beer.description?.length > 100
          ? `${beer.description?.slice(0, 100)}...`
          : beer.description}
      </Card.Text>
      <Link to={`/${beer.id}`}>
        <Button variant="primary">Go Details</Button>
      </Link>
    </Card.Body>
  </Card>
);

export default BeerCard;
