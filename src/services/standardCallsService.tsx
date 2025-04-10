export const getTeachers = async () => {
    try {
    const response = await fetch("http://localhost:5000/api/general/teachers", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });

      const data = await response.json();

      return data;
    } catch (e) {
        return e;
    }

}

export const getStudents = async (teacherId: number) => {
    try {
        const response = await fetch("http://localhost:5000/api/general/students", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify({teacherId: teacherId})
          });
    
          const data = await response.json();
    
          return data;
        } catch (e) {
            return e;
        }
}