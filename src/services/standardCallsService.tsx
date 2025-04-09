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