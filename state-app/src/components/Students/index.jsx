import React from "react";
import { useState } from "react";

const Students = () => {
  const [students, setStudents] = useState([]);
  return (
    <div>
      <h3>Students</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const newStudent = {
            id: new Date().valueOf(),
            fullname: e.target.fullname.value,
            grade: e.target.grade.value,
          };
          setStudents([...students, newStudent]);
          e.target.fullname.value = "";
          e.target.grade.value = "";
        }}
        action=""
      >
        <input name="fullname" type="text" placeholder="student name" />
        <input
          name="grade"
          type="number"
          min={0}
          step={5}
          placeholder="student grade"
        />
        <button type="submit"> Add student</button>
      </form>
      <hr />
      <h4>Students</h4>
      <button onClick={()=>{
        console.log("salam");
        
      const sortedStudents= students.sort((x,y)=>x.grade-y.grade)
      setStudents([...sortedStudents]);
      }}>sort by grade</button>

      <button onClick={()=>{
        const sortedStudents= students.sort((x,y)=>x.fullname.localeCompare(y.fullname))
        setStudents([...sortedStudents])
      }}>sort by name</button>

      <input onKeyUp={(e)=>{
        setStudents([...students.filter((x)=>x.fullname.toLowerCase().trim().includes(e.target.value))])
      }} type="text" placeholder="search student" />
      <ul>
        {students &&
          students.map((stu) => {
            return (
              <li key={stu.id}>
                {stu.fullname} {stu.grade}
                <button
                onClick={()=>{
                    if( window.confirm("are you sure delete")){
                        setStudents(students.filter((x)=>x.id !=stu.id)) 
                    }
                }}
                >X</button>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Students;
