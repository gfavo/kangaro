import { useAuth } from "@/context/authContext";
import { User } from "@/models/user";
import { getTeachers } from "@/services/standardCallsService";
import { useEffect, useState } from "react";

const Students = () => {
  const { user } = useAuth();
  let [teachers, setTeachers] = useState<User[]>([]);

  useEffect(() => {
    _setTeachers();
  }, []);

  const _setTeachers = async () => {
    let v = await getTeachers();
    setTeachers(v);
  }

  const TeacherComp = () => {
    return <div>Your Students: </div>;
  };

  const AdminComp = () => {
    return (
      <>
        <h2 className="font-barlow text-4xl">Select the teacher</h2>
        <select name="teacher" id="">
          <option value="">{(user as User).name} (Me)</option>
          { teachers.map((e) => {
            return (<option>{e.name}</option>)
          })}
        </select>
      </>
    );
  };
  return (
    <div className="flex flex-col items-center pt-10 h-full w-full">
      {(user as User).role == "teacher" ? <TeacherComp /> : <AdminComp />}
    </div>
  );
};

export default Students;
