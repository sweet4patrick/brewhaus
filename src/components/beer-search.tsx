import { FC, useEffect, useMemo, useState } from "react";
import { Form } from "react-bootstrap";
import debounce from "lodash.debounce";

const BeerSearch: FC<{
  name: string;
  onChangeName: (name: string) => void;
}> = ({ onChangeName }) => {
  const [name, setName] = useState<string>("");

  const debouncedChangeHandler = useMemo(
    () => debounce(onChangeName, 300),
    [onChangeName]
  );

  useEffect(() => {
    return () => {
      debouncedChangeHandler.cancel();
    };
  }, [debouncedChangeHandler]);

  const handleChangeName = (e: any) => {
    setName(e.target.value);
    debouncedChangeHandler(e.target.value);
  };

  return (
    <Form.Control
      type="text"
      placeholder="Search with name ..."
      value={name}
      onChange={handleChangeName}
      className="mb-3"
    />
  );
};

export default BeerSearch;
