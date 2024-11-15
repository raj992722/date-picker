import React from "react";

const RecurrenceOptions = ({ recurrenceType, interval, setInterval }) => {
  return (
    <div className="mb-5">
      <label
        htmlFor="interval"
        className="block text-sm font-medium text-gray-700"
      >
        Every N - {recurrenceType}
      </label>
      <input
        type="number"
        id="interval"
        value={interval}
        onChange={(e) => setInterval(Number(e.target.value))}
        min={1}
        className="text-black mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 transition duration-200"
      />
    </div>
  );
};

export default RecurrenceOptions;