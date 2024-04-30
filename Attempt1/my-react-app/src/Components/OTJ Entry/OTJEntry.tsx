// styling
import DateTimeRange from '../DateTimeRange/DateTimeRange';
import './OTJEntry.css';

const OTJEntry = () => {
  return (
    <>
      <div className="entry">
        <h2>Item 1:</h2>
        <table className="entryTable">
          <tr>
            <td className="infoForm">
              <div>
                <input className="inputBox" placeholder="Title..."></input>
                <textarea
                  className="inputBox"
                  placeholder="Description..."
                ></textarea>
              </div>
            </td>
            <td className="datePicker">
              <DateTimeRange></DateTimeRange>
            </td>
          </tr>
        </table>
        <br></br>
      </div>
    </>
  );
};

export default OTJEntry;
