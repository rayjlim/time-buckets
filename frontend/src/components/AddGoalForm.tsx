import { useRef, useState } from 'react';
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import useAddForm from '../hooks/useAddForm';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

// const options = [{ label: 'location', value: 0 }, { label: 'experience', value: 1 }];
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
    const [parentIdForm, setParentIdForm] = useState(parentId);
    const { sendAddForm, messageInfo, setMessageInfo } = useAddForm(onAddGoal, formRef);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitleForm(event.target.value);
    };

    const handleClose = (
        event: React.SyntheticEvent | Event,
        reason?: SnackbarCloseReason,
    ) => {
        console.log(event, reason);
        if (reason === 'clickaway') {
            return;
        }

        setMessageInfo('');
    };

    return (
        <form ref={formRef} onSubmit={sendAddForm} style={{ maxWidth: 400, margin: '0 auto' }}>
            <label htmlFor="title">
                Title:
                <TextField
                    id="addform-title"
                    name="title"
                    label="New Goal"
                    value={titleForm}
                    onChange={handleChange}
                    placeholder="Type new Goal..."
                    variant="filled"

                />
            </label>
            <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">Type</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="type"
                    value={typeForm}
                    onChange={(e) => setTypeForm(Number(e.target.value))}
                >
                    <FormControlLabel value="0" control={<Radio />} label="Location" />
                    <FormControlLabel value="1" control={<Radio />} label="Experience" />
                </RadioGroup>
            </FormControl>
            <label htmlFor="parentId">
                Parent Id:
                <TextField
                    id="addform-parentId"
                    name="parentId"
                    label="Parent"
                    value={parentIdForm}
                    onChange={(e) => setParentIdForm(Number(e.target.value))}
                    placeholder="Parent"
                    variant="filled"
                    type="number"

                />
            </label>
            <button
                type="submit"
            >
                Add Goal
            </button>
            <button
                type="button"
                onClick={() => setMessageInfo('test')}
            >
                show snackbar
            </button>
            <Snackbar
                key={messageInfo ? messageInfo : undefined}
                open={messageInfo !== ''}
                autoHideDuration={6000}
                onClose={handleClose}
                message={messageInfo ? messageInfo : undefined}
                action={
                    <>
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            sx={{ p: 0.5 }}
                            onClick={handleClose}
                        >
                            <CloseIcon />
                        </IconButton>
                    </>
                }
            />
        </form>
    );
};
export default AddGoalForm;
