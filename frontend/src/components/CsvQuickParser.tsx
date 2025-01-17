import { useRef, useState } from 'react';
import AddGoalForm from './AddGoalForm';

const CsvQuickParser = () => {
  const textareaForCSV = useRef<HTMLTextAreaElement>(null);
  const [quickAddRows, setQuickAddRows] = useState([]);

  const csvStringToArray = (data: string) => {
    console.log(data);
    const re = /(,|\r?\n|\r|^)(?:"([^"]*(?:""[^"]*)*)"|([^,\r\n]*))/gi;
    const result: string[][] = [[]];
    let matches: RegExpExecArray | null = null;
    // eslint-disable-next-line no-cond-assign
    while ((matches = re.exec(data))) {
      if (matches[1].length && matches[1] !== ',') result.push([]);
      result[result.length - 1].push(
        matches[2] !== undefined ? matches[2].replace(/""/g, '"') : matches[3],
      );
    }
    return result;
  };
  const parseTextarea = () => {
    if (!textareaForCSV.current) return;

    const parsed = csvStringToArray(textareaForCSV.current.value);
    console.log(parsed);
    setQuickAddRows(parsed as any);
  };
  const defaultText = '';

  const removeCsvRow = (row: any) => {
    const filteredQuickAddRows = quickAddRows.filter(x => x[0] !== row[0]);
    setQuickAddRows(filteredQuickAddRows);
  };
  return (
    <div>
      <h2>CSV quick Add</h2>
      <textarea id="csvTextarea" ref={textareaForCSV} defaultValue={defaultText} />
      <button type="button" onClick={parseTextarea}>
        parse
      </button>
      <div>
        {quickAddRows.map(row => (
          <AddGoalForm title={row[0]} type={parseInt(row[1], 10)} onAddGoal={() => removeCsvRow(row)} key={row[0]}/>
        ))}
      </div>
    </div>
  );
};
export default CsvQuickParser;
