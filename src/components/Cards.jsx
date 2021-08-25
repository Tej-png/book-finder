import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardTitle,
  Spinner,
} from "reactstrap";

function Cards(props) {
  const [model, setModel] = useState(false);
  const toggle = () => {
    setModel(!model);
  };
  return (
    <Card style={{ width: "600px" }} className="card">
      <CardImg
        top
        style={{ width: "222px", height: "333px" }}
        src={props.thumbnail}
        className='card-img'
      ></CardImg>
      <CardBody style={{width:'300px'}} className='card-body'>
        <CardTitle className="card-info card-title" tag="h3">
          {props.title}
        </CardTitle>
        <CardSubtitle tag="h6" className="card-info card-author mb-2 text-muted">
          By: {props.author}
        </CardSubtitle>
        <CardSubtitle tag="h6" className="card-info mb-2 text-muted">
          Published By: {props.publisher}
        </CardSubtitle>
        <a href={props.previewLink}>
          <Button color="success" className='card-btn'>See this book</Button>
        </a>
      </CardBody>
    </Card>
  );
}
export default Cards;
