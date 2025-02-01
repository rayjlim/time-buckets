import { useState, useRef, useEffect } from 'react';
import { LatLngExpression } from 'leaflet';
import { parseAsInteger, useQueryState } from 'nuqs'

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
import SearchForm from '../components/SearchForm';

const GoalsListPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [goals, setGoals] = useState<PageDataType | null>(null);
    const [page, setPage] = useQueryState('page', parseAsInteger.withDefault(1));

    const searchForm = useRef<HTMLFormElement>(null);

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

    const handlePageClick = (event: React.ChangeEvent<unknown>, pageNumber: number) => {
        console.log(event, pageNumber);
        setPage(pageNumber);
        loadGoals();
    };

    useEffect(() => {
        (async () => {
            await loadGoals();
        })();
    }, [page]);


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
                <SearchForm loadGoals={loadGoals} searchForm={searchForm} setPage={setPage} />
            </div>

            <PaginationBar pageCount={goals?.children.last_page || 0} page={goals?.children.current_page || 0} pageChange={handlePageClick} />

            {!isLoading && (
                <>
                    {goals?.primary.length && <><div style={{ border: '1px solid blue' }}>
                        <GoalList
                            goals={goals?.primary || []}
                            onRemoveGoal={onRemoveGoal}
                        />
                    </div>
                        <hr />
                    </>
                    }

                    <GoalList
                        goals={goals?.children.data || []}
                        onRemoveGoal={onRemoveGoal}
                    />
                </>
            )}
            <PaginationBar pageCount={goals?.children.last_page || 0} page={goals?.children.current_page || 0} pageChange={handlePageClick} />

            <ChipToggleView>
                <CsvQuickParser />
            </ChipToggleView>

            <div>{`version ${pkg.version}`}</div>
        </>
    );
};

export default GoalsListPage;
