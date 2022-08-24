import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';

const TaskListComponent = () => {

    const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL);

    //Estado del componente
    const [tasks, setTasks] = useState([defaultTask]);
    const [loading, setLoading] = useState(true);

    //Control del ciclo de vida del componente
    useEffect(() => {
        console.log('Task state has been modified');
        setLoading(false);
        return () => {
            console.log('Task list component is going to unmount.');
        };
    }, [tasks]);

    changeCompleted = (id) =>{
        console.log('ToDo: Cambiar estado de una tarea');
    }

    return (
        <div>
            <div>
                <h1>
                Your Tasks:
                </h1>
            </div>
            {/*ToDo: Aplicar un For/Map para renderizar una lista*/}
            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    );
};


TaskListComponent.propTypes = {

};


export default TaskListComponent;
