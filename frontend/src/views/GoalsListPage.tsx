import { useState, useRef, useEffect, useMemo } from 'react';
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

interface ChildrenType {
    id: number
    title: string
    coords: LatLngExpression
    completed: boolean
}
// Utility function
const parseGpsCoords = (coordStr: string) => {
    if (!coordStr || typeof coordStr !== 'string') return null;
    const [lat, lng] = coordStr.split(',').map(Number);
    if (isNaN(lat) || isNaN(lng)) return null;
    return (!isNaN(lat) && !isNaN(lng)) ? [lat, lng] : null;
};

const GoalsListPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [goals, setGoals] = useState<PageDataType | null>(null);
    const [page, setPage] = useQueryState('page', parseAsInteger.withDefault(1));

    const searchForm = useRef<HTMLFormElement>(null);

    const { loadGoals } = useLoadGoals({ formRef: searchForm, page, setIsLoading, setGoals });

    const onAddGoal = (newGoal: GoalType) => {
        if (!goals) return;
        setGoals(prev => prev && {
            ...prev,
            children: {
                ...prev.children,
                data: [...prev.children.data, newGoal]
            }
        });
    };
    const onRemoveGoal = (id: number) => {
        if (!goals) return;
        setGoals(prev => prev && {
            ...prev,
            children: {
                ...prev.children,
                data: prev.children.data.filter(item => item.id !== id)
            }
        });
    };

    const handlePageClick = (event: React.ChangeEvent<unknown>, pageNumber: number) => {
        console.log(event, pageNumber);
        setPage(pageNumber);
        loadGoals();
    };

    useEffect(() => {
        loadGoals();
    }, [page]);

    const arrayOutput = useMemo(() => {
        if (!goals?.children?.data) return [];

        return goals.children.data
            .map(item => {
                const coords = parseGpsCoords(item.gps_coords);
                return coords ? {
                    id: item.id,
                    title: item.title,
                    coords: coords,
                    completed: !!item.completed_at
                } : null;
            })
            .filter((item) => item !== null);
    }, [goals?.children.data]);

    const primaryGpsCoords = useMemo(() =>
        parseGpsCoords(goals?.primary[0]?.gps_coords || ''),
        [goals?.primary]
    );

    return (
        <>
            <h1 className="title">Time Buckets</h1>
            <TreeDrawer />
            <MapDisplayMulti children={arrayOutput as ChildrenType[]} primary={primaryGpsCoords as LatLngExpression} />
            {isLoading && <h2>LOADING</h2>}

            <ChipToggleView label="Show Add Form">
                <AddGoalForm onAddGoal={onAddGoal} />
            </ChipToggleView>
            <SearchForm loadGoals={loadGoals} searchForm={searchForm} setPage={setPage} />

            <PaginationBar
                pageCount={goals?.children.last_page || 0}
                page={goals?.children.current_page || 0}
                total={goals?.children.total || 0}
                pageChange={handlePageClick} />

            {!isLoading && (
                <>
                    {goals?.primary.length && (
                        <>
                            <div className="primary">
                                <GoalList
                                    goals={goals?.primary || []}
                                    onAddGoal={onAddGoal}
                                    onRemoveGoal={onRemoveGoal}
                                />
                            </div>
                            <hr style={{width: '60%'}}/>
                        </>)
                    }
 <div className="goal-list">
                    <GoalList
                        goals={goals?.children.data || []}
                        onAddGoal={onAddGoal}
                        onRemoveGoal={onRemoveGoal}
                    />
                    </div>
                </>
            )}
            <PaginationBar
                pageCount={goals?.children.last_page || 0}
                page={goals?.children.current_page || 0}
                total={goals?.children.total || 0}
                pageChange={handlePageClick} />

            <ChipToggleView>
                <CsvQuickParser />
            </ChipToggleView>

            <div>{`version ${pkg.version}`}</div>
        </>
    );
};

export default GoalsListPage;
