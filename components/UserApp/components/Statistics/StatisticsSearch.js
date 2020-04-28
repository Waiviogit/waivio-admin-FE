import React, { useState, useEffect } from 'react'
import Calendar from 'react-calendar'
import { Input, Button, Icon } from "semantic-ui-react";
import dateFormatter from "../../../../helpers/dateFormatter";
import { CustomButton } from "../../../common/buttons";
import 'react-calendar/dist/Calendar.css';
import './calendar.scss'
import ClearIcon from "../Search/ClearIcon";

const StatisticsSearch = () => {
    const [date, setDate] = useState([new Date(), new Date()]);
    const onChange = date => setDate(date);

    const [showDate, setShowDate] = useState(dateFormatter(date));

    const [showCalendar, setShowCalendar] = useState(false);
    const showCalendarHandler = () => setShowCalendar(!showCalendar);

    const [inputValue, setInputValue] = useState('');
    const inputHandler = e => setInputValue(e.target.value);
    const inputClear = () => setInputValue('');

    useEffect(() => {
        setShowDate(dateFormatter(date))
    }, [date]);

    return (
        <div className='statistics__search'>
            <Input
                label={<ClearIcon handler={inputClear}/>}
                labelPosition='right corner'
                icon='search'
                iconPosition='left'
                className='statistics__search--input'
                onChange={inputHandler}
                value={inputValue}
            />
            <div className='statistics__search--calendar'>
                <Button
                    className='statistics__search--calendar-btn'
                    onClick={showCalendarHandler}
                    icon='calendar alternate outline'
                    labelPosition='right'
                >
                    {showDate}
                    <Icon size='large' name='calendar alternate outline'/>
                </Button>
                { showCalendar &&
                <Calendar
                    className='statistics__search--calendar-body'
                    locale='en'
                    selectRange
                    returnValue='range'
                    onChange={onChange}
                    value={date}
                /> }
            </div>
            <CustomButton
                className='statistics__search--btn'
                content='Get stats'
                color='orange'
            />
        </div>
    )
};


export default StatisticsSearch
