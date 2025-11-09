import React, { useState, type JSX } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Event {
    id: number;
    title: string;
    date: Date;
    hour: number;
    color: string;
}

interface DayInfo {
    day: number;
    isCurrentMonth: boolean;
    date: Date;
}

type ViewType = 'day' | 'week' | 'month';

const Calendario: React.FC = () => {
    const [currentDate, setCurrentDate] = useState<Date>(new Date(2025, 10, 7));
    const [view, setView] = useState<ViewType>('month');
    const [events, setEvents] = useState<Event[]>([
        {
            id: 1,
            title: 'Incidente Usuario',
            date: new Date(2025, 10, 2),
            hour: 9,
            color: 'bg-purple-200 border-purple-400'
        },
        {
            id: 2,
            title: 'Ver reportes',
            date: new Date(2025, 10, 16),
            hour: 14,
            color: 'bg-pink-200 border-pink-400'
        },
        {
            id: 3,
            title: 'Bodega de Usuario 1',
            date: new Date(2025, 10, 24),
            hour: 10,
            color: 'bg-blue-200 border-blue-400'
        },
        {
            id: 4,
            title: 'Bodega de Usuario 2',
            date: new Date(2025, 10, 27),
            hour: 15,
            color: 'bg-orange-200 border-orange-400'
        }
    ]);

    const monthNames: string[] = [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];

    const dayNames: string[] = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

    const getDaysInMonth = (date: Date): DayInfo[] => {
        const year = date.getFullYear();
        const month = date.getMonth();
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const daysInMonth = lastDay.getDate();
        const startingDayOfWeek = firstDay.getDay() === 0 ? 6 : firstDay.getDay() - 1;

        const days: DayInfo[] = [];
        
        const prevMonthLastDay = new Date(year, month, 0).getDate();
        for (let i = startingDayOfWeek - 1; i >= 0; i--) {
            days.push({
                day: prevMonthLastDay - i,
                isCurrentMonth: false,
                date: new Date(year, month - 1, prevMonthLastDay - i)
            });
        }

        for (let i = 1; i <= daysInMonth; i++) {
            days.push({
                day: i,
                isCurrentMonth: true,
                date: new Date(year, month, i)
            });
        }

        const remainingDays = 42 - days.length;
            for (let i = 1; i <= remainingDays; i++) {
            days.push({
                day: i,
                isCurrentMonth: false,
                date: new Date(year, month + 1, i)
            });
        }

        return days;
    };

    const getEventsForDate = (date: Date): Event[] => {
        return events.filter(event => 
            event.date.getDate() === date.getDate() &&
            event.date.getMonth() === date.getMonth() &&
            event.date.getFullYear() === date.getFullYear()
        );
    };

    const getWeekDays = (): Date[] => {
        const curr = new Date(currentDate);
        const first = curr.getDate() - curr.getDay() + 1;
        const weekDays: Date[] = [];
        
        for (let i = 0; i < 7; i++) {
            const day = new Date(curr.setDate(first + i));
            weekDays.push(new Date(day));
        }
        
        return weekDays;
    };

    const goToPrevious = (): void => {
        if (view === 'month') {
            setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
        } else if (view === 'week') {
            const newDate = new Date(currentDate);
            newDate.setDate(currentDate.getDate() - 7);
            setCurrentDate(newDate);
        } else {
            const newDate = new Date(currentDate);
            newDate.setDate(currentDate.getDate() - 1);
            setCurrentDate(newDate);
        }
    };

    const goToNext = (): void => {
        if (view === 'month') {
            setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
        } else if (view === 'week') {
            const newDate = new Date(currentDate);
            newDate.setDate(currentDate.getDate() + 7);
            setCurrentDate(newDate);
        } else {
            const newDate = new Date(currentDate);
            newDate.setDate(currentDate.getDate() + 1);
            setCurrentDate(newDate);
        }
    };

    const goToToday = (): void => {
        setCurrentDate(new Date(2025, 10, 7));
    };

    const getHeaderText = (): string => {
        if (view === 'month') {
            return `${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`;
        } else if (view === 'week') {
            const weekDays = getWeekDays();
            const start = weekDays[0];
            const end = weekDays[6];
            return `${start.getDate()} ${monthNames[start.getMonth()]} - ${end.getDate()} ${monthNames[end.getMonth()]} ${currentDate.getFullYear()}`;
        } else {
            return `${currentDate.getDate()} ${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`;
        }
    };

    const hours: number[] = Array.from({ length: 24 }, (_, i) => i);
    const days: DayInfo[] = getDaysInMonth(currentDate);

    const renderDayView = (): JSX.Element => {
        const dayEvents = getEventsForDate(currentDate);
        
        return (
        <div className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gray-50 p-3 border-b border-gray-200">
            <div className="text-center">
                <div className="text-xs text-gray-500">{dayNames[currentDate.getDay() === 0 ? 6 : currentDate.getDay() - 1]}</div>
                <div className="text-2xl font-semibold">{currentDate.getDate()}</div>
            </div>
            </div>
            
            <div className="overflow-y-auto max-h-[600px]">
            {hours.map(hour => (
                <div key={hour} className="flex border-b border-gray-100">
                <div className="w-20 p-2 text-xs text-gray-500 text-right">
                    {hour.toString().padStart(2, '0')}:00
                </div>
                <div className="flex-1 p-2 min-h-[60px] relative">
                    {dayEvents.filter(e => e.hour === hour).map(event => (
                    <div
                        key={event.id}
                        className={`text-sm px-3 py-2 rounded border-l-4 ${event.color} mb-1`}
                    >
                        {event.title}
                    </div>
                    ))}
                </div>
                </div>
            ))}
            </div>
        </div>
        );
    };

    const renderWeekView = (): JSX.Element => {
        const weekDays = getWeekDays();
        
        return (
        <div className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="grid grid-cols-8 border-b border-gray-200">
            <div className="p-3"></div>
            {weekDays.map((day, idx) => (
                <div key={idx} className="p-3 text-center border-l border-gray-200">
                <div className="text-xs text-gray-500">{dayNames[day.getDay() === 0 ? 6 : day.getDay() - 1]}</div>
                    <div className={`text-lg font-semibold ${
                        day.toDateString() === new Date().toDateString() ? 'bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto' : ''}`}>
                        {day.getDate()}
                    </div>
                </div>
            ))}
            </div>
            
            <div className="overflow-y-auto max-h-[600px]">
            {hours.map(hour => (
                <div key={hour} className="grid grid-cols-8 border-b border-gray-100">
                <div className="p-2 text-xs text-gray-500 text-right">
                    {hour.toString().padStart(2, '0')}:00
                </div>
                {weekDays.map((day, idx) => {
                    const dayEvents = getEventsForDate(day).filter(e => e.hour === hour);
                    return (
                    <div key={idx} className="p-2 min-h-[60px] border-l border-gray-100 relative">
                        {dayEvents.map(event => (
                        <div key={event.id} className={`text-xs px-2 py-1 rounded border-l-4 ${event.color} mb-1`}>
                            {event.title}
                        </div>
                        ))}
                    </div>
                    );
                })}
                </div>
            ))}
            </div>
        </div>
        );
    };

    const renderMonthView = (): JSX.Element => (
        <div className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="grid grid-cols-7 bg-gray-50">
                {dayNames.map(day => (
                <div key={day} className="p-3 text-center text-xs font-medium text-gray-600 border-b border-r border-gray-200 last:border-r-0">
                    {day}
                </div>
                ))}
            </div>

            <div className="grid grid-cols-7">
                {days.map((dayInfo, index) => {
                const dayEvents = getEventsForDate(dayInfo.date);
                const isToday = dayInfo.date.toDateString() === new Date().toDateString();

                return (
                    <div key={index} className={`min-h-[100px] p-2 border-b border-r border-gray-200 last:border-r-0 ${dayInfo.isCurrentMonth ? 'bg-white' : 'bg-gray-50/50' }`}
                        style={{ background: dayInfo.isCurrentMonth ? 'white' : 'repeating-linear-gradient(45deg, transparent, transparent 5px, rgba(0,0,0,0.02) 5px, rgba(0,0,0,0.02) 10px)' }}>
                        <div className="flex justify-end mb-1">
                            <span className={`text-sm ${
                                dayInfo.isCurrentMonth ? 'text-gray-900' : 'text-gray-400'
                            } ${
                                isToday ? 'bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center' : ''
                            }`}>
                            {dayInfo.day}
                            </span>
                        </div>
                        
                        <div className="space-y-1">
                            {dayEvents.map(event => (
                            <div key={event.id} className={`text-xs px-2 py-1 rounded border-l-4 ${event.color}`}>
                                {event.title}
                            </div>
                            ))}
                        </div>
                    </div>
                );
                })}
            </div>
        </div>
    );

    return (
        
            <div className="mb-6 pl-8 pt-10 mt-[-10px] pr-8 bg-[#f5f6fa]  min-h-screen">
                <h1 className="text-2xl font-semibold text-gray-900 pb-3 ">Calendario</h1>
            <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between mb-6">
                <button onClick={goToToday} className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md"  >
                    Today
                </button>
                <div className="flex items-center gap-4">
                    <button onClick={goToPrevious} className="p-2 hover:bg-gray-100 rounded-md">
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    
                    <h2 className="text-xl font-medium min-w-[180px] text-center">
                        {getHeaderText()}
                    </h2>
                    
                    <button onClick={goToNext} className="p-2 hover:bg-gray-100 rounded-md">
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>

                    <div className="flex gap-2">
                        <button onClick={() => { setView('day');  setCurrentDate(new Date(2025, 10, 7)); }} className={`px-4 py-2 text-sm rounded-md ${view === 'day' ? 'bg-blue-500 text-white' : 'hover:bg-gray-50'}`} >
                            Day
                        </button>
                        <button onClick={() => { setView('week'); setCurrentDate(new Date(2025, 10, 7));}} className={`px-4 py-2 text-sm rounded-md ${ view === 'week' ? 'bg-blue-500 text-white' : 'hover:bg-gray-50' }`} >
                            Week
                        </button>
                        <button onClick={() => setView('month')} className={`px-4 py-2 text-sm rounded-md ${ view === 'month' ? 'bg-blue-500 text-white' : 'hover:bg-gray-50'}`}>
                            Month
                        </button>
                    </div>
                </div>
                {view === 'month' && renderMonthView()}
                {view === 'week' && renderWeekView()}
                {view === 'day' && renderDayView()}
            </div>
        </div>
    );
};

export default Calendario;