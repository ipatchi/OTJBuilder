import { useState } from 'react';
import DateTimeInput from './DateTimeInput';
import './DateTimeRange.css';

const DateTimeRange = () => {
  const [startDT, setStartDT] = useState(Date());
  const [endDT, setEndDT] = useState(Date() + 60_000);
  const [showEnd, setShowEnd] = useState(false);

  const dateDifferenceInMinutes = (dateInitial: number, dateFinal: number) =>
    (dateFinal - dateInitial) / 60_000;

  const submitStart = (value: string) => {
    setStartDT(value);
    setEndDT(new Date(Date.parse(value) + 3600000).toString());
  };
  return (
    <>
      <div className="centre">
        <h3>Start DateTime</h3>
        <DateTimeInput
          startValue={startDT}
          callOnSubmit={(value: string) => submitStart(value)}
        ></DateTimeInput>
        <button
          onClick={() => {
            setEndDT(new Date(Date.parse(startDT) + 0.5 * 3600000).toString());
            setShowEnd(false);
          }}
        >
          30m
        </button>
        <button
          onClick={() => {
            setEndDT(new Date(Date.parse(startDT) + 1 * 3600000).toString());
            setShowEnd(false);
          }}
        >
          1h
        </button>
        <button
          onClick={() => {
            setEndDT(new Date(Date.parse(startDT) + 2 * 3600000).toString());
            setShowEnd(false);
          }}
        >
          2h
        </button>
        <button
          onClick={() => {
            setEndDT(new Date(Date.parse(startDT) + 3 * 3600000).toString());
            setShowEnd(false);
          }}
        >
          3h
        </button>
        <button
          onClick={() => {
            setEndDT(new Date(Date.parse(startDT) + 4 * 3600000).toString());
            setShowEnd(false);
          }}
        >
          4h
        </button>
        <button
          onClick={() => {
            setEndDT(new Date(Date.parse(startDT) + 8 * 3600000).toString());
            setShowEnd(false);
          }}
        >
          8h
        </button>
        <button onClick={() => setShowEnd(true)}>Custom</button>

        {showEnd && (
          <>
            <h3>End DateTime</h3>
            <DateTimeInput
              startValue={endDT}
              callOnSubmit={(value: string) => setEndDT(value)}
            ></DateTimeInput>
          </>
        )}

        <p>
          {dateDifferenceInMinutes(Date.parse(startDT), Date.parse(endDT))}{' '}
          Minutes
        </p>
      </div>
    </>
  );
};

export default DateTimeRange;
