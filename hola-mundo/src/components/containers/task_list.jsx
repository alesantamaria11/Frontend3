import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';
//Importamos la hoja de estilos task.scss
import '../../styles/task.scss';

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

    const changeCompleted = (id) =>{
        console.log('ToDo: Cambiar estado de una tarea');
    }

    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    <div className='card-header p-3'>
                        <h4>
                            Your tasks:
                        </h4>
                    </div>
                </div>
                <h1>
                Your Tasks:
                </h1>
                {/* Card body (content) */}
                <div className='card-body' data-mdb-scrollbar='true' style={ {position: 'relative', height: '400px'} }>
                    <table>
                        <thead>
                            <tr>
                                <th scope='col'>Title</th>
                                <th scope='col'>Description</th>
                                <th scope='col'>Priority</th>
                                <th scope='col'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* TODO: Iterar sobre una lista de tareas */}
                            <TaskComponent task={defaultTask}></TaskComponent>
                        </tbody>
                    </table>
                </div> 
            </div>
            {/* <TaskComponent task={defaultTask}></TaskComponent> */}
        </div>
    );
};


TaskListComponent.propTypes = {

};


export default TaskListComponent;
