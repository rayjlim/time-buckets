import { useRef, useState } from 'react';
import AddGoalForm from './AddGoalForm';

const CsvQuickParser = () => {
    const textareaForCSV = useRef<HTMLTextAreaElement>(null);
    const [quickAddRows, setQuickAddRows] = useState<(string[] | number[])[]>([]);

    const csvStringToArray = (data: string) => {
        console.log(data);
        const re = /(,|\r?\n|\r|^)(?:"([^"]*(?:""[^"]*)*)"|([^,\r\n]*))/gi;
        const result: (string[] | number[])[] = [];
        let matches: RegExpExecArray | null = null;

        while ((matches = re.exec(data))) {
            // Start a new row if a newline or row delimiter is found
            if (matches[1].length && matches[1] !== ',') {
                result.push([]);
            }

            // Push the current term into the latest row
            const term = matches[2] !== undefined
                ? matches[2].replace(/""/g, '"') // Handle escaped quotes
                : matches[3];

            if (result.length === 0) {
                result.push([]);
            }

            // Type assertion to handle the array type
            (result[result.length - 1] as string[]).push(term || '');
        }

        // Ensure each row has three terms, padding with 0 if necessary
        return result.map(row => {
            const typedRow = row as string[];
            while (typedRow.length < 3) {
                typedRow.push('0');
            }
            return typedRow;
        });
    };
    const parseTextarea = () => {
        if (!textareaForCSV.current) return;

        const parsed = csvStringToArray(textareaForCSV.current.value);
        console.log(parsed);
        setQuickAddRows(parsed as (string[] | number[])[]);
    };
    const defaultText = '';

    const removeCsvRow = (row: (string[] | number[])) => {
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
                    <AddGoalForm title={row[0] as string}
                        type={parseInt(row[1] as string, 10)}
                        parentId={parseInt(row[2] as string, 10)}
                        onAddGoal={() => removeCsvRow(row)}
                        key={row[0]} />
                ))}
            </div>
        </div>
    );
};
export default CsvQuickParser;
