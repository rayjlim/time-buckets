import { useState, useRef, useEffect, useMemo } from 'react';
import { LatLngExpression } from 'leaflet';
import { parseAsInteger, useQueryState } from 'nuqs'

import GoalList from '../components/GoalList';
import MapDisplayMulti from '../components/MapDisplayMulti';
import PaginationBar from '../components/PaginationBar';
import SearchForm from '../components/SearchForm';
import useLoadGoals from '../hooks/useLoadGoals';
import Switch from '@mui/material/Switch';

import pkg from '../../package.json';
import { PageDataType } from '../types';

// import './CompletedGoals.css';

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

const CompletedGoals = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [goals, setGoals] = useState<PageDataType | null>(null);
    const [page, setPage] = useQueryState('page', parseAsInteger.withDefault(1));

    const searchForm = useRef<HTMLFormElement>(null);
    const [isPrintView, setIsPrintView] = useState(true);

    // Toggle between views
    const toggleView = () => {
        console.log('a', isPrintView, 'b');
        setIsPrintView((prevView) => !prevView);
    };
    const { loadGoals } = useLoadGoals({ formRef: searchForm, page, setIsLoading, setGoals });

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

    const searchFormDisplay = isPrintView ? 'none' : 'block';
    return (
        <>
            <h1 className="title">Time Buckets</h1>
            {!isPrintView &&
                <MapDisplayMulti children={arrayOutput as ChildrenType[]} primary={primaryGpsCoords as LatLngExpression} />
            }
            {isLoading && <h2>LOADING</h2>}
            <div style={{display: searchFormDisplay}}>
                <SearchForm loadGoals={loadGoals} searchForm={searchForm} setPage={setPage} showCompleted={true} />
                </div>


            <PaginationBar
                pageCount={goals?.children.last_page || 0}
                page={goals?.children.current_page || 0}
                total={goals?.children.total || 0}
                pageChange={handlePageClick} />

            {!isLoading && (
                <>
                    <span>Print Format</span>
                    <Switch size="small" onChange={toggleView} />

                    {goals?.primary && goals.primary.length > 0 && (
                        <>
                            <div className="primary">
                                <GoalList
                                    goals={goals?.primary || []}
                                />
                            </div>
                            <hr />
                        </>)
                    }
                    <GoalList
                        goals={goals?.children.data || []}
                        printFormat={isPrintView}
                    />
                </>
            )}
            <PaginationBar
                pageCount={goals?.children.last_page || 0}
                page={goals?.children.current_page || 0}
                total={goals?.children.total || 0}
                pageChange={handlePageClick} />

            <div>{`version ${pkg.version}`}</div>
        </>
    );
};

export default CompletedGoals;
