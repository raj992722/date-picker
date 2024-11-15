import { create } from "zustand";

const useDatePickerStore = create((set) => ({
  recurrenceType: "daily",   
  startDate: null,             
  endDate: null,               
  interval: 1,               
  selectedDates: [],         

  // Update the recurrence type (daily, weekly, etc.)
  setRecurrenceType: (type) => set({ recurrenceType: type }), 
  setStartDate: (date) => set({ startDate: date }),
  setEndDate: (date) => set({ endDate: date }),
  setInterval: (interval) => set({ interval }),
  setSelectedDates: (dates) => set({ selectedDates: dates }),
}));

export default useDatePickerStore;