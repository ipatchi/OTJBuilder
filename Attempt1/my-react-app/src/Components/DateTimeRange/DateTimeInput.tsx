import { ChangeEvent } from 'react';
import './DateTimeInput.css';

const DateTimeInput = ({
  callOnSubmit,
  startValue,
}: {
  callOnSubmit: (value: string) => void;
  startValue: string;
}) => {
  const submitHandler = (e: ChangeEvent<HTMLInputElement>) => {
    callOnSubmit(e.target.value);
  };

  return (
    <>
      <div>
        <input
          value={startValue}
          onChange={(e) => submitHandler(e)}
          className="dateInput"
          type="datetime-local"
        ></input>
      </div>
    </>
  );
};

export default DateTimeInput;
