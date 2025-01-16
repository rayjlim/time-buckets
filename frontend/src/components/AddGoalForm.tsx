import { useRef, useState } from 'react';
import { Radio, TextField } from '@react-md/form';
import useAddForm from '../hooks/useAddForm';

const options = [{ label: 'location', value: 0 }, { label: 'experience', value: 1 }];
type MyComponentProps = {
    title?: string,
    type?: number,
    parentId?: number,
    onAddGoal: (message: string) => void; // Function type
  };
const AddGoalForm: React.FC<MyComponentProps> = ({
    title = '',
    type = 0,
    parentId = 0,
    onAddGoal,
}) => {

    const formRef = useRef<HTMLFormElement>(null);
    const [titleForm, setTitleForm] = useState(title);
    const [typeForm, setTypeForm] = useState(type);
    const { sendAddForm } = useAddForm(onAddGoal, formRef);
    console.log(typeForm);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitleForm(event.target.value);
    };
    return (
        <form ref={formRef} onSubmit={sendAddForm} style={{ maxWidth: 400, margin: '0 auto' }}>
            <label htmlFor="title">
                Title:
                <TextField
                    id="addform-title"
                    name="title"
                    label="Goal Title"
                    value={titleForm}
                    onChange={handleChange}
                    placeholder="Type something..."
                    required
                    style={{ marginBottom: '20px' }}
                />
            </label>

            <label htmlFor="type">
                Type:
                {options.map(option => (
                    <Radio
                        name="type"
                        key={option.value}
                        id={`${option.label}-${option.value}`}
                        value={option.value}
                        label={option.label}
                        checked={typeForm === option.value}
                        onChange={() => setTypeForm(option.value)}
                    />
                ))}
            </label>
            <label htmlFor="parentId">
                Parent Id:
                <input name="parentId" defaultValue={parentId} size={4} type="number" />
            </label>
            <button
                type="submit"
            >
                Add Goal
            </button>
        </form>
    );
};
export default AddGoalForm;
