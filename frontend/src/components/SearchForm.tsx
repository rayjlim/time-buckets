import { useEffect, useRef, RefObject, useState } from 'react';
import { parseAsInteger, parseAsString, useQueryState } from 'nuqs'

import Checkbox from "@mui/material/Checkbox";
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

import { TAGS } from '../constants';

const searchTags = ['<untagged>', ...TAGS];

type SearchFormProps = {
    loadGoals: () => void;
    searchForm: RefObject<HTMLFormElement>,
    setPage: (page: number) => void;
    showCompleted?: boolean;
};

const SearchForm = ({ loadGoals, searchForm, setPage, showCompleted }: SearchFormProps) => {
    const [titleForm, setTitleForm] = useQueryState('title', parseAsString);
    const [typeForm, setTypeForm] = useQueryState('type', parseAsString);
    const [tagForm, setTagForm] = useQueryState('tag', parseAsString);
    const [parentIdForm, setParentIdForm] = useQueryState('parentId', parseAsInteger.withDefault(0));
    const [idForm, setIdForm] = useQueryState('idField',
        {
            history: 'push', // Global history option for all state changes
        });
    const [locationsWithoutCoords, setLocationsWithoutCoords] = useState(false);

    const formTagChoices = useRef<HTMLSelectElement>(null);
    const [showCompletedGoals, setShowCompletedGoals] = useState(showCompleted);

    useEffect(() => {
        if (showCompleted && searchForm.current) {
            const parentId = searchForm.current.querySelector('input[name="parentId"]') as HTMLInputElement;
            if (parentId) {
                parentId.value = '';
                setParentIdForm(null);
            }
        }
    }, [showCompleted]);

    const changeTitle = () => {
        if (!searchForm.current) return;
        const startsWith = searchForm.current.querySelector('input[name="startsWith"]') as HTMLInputElement;
        startsWith.value = '';
    };

    const clearFields = async () => {
        if (!searchForm.current) return;

        const searchTitle = searchForm.current.querySelector('input[name="searchTitle"]') as HTMLInputElement;
        searchTitle.value = '';
        const orderBy = searchForm.current.querySelector('select[name="orderBy"]') as HTMLSelectElement;
        orderBy.value = '';
        // const typeInput = searchForm.current.querySelector('input[name="type"]') as HTMLInputElement;
        // typeInput.value = '-1';
        setTypeForm('-1');
        const tags = searchForm.current.querySelector('input[name="tags"]') as HTMLInputElement;
        tags.value = '';
        const parentId = searchForm.current.querySelector('input[name="parentId"]') as HTMLInputElement;
        parentId.value = '';
        const searchId = searchForm.current.querySelector('input[name="idField"]') as HTMLInputElement;
        searchId.value = '';

        setPage(1);
        await loadGoals();
    };

    const submitSearch = (e: React.FormEvent) => {
        e.preventDefault();

        // Update query parameters based on form values
        const form = searchForm.current;
        if (form) {
            const titleInput = form.elements.namedItem('searchTitle') as HTMLInputElement;
            setTitleForm(titleInput.value || '');

            const typeInput = form.elements.namedItem('type') as HTMLInputElement;
            setTypeForm(typeInput.value || '');

            const tagsInput = form.elements.namedItem('tags') as HTMLInputElement;
            setTagForm(tagsInput.value || '');

            const parentIdInput = form.elements.namedItem('parentId') as HTMLInputElement;
            setParentIdForm(parseInt(parentIdInput.value) || null);
            const idInput = form.elements.namedItem('idField') as HTMLInputElement;
            setIdForm(idInput.value || null);

        }
        loadGoals();
    }

    const [rowsPerPage, setRowsPerPage] = useQueryState('per_page', parseAsInteger.withDefault(25));

    return (
        <form ref={searchForm} onSubmit={submitSearch} id="searchForm" style={{textAlign: 'left', width: '90%'}}>
            <FormControl>
                <input name="startsWith" type="hidden" />
                <TextField
                    id="searchTitle"
                    name="searchTitle"
                    size="small"
                    label="Name"
                    defaultValue={titleForm}
                    placeholder="Name"
                    variant="filled"
                    onChange={changeTitle}
                />
                <button type="submit" id="searchFormSubmit">Search</button>
                <button type="button" onClick={() => clearFields()}>Clear</button>
                <RadioGroup
                    row
                    aria-labelledby="row-radio-buttons-group-label"
                    name="type"
                    value={typeForm}
                    className="type-radio"
                    defaultValue={typeForm as string}
                    onChange={e => setTypeForm(e.target.value)}
                >
                    <FormControlLabel value="-1" control={<Radio />} label="Untyped" />
                    <FormControlLabel value="0" control={<Radio />} label="Location" />
                    <FormControlLabel value="1" control={<Radio />} label="Experience" />
                </RadioGroup>

                <label htmlFor="tagsSearch" className="searchField">
                    Tag:
                    <input name="tags" type="text" defaultValue={tagForm as string} id="tagsSearch"/>
                    <select
                        name="tagsSelect"
                        id="tagsSelect"
                        ref={formTagChoices}
                        onChange={e => {
                            if (!searchForm.current) return;
                            const tagsInput = searchForm.current.elements.namedItem('tags') as HTMLInputElement;

                            if (!tagsInput) return;
                            tagsInput.value = e.target.value;
                        }}
                    >
                        <option value="">-</option>
                        {searchTags.map(tag => (
                            <option value={tag} key={tag}>{tag}</option>
                        ))}
                    </select>
                </label>
                <label htmlFor="prioritySearch" className="searchField">
                    Priority:
                    <input name="priority" type="text" size={4} id="prioritySearch"/>
                </label>
                <TextField
                    id="searchFormParentId"
                    name="parentId"
                    size="small"
                    label="Parent Id"
                    defaultValue={parentIdForm}
                    placeholder="Parent Id"
                    variant="filled"
                />

                <TextField
                    id="searchform-id"
                    name="idField"
                    label="ID"
                    defaultValue={idForm}
                    placeholder="Id"
                    variant="filled"
                />

                <label htmlFor="orderBy" className="searchField">
                    Order By:
                    <select name="orderBy" id="orderBy">
                        <option value="title-asc">Title</option>
                        <option value="title-desc">Title - desc</option>
                        <option value="updated-at-desc">Updated At - DES</option>
                        <option value="updated-at-asc">Updated At -  Asc</option>
                        <option value="priority">Priority</option>

                    </select>
                </label>
                <label htmlFor="rowsPerPage" className="searchField">
                    Rows per page:
                    <select
                        name="rowsPerPage"
                        id="rowsPerPage"
                        value={rowsPerPage}
                        onChange={(e) => {
                            setRowsPerPage(parseInt(e.target.value));
                            setPage(1);
                            loadGoals();
                        }}
                    >
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select>
                </label>
                <FormControlLabel
                    control={<Checkbox name="locationsWithoutCoords" checked={locationsWithoutCoords} onChange={() => setLocationsWithoutCoords(!locationsWithoutCoords)} />}
                    label="Locations without Coords"
                />
                <FormControlLabel
                    control={<Checkbox name="completedGoals" checked={showCompletedGoals}
                        onChange={() => setShowCompletedGoals(!showCompletedGoals)} />}
                    label="Show Completed Goals"
                />
            </FormControl>
        </form>
    )
};

export default SearchForm;

