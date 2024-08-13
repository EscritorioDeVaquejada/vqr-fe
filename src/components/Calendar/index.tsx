'use client';

import 'react-calendar/dist/Calendar.css';

import Image from 'next/image';
import React, { FC, useEffect, useState } from 'react';
import { Calendar as CalendarComponent } from 'react-calendar';

import { Calendar as CalendarImage } from '@/assets';
import Input from '@/components/Input';

import styles from './index.module.scss';
import { CalendarProps, Value } from './types';

``;
const Calendar: FC<CalendarProps> = ({ onChange, value }) => {
  const [calendarValue, setCalendarValue] = useState<Value>(
    value ?? new Date()
  );
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const toggleCalendar = () => {
    setIsCalendarOpen((prev) => !prev);
  };

  useEffect(() => {
    console.log({
      calendarValue: calendarValue?.toLocaleString('pt-BR', {
        timeZone: 'America/Sao_Paulo',
        dateStyle: 'short',
      }),
    });
  }, [calendarValue]);

  return (
    <div className={styles.container}>
      <Input
        name="date"
        value={calendarValue?.toString()}
        placeholder={calendarValue?.toLocaleString('pt-BR', {
          timeZone: 'America/Sao_Paulo',
          dateStyle: 'short',
        })}
      />
      <button className={styles.toggler} type="button" onClick={toggleCalendar}>
        <Image src={CalendarImage.src} height={30} width={30} alt="icon" />
      </button>
      {isCalendarOpen && (
        <div className={styles.calendar}>
          <CalendarComponent
            onChange={setCalendarValue}
            value={value}
            locale="pt-BR"
          />
        </div>
      )}
    </div>
  );
};

export default Calendar;
