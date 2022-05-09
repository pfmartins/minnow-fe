import React from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';

const Card = (props) => {
    const { title, amount, filters, improvement } = props;
    return (
        <div className='app__card'>
            <div className='app__card-header app__card-header--dark'>
                <div>{title}</div>
                <DropdownButton size="sm" className="dropdown" title="Filter options">
                    {filters.map((item, index) => {
                        return <Dropdown.Item key={index}>{item.podName}</Dropdown.Item>
                    })}
                </DropdownButton>
            </div>
            <div className='app__card-content app__card-content--large app__card-content--dark'>
                {amount}
            </div>
            <div className='app__card-footer'>{improvement}% improvement</div>
        </div>
    )
}

export default Card;