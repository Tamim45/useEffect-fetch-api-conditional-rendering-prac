import React, { useEffect, useState } from "react";
import Loader from "./loader";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState();
  const removeTour = (id) => {
    const newTour = tours.filter ((tour) => tour.id != id);
    setTours(newTour)
  }
  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
      console.log(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTours();
  }, []);
  if (loading) {
    return (
        <Loader/>
    );
  }
  if (tours!= null &&tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no Tours left</h2>
          <button onClick={() => fetchTours()} className="btn">
            Load Tours
          </button>
        </div>
      </main>
    );
    }
    return (
      <main>
        {tours != null && <Tours tours={tours} removeTour = {removeTour}></Tours>}
      </main>
    );
}

export default App;
