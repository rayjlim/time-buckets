import { useState, useRef, useEffect } from 'react';

import GoalList from '../components/GoalList';
import PaginationBar from '../components/PaginationBar';
import ChipToggleView from '../components/ChipToggleView'
import AddGoalForm from '../components/AddGoalForm'
import CsvQuickParser from '../components/CsvQuickParser'
import TreeView from '../components/TreeView';

import useLoadGoals from '../hooks/useLoadGoals';

import './GoalsListPage.css';

import pkg from '../../package.json';


const searchTags = ['<untagged>', 'watch', 'hike', 'animals', 'achievement', 'skill'];
const searchType = ['<untagged>', '0', '1'];

const GoalsListPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [goals, setGoals] = useState<any[]>([]);
    const [page, setPage] = useState(1);
    const [pageMeta, setPageMeta] = useState({ last_page: 1, current_page: 1, total: -1, itemsPerPage: 10 });
    const searchForm = useRef<HTMLFormElement>(null);

    const formTypeChoices = useRef<HTMLSelectElement>(null);
    const formTagChoices = useRef<HTMLSelectElement>(null);

    /** Page Data look up */
    const { loadGoals } = useLoadGoals(searchForm, page, setIsLoading, setGoals, setPageMeta);

    const onAddGoal = (newGoal: any) => {
        const updatedItems = [...goals, newGoal];
        setGoals(updatedItems);
    };
    const onRemoveGoal = (id: number) => {
        const updatedGoals = goals.filter(item => item.id !== id);
        setGoals(updatedGoals);
    };

    /** Search functions */

    const handlePageClick = (event: any) => {
        if (!pageMeta) return;
        const newOffset = (event.selected * pageMeta.itemsPerPage) % goals.length;
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

    console.log(pageMeta);

    return (
        <>
            <h1 className="title">Time Buckets</h1>
            <TreeView />
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

            <PaginationBar pageCount={pageMeta.last_page} pageChange={handlePageClick} />

            <div>
                {`page: ${pageMeta.current_page} total: ${pageMeta.total}`}
            </div>
            {!isLoading && (
                <GoalList
                    goals={goals}
                    onRemoveGoal={onRemoveGoal}
                />
            )}
            <PaginationBar pageCount={pageMeta.last_page} pageChange={handlePageClick} />
            <ChipToggleView>
                <CsvQuickParser />
            </ChipToggleView>

            <div>{`version ${pkg.version}`}</div>
        </>
    );
};

export default GoalsListPage;
