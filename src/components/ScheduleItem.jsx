import copy from "copy-to-clipboard";
import { useEffect } from "react";

// Item Component
export const ScheduleItem = ({ item, onDelete , day }) => {

  const copyToClipboard = (code) => {
    let isCopy = copy(code);
    if (isCopy) {
      alert("คัดลอกรหัสเรียบร้อย")
    }
  };


    const colors = {
        'MON' : 'bg-yellow-200' ,
        'TUE' : 'bg-pink-200' ,
        'WED' : 'bg-green-200' ,
        'THU' :  'bg-orange-200' ,
        'FRI' : 'bg-blue-200' ,
        'SAT' : 'bg-purple-200' ,
        'SUN' : 'bg-red-200'
    }

    useEffect(() => {
        console.log(day)
    } , [])
    return (
      <div
        className={`p-2 rounded-lg shadow ${
          item.conflict  ? "bg-gray-300" : ""
        } relative ${colors[day]} cursor-pointer`}
        onClick={() => copyToClipboard(item.code)}
      >
        <button
          className="absolute top-1 right-1 text-red-600 font-bold"
          onClick={() => onDelete(item.id)}
        >
          &times;
        </button>
        <p className="font-medium text-black">
          {item.startTime} - {item.endTime}
        </p>
        <p className="text-sm text-black">{item.subject}</p>
        <p className="text-xs text-black">
          {item.code} | {item.type} | Sec {item.section}
        </p>
      </div>
    );
  };