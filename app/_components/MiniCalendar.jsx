"use client"

import { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import { format, addDays, addWeeks, addMonths, addYears } from "date-fns";

const MiniCalendar = ({ startDate, endDate, recurrenceType, interval }) => {
  const [recurringDates, setRecurringDates] = useState([]);

  // useCallback to prevent unnecessary re-renders
  const calculateRecurringDates = useCallback(() => {
    if (!startDate) return;
    let current = new Date(startDate);
    let dates = [];

    while (endDate ? current <= new Date(endDate) : dates.length < 30) {
      dates.push(new Date(current));
      switch (recurrenceType) {
        case "daily":
          current = addDays(current, interval);
          break;
        case "weekly":
          current = addWeeks(current, interval);
          break;
        case "monthly":
          current = addMonths(current, interval);
          break;
        case "yearly":
          current = addYears(current, interval);
          break;
        default:
          return;
      }
    }
    setRecurringDates(dates);
  }, [startDate, endDate, recurrenceType, interval]);

  useEffect(() => {
    calculateRecurringDates();
  }, [calculateRecurringDates]);

  return (
    <div className="calendar p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-yellow-600 mb-4">
        Mini Calendar
      </h3>
      {recurringDates.length > 0 ? (
        recurringDates.map((date, index) => (
          <div
            key={index}
            className="text-black text-center py-2 border border-gray-200 rounded-md hover:bg-blue-100 transition duration-200"
          >
            {format(new Date(date), "dd/MM/yyyy")}
          </div>
        ))
      ) : (
        <div className="text-black text-center py-2 border border-gray-200 rounded-md hover:bg-blue-100 transition duration-200">
          No recurring dates found
        </div>
      )}
    </div>
  );
};

MiniCalendar.propTypes = {
  startDate: PropTypes.instanceOf(Date),
  endDate: PropTypes.instanceOf(Date),
  recurrenceType: PropTypes.oneOf(["daily", "weekly", "monthly", "yearly"])
    .isRequired,
  interval: PropTypes.number.isRequired,
};

export default MiniCalendar;