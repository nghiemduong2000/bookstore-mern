import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { useDispatch } from "react-redux";
import { addItem } from "actions/itemActions";
import PropTypes from "prop-types";

const ItemModal = (props) => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    name: "",
    description: "",
    author: "",
    language: "",
    imageBook: "",
  });
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();

    data.append("name", input.name);
    data.append("description", input.description);
    data.append("author", input.author);
    data.append("language", input.language);
    data.append("imageBook", input.imageBook);

    // Add book
    dispatch(addItem(data));
    setInput({
      ...input,
      name: "",
      description: "",
      author: "",
      language: "",
    });
    toggle();
  };

  return (
    <div>
      <Button color="dark" style={{ marginBottom: "2rem" }} onClick={toggle}>
        Add Book
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add Book</ModalHeader>
        <ModalBody>
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Add a new book"
                onChange={(e) =>
                  setInput({
                    ...input,
                    name: e.target.value,
                  })
                }
                value={input.name}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="imageBook">Image</Label>
              <Input
                type="file"
                name="imageBook"
                id="imageBook"
                onChange={(e) => {
                  setInput({
                    ...input,
                    imageBook: e.target.files[0],
                  });
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="description">Description</Label>
              <Input
                type="text"
                name="description"
                id="description"
                placeholder="Add a new book"
                onChange={(e) =>
                  setInput({
                    ...input,
                    description: e.target.value,
                  })
                }
                value={input.description}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="author">Author</Label>
              <Input
                type="text"
                name="author"
                id="author"
                placeholder="Enter author"
                onChange={(e) =>
                  setInput({
                    ...input,
                    author: e.target.value,
                  })
                }
                value={input.author}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="language">Language</Label>
              <Input
                type="text"
                name="language"
                id="language"
                placeholder="Enter language"
                onChange={(e) =>
                  setInput({
                    ...input,
                    language: e.target.value,
                  })
                }
                value={input.language}
              />
            </FormGroup>
            <Button className="m-auto">Add Book</Button>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

ItemModal.propTypes = {
  addItem: PropTypes.func,
};

ItemModal.defaultProps = {
  addItem: null,
};

export default ItemModal;
