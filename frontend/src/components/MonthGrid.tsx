import React, { useEffect, useState } from 'react';
import { format, isToday } from 'date-fns';

import { getDaysInMonth } from '../lib/utils/getDaysInMonth';
import { useEventsQuery } from '../lib/graphql/generated/graphql';

import { Modal } from './Modal/Modal';
import { ModalCenter } from './Modal/ModalCenter';
import { AddEvent } from './Forms/AddEvent';

type Props = {
    date: Date;
};

export const MonthGrid = ({ date }: Props) => {
    const { data } = useEventsQuery();

    const [days, setDays] = useState<Date[]>([]);
    const [modal, setModal] = useState(false);
    const [selectedDay, setSeletedDay] = useState<Date | null>(null);

    useEffect(() => {
        const days = getDaysInMonth(date);
        setDays(days);

        return () => {
            setDays([]);
        };
    }, [date]);

    const handleClick = (day: Date) => {
        setSeletedDay(day);
        setModal(true);
    };

    const handleCloseModal = () => {
        setSeletedDay(null);
        setModal(false);
    };

    return (
        <>
            <div className="calendar grid grid-cols-7">
                {days.map((day, index) => (
                    <div
                        key={index}
                        onClick={() => handleClick(day)}
                        className={
                            isToday(day)
                                ? 'border-r border-b bg-blue-100'
                                : 'border-r border-b border-gray-300'
                        }
                    >
                        <p className="text-right p-3 text-gray-600">
                            {format(day, 'dd')} {isToday(day)}
                        </p>
                    </div>
                ))}
            </div>

            {modal && selectedDay && (
                <Modal>
                    <ModalCenter
                        title="Add Event"
                        closeModal={handleCloseModal}
                    >
                        <AddEvent />
                    </ModalCenter>
                </Modal>
            )}
        </>
    );
};
