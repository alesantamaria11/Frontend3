import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
//Importamos la hoja de estilos task.scss
import '../../styles/task.scss';

const TaskComponent = ({ task }) => {

    useEffect(() => {
        console.log('Crated task');
        return () => {
            console.log(`Task: ${task.name} is going to unmount`);
        };
    }, [task]);

    return (
        <div>
            <tr className='fw-normal'>
                <th>
                    <span className='ms-2'>{task.name}</span>
                </th>
                <td className='align-middle'>
                    <span>{task.description}</span>
                </td>
                <td className='align-middle'>
                    {/* TODO: Sustituir por un badge */}
                    <span>{task.level}</span>
                </td>
                <td className='align-middle'>
                    {/* TODO: Sustituir por un iconos */}
                    <span>{task.completed ? 'Completed' : 'Pending'}</span>
                </td>
            </tr>
        </div>
    );
};

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
};

export default TaskComponent;

