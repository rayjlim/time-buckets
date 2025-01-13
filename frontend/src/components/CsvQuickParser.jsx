import React, { useRef, useState } from 'react';
import AddGoalForm from './AddGoalForm';

const CsvQuickParser = () => {
  const textareaForCSV = useRef();
  const [quickAddRows, setQuickAddRows] = useState([]);
  const csvStringToArray = data => {
    console.log(data);
    const re = /(,|\r?\n|\r|^)(?:"([^"]*(?:""[^"]*)*)"|([^,\r\n]*))/gi;
    const result = [[]];
    let matches;
    // eslint-disable-next-line
    while ((matches = re.exec(data))) {
      if (matches[1].length && matches[1] !== ',') result.push([]);
      result[result.length - 1].push(
        matches[2] !== undefined ? matches[2].replace(/""/g, '"') : matches[3],
      );
    }
    return result;
  };
  const parseTextarea = () => {
    const parsed = csvStringToArray(textareaForCSV.current.value);
    console.log(parsed);
    setQuickAddRows(parsed);
  };
  const defaultText = '';

  const removeCsvRow = row => {
    const filteredQuickAddRows = quickAddRows.filter(x => x[0] !== row[0]);
    setQuickAddRows(filteredQuickAddRows);
  };
  return (
    <div>
      <textarea id="csvTextarea" ref={textareaForCSV}>
        {defaultText}
      </textarea>
      <button type="button" onClick={parseTextarea}>
        parse
      </button>
      <div>
        {quickAddRows.map(row => (
          <AddGoalForm title={row[0]} type={row[1]} onAddGoal={() => removeCsvRow(row)} />
        ))}
      </div>
    </div>
  );
};
export default CsvQuickParser;
