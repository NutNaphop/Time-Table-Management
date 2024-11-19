import { useEffect, useState } from "react";
import { ScheduleItem } from "./ScheduleItem";

// List Component
export const ScheduleList = ({ schedule, onDelete }) => {
    const daysOfWeek = ["All", "MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
    
    const colors = {
        'MON' : 'bg-yellow-500' ,
        'TUE' : 'bg-pink-500' ,
        'WED' : 'bg-green-500' ,
        'THU' :  'bg-orange-500' ,
        'FRI' : 'bg-blue-500' ,
        'SAT' : 'bg-purple-500' ,
        'SUN' : 'bg-red-500'
    }

    
    const [filterDay, setFilterDay] = useState("All");

    const filteredSchedule =
        filterDay === "All"
            ? schedule
            : { [filterDay]: schedule[filterDay] || [] };

    useEffect(() => {
        console.log(schedule)
    }, [])
    return (
        <div>
            {/* Filter Dropdown */}
            <div className="mb-6 flex justify-center">
                <select
                     className="select select-bordered w-full max-w-xs"
                    value={filterDay}
                    onChange={(e) => setFilterDay(e.target.value)}
                >
                    {daysOfWeek.map((day) => (
                        <option key={day} value={day}>
                            {day === "All" ? "All Days" : day}
                        </option>
                    ))}
                </select>
            </div>

            {/* Schedule Grid */}
            <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
                {Object.entries(filteredSchedule).map(([day, items]) => (
                    <div key={day} className="border rounded-lg shadow-md p-2">
                        <h2 className={`text-lg font-semibold text-center ${colors[day]} rounded-full text-black`}>
                            {day === "All" ? "All Days" : day}
                        </h2>
                        <div className="mt-2 space-y-2">
                            {items.length > 0 ? (
                                items.map((item) => (
                                    <ScheduleItem
                                        key={item.id}
                                        item={item}
                                        onDelete={onDelete}
                                        day={day}
                                    />
                                ))
                            ) : (
                                <p className="text-center text-gray-400">ไม่มีคลาส</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
