import { useAuth } from "@/context/authContext";
import { User } from "@/models/user";
import { getStudents, getTeachers } from "@/services/standardCallsService";
import { useEffect, useState } from "react";
import { DashboardTable } from "../Table";

const Students = () => {
  const { user } = useAuth();
  const [teachers, setTeachers] = useState<User[]>([]);
  const [students, setStudents] = useState<{ name: string }[]>([]);
  const [selectedTeacher, setSelectedTeacher] = useState<number>(
    user!.id as number
  );

  useEffect(() => {
    _setTeachers();
    if((user as User).role == "teacher") {
      selectTeacher(user!.id as number);
    }
  }, []);

  const _setTeachers = async () => {
    let v = await getTeachers();
    setTeachers(v);
  };

  const TeacherComp = () => {
    return <div>Your Students: </div>;
  };

  const selectTeacher = async (teacherId: number) => {
    let students = await getStudents(teacherId);
    setStudents(students);
  };

  const AdminComp = () => {
    return (
      <div className="flex flex-col items-center w-full h-40 justify-between">
        <h2 className="font-barlow text-4xl">Select the teacher</h2>
        <select
          name="teacher"
          id=""
          className="bg-gray-100 rounded-lg p-3 w-70 text-center hover:bg-gray-200/85 focus:shadow-input duration-200 shadow-md"
          value={selectedTeacher}
          onChange={(e) => setSelectedTeacher(parseInt(e.target.value))}
        >
          <option value={(user as User).id}>{(user as User).name} (Me)</option>
          {teachers.map((e) => {
            return <option value={e.id}>{e.name}</option>;
          })}
        </select>
        <button
          type="submit"
          className={
            "w-70 h-10 bg-white text-primary border-2 font-bold font-barlowc cursor-pointer rounded-lg hover:scale-105 duration-200 justify-center items-center flex focus:bg-orange-200"
          }
          onClick={() => selectTeacher(selectedTeacher)}
        >
          Select Teacher
        </button>
      </div>
    );
  };
  return (
    <div className="flex flex-col items-center pt-10 h-full w-full justify-evenly">
      <div>
        {(user as User).role == "teacher" ? '' : <AdminComp />}
      </div>
      <div className="w-300 h-px bg-gray-500"></div>
      <div className="flex flex-col items-center w-full h-100 ">
        <h2 className="font-barlow text-4xl">Your Students</h2>
        <div>
          {students.length > 0 ? (
        <div className="w-100">
          <DashboardTable<{ name: string }>
            data={students}
            columns={[{ Header: "Name", accessor: "name" }]}
            callback={(row) => alert(row.name)}
          />
        </div>
          ) : (
        <div className="text-center text-lg font-barlow">
          Select a student
        </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Students;
