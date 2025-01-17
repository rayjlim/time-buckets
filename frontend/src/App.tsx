import MapDisplay from './components/MapDisplay'
import ChipToggleView from './components/ChipToggleView'
import AddGoalForm from './components/AddGoalForm'
import CsvQuickParser from './components/CsvQuickParser'
import './index.scss'
import './App.css'


function App() {
    const onAddGoal = (newGoal: string) => {
        console.log(newGoal);

        // const updatedItems = [...goals, newGoal];
        // setGoals(updatedItems);
    };
    return (
        <>
            <div>
                <ChipToggleView>
                    <AddGoalForm onAddGoal={onAddGoal} />
                </ChipToggleView>

                <MapDisplay center={[37.383183279875006, -121.88985302298934]} />
                <ChipToggleView>
                    <CsvQuickParser />
                </ChipToggleView>
            </div>
        </>
    )
}

export default App
