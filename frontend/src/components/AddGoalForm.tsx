import { useRef, useState, useCallback } from 'react';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import CloseIcon from '@mui/icons-material/Close';

import useAddForm from '../hooks/useAddForm';
import { GoalType } from '../types';
import './AddGoalForm.css'

interface FormState {
    title: string;
    type: number;
    parentId: number;
}

interface AddGoalProps {
    title?: string;
    type?: number;
    parentId?: number;
    onAddGoal: (goal: GoalType) => void;
}

const AddGoalForm: React.FC<AddGoalProps> = ({
    title = '',
    type = 0,
    parentId = 0,
    onAddGoal,
}) => {
    const formRef = useRef<HTMLFormElement>(null);
    const [formState, setFormState] = useState<FormState>({
        title,
        type,
        parentId,
    });
    const { sendAddForm, messageInfo, setMessageInfo } = useAddForm({ onAddGoal, formRef });

    const handleTitleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setFormState(prev => ({ ...prev, title: event.target.value }));
    }, []);

    const handleTypeChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setFormState(prev => ({ ...prev, type: Number(event.target.value) }));
    }, []);

    const handleParentIdChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setFormState(prev => ({ ...prev, parentId: Number(event.target.value) }));
    }, []);

    const handleClose = useCallback(() => {
        setMessageInfo('');
    }, [setMessageInfo]);

    return (
        <form ref={formRef} onSubmit={sendAddForm} className="add-form">
            <label htmlFor="title">
                <TextField
                    id="addform-title"
                    name="title"
                    label="New Goal"
                    value={formState.title}
                    onChange={handleTitleChange}
                    placeholder="Type new Goal..."
                    variant="filled"
                />
            </label>
            <FormControl>
                <RadioGroup
                    row
                    aria-labelledby="row-radio-buttons-group-label"
                    name="type"
                    value={formState.type}
                    onChange={handleTypeChange}
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
                    value={formState.parentId}
                    onChange={handleParentIdChange}
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
                key={messageInfo}
                open={messageInfo !== ''}
                autoHideDuration={6000}
                onClose={handleClose}
                message={messageInfo}
                action={
                    <IconButton
                        aria-label="close"
                        color="inherit"
                        sx={{ p: 0.5 }}
                        onClick={handleClose}
                    >
                        <CloseIcon />
                    </IconButton>
                }
            />
        </form>
    );
};

export default AddGoalForm;
