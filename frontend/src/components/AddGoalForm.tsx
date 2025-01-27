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
import { GoalType } from '../types';
import './AddGoalForm.css'

type AddGoalProps = {
    title?: string,
    type?: number,
    parentId?: number,
    onAddGoal: (goal: GoalType) => void; // Function type
};

const AddGoalForm: React.FC<AddGoalProps> = ({
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
        <form ref={formRef} onSubmit={sendAddForm} className="add-form">
            <label htmlFor="title">
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
                <RadioGroup
                    row
                    aria-labelledby="row-radio-buttons-group-label"
                    name="type"
                    value={typeForm}
                    onChange={(e) => setTypeForm(Number(e.target.value))}
                    className="type-radio"
                >
                    <FormControlLabel value="0" control={<Radio />} label="Location" />
                    <FormControlLabel value="1" control={<Radio />} label="Experience" />
                </RadioGroup>
            </FormControl>
            <label htmlFor="parentId">
                <TextField
                    id="addform-parentId"
                    name="parentId"
                    label="Parent"
                    value={parentIdForm}
                    onChange={(e) => setParentIdForm(Number(e.target.value))}
                    placeholder="Parent"
                    variant="filled"
                    type="number"
                    size="small"

                />
            </label>
            <button type="submit">
                Add Goal
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
