import React from 'react';

function Dialog() {
    return (
        <>
            {/* Button Section */}
            <button className="btn btn-info" onClick={() => document.getElementById('my_modal_5').showModal()}>
                ใช้งานยังไง?
            </button>

            {/* Modal Section */}
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    {/* Modal Header */}
                    <h3 className="font-bold text-lg">วิธีใช้งาน!</h3>

                    {/* Modal Content */}
                    <h4 className="font-bold text-lg pt-5">การเพิ่ม</h4>
                    <p>กรอกข้อมูลที่ต้องการ หากเวลาทับกันจะขึ้นเป็นสีเทา หากไม่ทับก็จะขึ้นปกติ</p>

                    <h4 className="font-bold text-lg pt-5">การลบ</h4>
                    <p>สามารถกดลบได้ที่มุมขวาบนของรายวิชา</p>

                    {/* Modal Footer */}
                    <div className="modal-action">
                        <form method="dialog">
                            {/* Close Button */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    );
}

export default Dialog;
