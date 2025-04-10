import { Column } from "@/models/tableTypes";
import { DashboardTable } from "../Table";
import { User } from "@/models/user";
import { useEffect, useState } from "react";
import { getTeachers } from "@/services/standardCallsService";

const Teachers = () => {
    let [teachers, setTeachers] = useState<User[]>([]);
  
    useEffect(() => {
      _setTeachers();
    }, []);
  
    const _setTeachers = async () => {
      let v = await getTeachers();
      setTeachers(v);
    }

  
  const columns: Column<User>[] = [
    { Header: "Name", accessor: "name" },
    { Header: "Email", accessor: "email" },
  ];
  

    return (
        <div className="flex flex-col items-center pt-10 h-full w-full">
          <h2 className="font-barlow text-4xl">
            Your Teachers
          </h2>
          <div><DashboardTable<User> data={teachers} columns={columns} callback={() => {}}/></div>
        </div>
      );
}


export default Teachers;