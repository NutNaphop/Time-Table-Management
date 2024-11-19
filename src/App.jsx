import React, { useState, useEffect } from "react";
import { ScheduleForm } from "./components/ScheduleForm";
import { ScheduleList } from "./components/ScheduleList";

const daysOfWeek = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

// Utility function to save to localStorage
const saveToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

// Utility function to load from localStorage
const loadFromLocalStorage = (key, defaultValue) => {
  const saved = localStorage.getItem(key);
  console.log(saved)
  return saved ? JSON.parse(saved) : defaultValue;
};


// Main App Component

const default_val = {
  "MON" : [] ,
  "TUE" : []  ,
  "WED" : []  ,
  "THU" : []  ,
  "FRI" : []  ,
  "SAT" : []  ,
  "SUN" : []  ,
}


const App = () => {
  const [schedule, setSchedule] = useState(
    loadFromLocalStorage("schedule", default_val)
  );

  // Handle adding new schedule
  const handleAdd = (data) => {
    const newEntry = {
      ...data,
      id: Date.now(),
      conflict: false,
    };

    setSchedule((prev) => {
      const dayEntries = prev[data.day] || [];

      // Check for time conflict
      const hasConflict = dayEntries.some(
        (entry) =>
          data.startTime < entry.endTime && data.endTime > entry.startTime
      );

      if (hasConflict) {
        newEntry.conflict = true;
      }

      const updatedEntries = [...dayEntries, newEntry].sort(
        (a, b) => a.startTime.localeCompare(b.startTime)
      );

      const updatedSchedule = { ...prev, [data.day]: updatedEntries };
      saveToLocalStorage("schedule", updatedSchedule); // Save to localStorage
      return updatedSchedule;
    });
  };

  // Handle deleting schedule
  const handleDelete = (id) => {
    setSchedule((prev) => {
      const updatedSchedule = {};
      for (const day in prev) {
        updatedSchedule[day] = prev[day].filter((item) => item.id !== id);
      }
      saveToLocalStorage("schedule", updatedSchedule); // Save to localStorage
      return updatedSchedule;
    });
  };
  
 

  // useEffect(() => {
  //   const data = loadFromLocalStorage("schedule")
  //   if(!data) saveToLocalStorage("schedule" , default_val)
  // } , [])


  return (
    <div className="container mx-auto p-10 font-prompt">
      <h1 className="text-2xl font-bold text-center mb-6">จัดตารางเรียน</h1>
      <ScheduleForm onAdd={handleAdd} />
      <ScheduleList schedule={schedule} onDelete={handleDelete} />
    </div>
  );
};

export default App;
