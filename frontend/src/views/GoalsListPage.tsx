import { useState, useRef, useEffect } from 'react';
import { LatLngExpression } from 'leaflet';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { parseAsInteger, parseAsString, useQueryState } from 'nuqs'

import AddGoalForm from '../components/AddGoalForm'
import ChipToggleView from '../components/ChipToggleView'
import CsvQuickParser from '../components/CsvQuickParser'
import GoalList from '../components/GoalList';
import MapDisplayMulti from '../components/MapDisplayMulti';
import PaginationBar from '../components/PaginationBar';
import TreeDrawer from '../components/TreeDrawer';
import useLoadGoals from '../hooks/useLoadGoals';
import pkg from '../../package.json';
import { GoalType, PageDataType } from '../types';

import './GoalsListPage.css';

const searchTags = ['<untagged>', 'watch', 'hike', 'animals', 'achievement', 'skill'];

const GoalsListPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [goals, setGoals] = useState<PageDataType | null>(null);
    const [titleForm, setTitleForm] = useQueryState('title', parseAsString);
    const [typeForm, setTypeForm] = useQueryState('type', parseAsString);
    const [tagForm, setTagForm] = useQueryState('tag', parseAsString);
    const [parentIdForm, setParentIdForm] = useQueryState('parentId', parseAsInteger.withDefault(0));
    const [page, setPage] = useQueryState('page', parseAsInteger.withDefault(1));

    // const [pageMeta, setPageMeta] = useState({ last_page: 1, current_page: 1, total: -1, itemsPerPage: 10 });
    const searchForm = useRef<HTMLFormElement>(null);
    const formTagChoices = useRef<HTMLSelectElement>(null);

    /** Page Data look up */
    const { loadGoals } = useLoadGoals(searchForm, page, setIsLoading, setGoals);

    const onAddGoal = (newGoal: GoalType) => {
        if (!goals) return;
        const newChildren = [...goals.children.data, newGoal];
        goals.children.data = newChildren;
        setGoals(goals);
    };
    const onRemoveGoal = (id: number) => {
        if (!goals) return;
        const updatedGoals = goals.children.data.filter(item => item.id !== id);
        goals.children.data = updatedGoals;
        setGoals(goals);
    };

    const handlePageClick = (event: any, pageNumber: number) => {
        console.log(event, pageNumber);;
        setPage(pageNumber);
        loadGoals();
    };

    useEffect(() => {
        (async () => {
            await loadGoals();
        })();
    }, [page]);

    const clearFields = async () => {
        if (!searchForm.current) return;

        const searchTitle = searchForm.current.querySelector('input[name="searchTitle"]') as HTMLInputElement;
        searchTitle.value = '';
        const orderBy = searchForm.current.querySelector('select[name="orderBy"]') as HTMLSelectElement;
        orderBy.value = '';
        const parentId = searchForm.current.querySelector('input[name="parentId"]') as HTMLInputElement;
        parentId.value = '';
        setPage(1);
        await loadGoals();
    };

    const changeTitle = () => {
        if (!searchForm.current) return;
        const startsWith = searchForm.current.querySelector('input[name="startsWith"]') as HTMLInputElement;
        startsWith.value = '';
    };

    const strToLatLng = (item: string) => {
        const coords = item.split(',');
        const [lat, lng] = coords.map(Number);
        if (isNaN(lat) || isNaN(lng)) return null;
        return [lat, lng];
    };

    const arrayOutput: ([number, number] | null)[] = goals?.children !== undefined ?
        goals.children.data.filter(item => item.gps_coords !== null)
            .filter(item => item.gps_coords !== '')
            .filter(item => item.gps_coords.indexOf(',') !== -1)
            .filter(item => typeof item?.gps_coords === 'string')
            .filter(item => {
                const coords = item.gps_coords.split(',');
                return coords.length === 2;
            })
            .map((item: GoalType) => {
                const coords = item?.gps_coords.split(',');
                const [lat, lng] = coords.map(Number);
                if (isNaN(lat) || isNaN(lng)) return null;
                return [lat, lng];
            }) : [];
    const primaryGpsCoords = strToLatLng(goals?.primary[0]?.gps_coords || '');

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
            setParentIdForm(parentIdInput.value || '');
        }

        loadGoals();
    }

    return (
        <>
            <h1 className="title">Time Buckets</h1>
            <TreeDrawer />
            <MapDisplayMulti coords={arrayOutput as LatLngExpression[]} primary={primaryGpsCoords as LatLngExpression} />
            {isLoading && <h2>LOADING</h2>}
            <div>
                <ChipToggleView>
                    <AddGoalForm onAddGoal={onAddGoal} />
                </ChipToggleView>
                <form ref={searchForm} onSubmit={submitSearch}>
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
                            <input name="parentId" id="searchFormParentId" type="text" size={4} defaultValue={parentIdForm as string}
                            />
                        </label>
                        <label htmlFor="orderBy" className="searchField">
                            Order By:
                            <select name="orderBy">
                                <option value="">Updated At</option>
                                <option value="updated-at-asc">Updated At -  Asc</option>
                                <option value="priority">Priority</option>
                                <option value="title">Title</option>
                            </select>
                        </label>
                    </FormControl>
                </form>
            </div>

            <PaginationBar pageCount={goals?.children.per_page || 0} page={goals?.children.current_page || 0} pageChange={handlePageClick} />


            {!isLoading && (
                <>
                    <GoalList
                        goals={goals?.primary || []}
                        onRemoveGoal={onRemoveGoal}
                    />
                    <hr />
                    <GoalList
                        goals={goals?.children.data || []}
                        onRemoveGoal={onRemoveGoal}
                    />
                </>
            )}
            <PaginationBar pageCount={goals?.children.per_page || 0} page={goals?.children.current_page || 0} pageChange={handlePageClick} />
            <ChipToggleView>
                <CsvQuickParser />
            </ChipToggleView>

            <div>{`version ${pkg.version}`}</div>
        </>
    );
};

export default GoalsListPage;
