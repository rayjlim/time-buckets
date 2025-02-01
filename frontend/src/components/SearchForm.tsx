import { useRef, RefObject } from 'react';
import { parseAsInteger, parseAsString, useQueryState } from 'nuqs'

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
};

const SearchForm: React.FC<SearchFormProps> = ({ loadGoals, searchForm, setPage }) => {
    const [titleForm, setTitleForm] = useQueryState('title', parseAsString);
    const [typeForm, setTypeForm] = useQueryState('type', parseAsString);
    const [tagForm, setTagForm] = useQueryState('tag', parseAsString);
    const [parentIdForm, setParentIdForm] = useQueryState('parentId', parseAsInteger.withDefault(0));
    const [idForm, setIdForm] = useQueryState('id', parseAsInteger);

    const formTagChoices = useRef<HTMLSelectElement>(null);


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
        const tags = searchForm.current.querySelector('input[name="tags"]') as HTMLInputElement;
        tags.value = '';
        const parentId = searchForm.current.querySelector('input[name="parentId"]') as HTMLInputElement;
        parentId.value = '';
        const idField = searchForm.current.querySelector('input[name="idField"]') as HTMLInputElement;
        idField.value = '';

        setPage(1);
        await loadGoals();
    };

    const submitSearch = (e: React.FormEvent) => {
        e.preventDefault();

        // Update query parameters based on form values
        const form = searchForm.current;
        if (form) {
            const titleInput = form.elements.namedItem('searchTitle') as HTMLInputElement;
            console.log('Search Query:', titleInput.value);
            setTitleForm(titleInput.value || '');

            const typeInput = form.elements.namedItem('type') as HTMLInputElement;
            console.log('typeInput:', typeInput.value);
            setTypeForm(typeInput.value || '');

            const tagsInput = form.elements.namedItem('tags') as HTMLInputElement;
            console.log('tagsInput:', tagsInput.value);
            setTagForm(tagsInput.value || '');

            const parentIdInput = form.elements.namedItem('parentId') as HTMLInputElement;
            console.log('parentIdInput:', parentIdInput.value);
            setParentIdForm(parseInt(parentIdInput.value) || null);
            const idInput = form.elements.namedItem('idField') as HTMLInputElement;
            console.log('idInput:', idInput.value);
            setIdForm(parseInt(idInput.value) || null);
        }

        loadGoals();
    }

    return (
        <form ref={searchForm} onSubmit={submitSearch} id="searchForm">
            <FormControl>
                <input name="startsWith" type="hidden" />
                <label htmlFor="searchTitle" className="searchField">
                    Search Title:
                    <input name="searchTitle" type="text" onChange={changeTitle} id="searchTitle" defaultValue={titleForm as string} />
                </label>
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

                <label htmlFor="tags" className="searchField">
                    Tag:
                    <input name="tags" type="text" defaultValue={tagForm as string} />
                    <select
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
                <label htmlFor="priority" className="searchField">
                    Priority:
                    <input name="priority" type="text" size={4} />
                </label>
                <label htmlFor="parentId">
                    Parent Id:
                    <input name="parentId" id="searchFormParentId" type="text" size={4} defaultValue={parentIdForm as number}
                    />
                </label>
                <label htmlFor="title">
                    <TextField
                        id="searchform-id"
                        name="idField"
                        label="Id"
                        defaultValue={idForm}
                        placeholder="id"
                        variant="filled"

                    />
                </label>
                <label htmlFor="orderBy" className="searchField">
                    Order By:
                    <select name="orderBy">
                        <option value="title-asc">Title</option>
                        <option value="title-desc">Title - desc</option>
                        <option value="updated-at-desc">Updated At - DES</option>
                        <option value="updated-at-asc">Updated At -  Asc</option>
                        <option value="priority">Priority</option>

                    </select>
                </label>
            </FormControl>
        </form>
    )
};

export default SearchForm;

