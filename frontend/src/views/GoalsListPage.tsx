import { useState, useRef, useEffect } from 'react';

import GoalList from '../components/GoalList';
import PaginationBar from '../components/PaginationBar';
import ChipToggleView from '../components/ChipToggleView'
import AddGoalForm from '../components/AddGoalForm'
import CsvQuickParser from '../components/CsvQuickParser'

import TreeDrawer from '../components/TreeDrawer';
import useLoadGoals from '../hooks/useLoadGoals';

import './GoalsListPage.css';

import pkg from '../../package.json';
import MapDisplayMulti from '../components/MapDisplayMulti';
import { LatLngExpression } from 'leaflet';


const searchTags = ['<untagged>', 'watch', 'hike', 'animals', 'achievement', 'skill'];
const searchType = ['<untagged>', '0', '1'];

interface GoalType {
    id: number;
    title: string;
    gps_coords: string;
}
interface PageDataType {
    primary: GoalType[];
    children: GoalType[];
    pageMeta: {
        last_page: number;
        current_page: number;
        total: number;
        itemsPerPage: number;
    }
}

const GoalsListPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [goals, setGoals] = useState<PageDataType | null>(null);
    const [page, setPage] = useState(1);
    // const [pageMeta, setPageMeta] = useState({ last_page: 1, current_page: 1, total: -1, itemsPerPage: 10 });
    const searchForm = useRef<HTMLFormElement>(null);

    const formTypeChoices = useRef<HTMLSelectElement>(null);
    const formTagChoices = useRef<HTMLSelectElement>(null);

    /** Page Data look up */
    const { loadGoals } = useLoadGoals(searchForm, page, setIsLoading, setGoals);

    const onAddGoal = (newGoal: GoalType) => {
        if (!goals) return;
        const newChildren = [...goals.children, newGoal];
        goals.children = newChildren;
        setGoals(goals);
    };
    const onRemoveGoal = (id: number) => {
        if (!goals) return;
        const updatedGoals = goals.children.filter(item => item.id !== id);
        goals.children = updatedGoals;
        setGoals(goals);
    };

    /** Search functions */

    const handlePageClick = (event: any) => {
        if (!goals?.pageMeta) return;
        const newOffset = (event.selected * goals.pageMeta.itemsPerPage) % goals.children.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`,
        );
        // setItemOffset(newOffset);
        setPage(event.selected + 1);
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

    console.log(goals?.pageMeta);

    const arrayOutput: [number, number][] = goals?.children !== undefined ? goals.children.filter(item => item.gps_coords !== null && item.gps_coords !== '' && item.gps_coords.indexOf(',') !== -1)
        .map(item => {
            if (typeof item?.gps_coords !== 'string') return [0, 0];
            const coords = item.gps_coords.split(',');
            if (coords.length !== 2) return [0, 0];
            const [lat, lng] = coords.map(Number);
            if (isNaN(lat) || isNaN(lng)) return [0, 0];
            return [lat, lng];
        }) : [];
    console.log(arrayOutput);

    return (
        <>
            <h1 className="title">Time Buckets</h1>
            <TreeDrawer />
            <MapDisplayMulti coords={arrayOutput as LatLngExpression[]} />
            {isLoading && <h2>LOADING</h2>}
            <div>
                <ChipToggleView>
                    <AddGoalForm onAddGoal={onAddGoal} />
                </ChipToggleView>
                <form ref={searchForm} onSubmit={loadGoals}>
                    <input name="startsWith" type="hidden" />
                    <label htmlFor="searchTitle" className="searchField">
                        Search Title:
                        <input name="searchTitle" type="text" onChange={changeTitle} id="searchTitle" />
                    </label>
                    <button type="submit" id="searchFormSubmit">Search</button>
                    <button type="button" onClick={() => clearFields()}>Clear</button>
                    <label htmlFor="type" className="searchField">
                        Type:
                        <input name="type" type="text" />
                        <select
                            ref={formTypeChoices}
                            onChange={() => {
                                if (!searchForm.current) return;
                                if (!formTypeChoices.current) return;
                                const typeInput = searchForm.current.querySelector('input[name="type"]') as HTMLInputElement;

                                typeInput.value = formTypeChoices.current.value;
                            }}
                        >
                            <option value="">-</option>
                            {searchType.map(type => (
                                <option value={type} key={type}>{type}</option>
                            ))}
                        </select>
                    </label>
                    <label htmlFor="tags" className="searchField">
                        Tag:
                        <input name="tags" type="text" />
                        <select
                            ref={formTagChoices}
                            onChange={() => {
                                if (!searchForm.current) return;
                                if (!formTagChoices.current) return;
                                const tagsInput = searchForm.current.querySelector('input[name="tags"]') as HTMLInputElement;
                                if (!tagsInput) return;
                                tagsInput.value = formTagChoices.current.value;
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
                        <input name="parentId" id="searchFormParentId" type="text" size={4} />
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
                </form>
            </div>

            <PaginationBar pageCount={goals?.pageMeta?.last_page || 0} pageChange={handlePageClick} />

            <div>
                {`page: ${goals?.pageMeta?.current_page || 0} total: ${goals?.pageMeta?.total || 0}`}
            </div>
            {!isLoading && (
                <>
                    <GoalList
                        goals={goals?.primary || []}
                        onRemoveGoal={onRemoveGoal}
                    />
                    <hr />
                    <GoalList
                        goals={goals?.children || []}
                        onRemoveGoal={onRemoveGoal}
                    />
                </>
            )}
            <PaginationBar pageCount={goals?.pageMeta?.last_page || 0} pageChange={handlePageClick} />
            <ChipToggleView>
                <CsvQuickParser />
            </ChipToggleView>

            <div>{`version ${pkg.version}`}</div>
        </>
    );
};

export default GoalsListPage;
