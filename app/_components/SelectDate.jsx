
import React from "react";

const SelectDate = ({ handleStartDateChange, handleEndDateChange, recurrenceType, setRecurrenceType  }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold text-yellow-600 mb-6">
        Date Picker
      </h2>
      <div className="mb-5">
        <label
          htmlFor="start-date"
          className="block text-sm font-medium text-gray-700"
        >
          Start Date
        </label>
        <input
          type="date"
          id="start-date"
          onChange={handleStartDateChange}
          className=" text-black mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 transition duration-200"
        />
      </div>

      <div className="mb-5">
        <label
          htmlFor="end-date"
          className="block text-sm font-medium text-gray-700"
        >
          End Date (Optional)
        </label>
        <input
          type="date"
          id="end-date"
          onChange={handleEndDateChange}
          className="text-black mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 transition duration-200"
        />
      </div>

      <div className="mb-5">
        <label
          htmlFor="recurrence-type"
          className="block text-sm font-medium text-gray-700"
        >
          Recurrence Type
        </label>
        <select
          id="recurrence-type"
          value={recurrenceType}
          onChange={(e) => setRecurrenceType(e.target.value)}
          className="text-black mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 transition duration-200"
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>
    </div>
  );
};

export default SelectDate;