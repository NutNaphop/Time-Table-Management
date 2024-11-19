import { useState } from "react";
import Dialog from "./Dialog";

export const ScheduleForm = ({ onAdd }) => {


  // Days of the week
  const daysOfWeek = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

  const [formData, setFormData] = useState({
    code: "",
    subject: "",
    section: "",
    type: "Lecture",
    day: "MON",
    startTime: "",
    endTime: "",
  });

  const handleSubmit = () => {
    const { code, subject, startTime, endTime } = formData;

    // Validation
    if (!code || !subject || !startTime || !endTime || startTime >= endTime) {
      alert("กรุณากรอกข้อมูลให้ครบถ้วนและตรวจสอบเวลาให้ถูกต้อง");
      return;
    }

    onAdd(formData);

    // Reset form
    setFormData({
      code: "",
      subject: "",
      section: "",
      type: "Lecture",
      day: "MON",
      startTime: "",
      endTime: "",
    });
  };

  return (
    <div className="border rounded-3xl p-4 shadow-md  mb-6">
      <h2 className="text-lg font-semibold mb-4">เพิ่มตารางเรียนของคุณได้ที่นี้</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <input
          type="text"
          placeholder="รหัสวิชา"
          className="p-2 border rounded"
          value={formData.code}
          onChange={(e) =>
            setFormData({ ...formData, code: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="ชื่อวิชา"
          className="p-2 border rounded"
          value={formData.subject}
          onChange={(e) =>
            setFormData({ ...formData, subject: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="หมู่เรียน"
          className="p-2 border rounded"
          value={formData.section}
          onChange={(e) =>
            setFormData({ ...formData, section: e.target.value })
          }
        />
        <select
          className="p-2 border rounded"
          value={formData.type}
          onChange={(e) =>
            setFormData({ ...formData, type: e.target.value })
          }
        >
          <option value="Lecture">Lecture</option>
          <option value="Lab">Lab</option>
        </select>
        <select
          className="p-2 border rounded"
          value={formData.day}
          onChange={(e) => setFormData({ ...formData, day: e.target.value })}
        >
          {daysOfWeek.map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>
        <input
          type="time"
          className="p-2 border rounded"
          value={formData.startTime}
          onChange={(e) =>
            setFormData({ ...formData, startTime: e.target.value })
          }
        />
        <input
          type="time"
          className="p-2 border rounded"
          value={formData.endTime}
          onChange={(e) =>
            setFormData({ ...formData, endTime: e.target.value })
          }
        />
      </div>
      <div className="flex flex-row content-center gap-5 my-5">
        <button
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          เพิ่มวิชาเรียน
        </button>
        <Dialog />
      </div>

    </div>
  );
};

