import { useEffect } from 'react';

function Dashboard() {
  const fetchData = async () => {
    try {
      // const response = await fetch('http://localhost:5000/');
      const response = await fetch('/data.json');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return <h1>DashBoard</h1>;
}
export default Dashboard;
