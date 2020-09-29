import { getItems, deleteItem } from "actions/itemActions";
import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap";

const BookList = (props) => {
  const dispatch = useDispatch();
  const { items } = props.item;
  useEffect(() => {
    dispatch(getItems());
    // eslint-disable-next-line
  }, []);

  const deleteHandle = (_id) => dispatch(deleteItem(_id));

  return (
    <Container>
      <Row>
        {items.map(({ _id, name, imageBook, description }) => (
          <Col key={_id} sm="3">
            <Card className="mt-4" style={{ padding: "10px" }}>
              <div
                style={{
                  width: "200px",
                  height: "200px",
                  margin: "auto",
                }}
              >
                <CardImg
                  top
                  style={{
                    objectFit: "cover",
                    height: "100%",
                  }}
                  src={`http://localhost:5000/${imageBook}`}
                  alt="Card image cap"
                />
              </div>
              <CardBody>
                <CardTitle>{name}</CardTitle>
                <CardText>{description}</CardText>
                <Button onClick={() => deleteHandle(_id)}>Add to card</Button>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

BookList.propTypes = {
  item: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  item: state.item,
});

export default connect(mapStateToProps, null)(BookList);
