"use client"

import MiniCalendar from "./MiniCalendar";
import useDatePickerStore from "./store";
import RecurrenceOptions from "./RecurrenceOptions";
import SelectDate from "./SelectDate";

const DatePicker = () => {
  const {
    recurrenceType,
    setRecurrenceType,
    setStartDate,
    startDate,
    endDate,
    setEndDate,
    interval,
    setInterval,
  } = useDatePickerStore();

  const handleStartDateChange = (e) => {
    setStartDate(new Date(e.target.value));
  };

  const handleEndDateChange = (e) => {
    setEndDate(new Date(e.target.value));
  };

  return (
    <div className="date-picker p-6 bg-gray-50 rounded-lg shadow-md">
      <SelectDate
        handleEndDateChange={handleEndDateChange}
        handleStartDateChange={handleStartDateChange}
        recurrenceType={recurrenceType}
        setRecurrenceType={setRecurrenceType}
      />

      <RecurrenceOptions
        recurrenceType={recurrenceType}
        interval={interval}
        setInterval={setInterval}
      />

      <MiniCalendar
        startDate={startDate}
        endDate={endDate}
        recurrenceType={recurrenceType}
        interval={interval}
      />
    </div>
  );
};

export default DatePicker;