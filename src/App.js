import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {

  const removeTour = (id) => {
    const newTour = tours.filter((tour) => tour.id != id);
    setTour(newTour);

  }



  const [loading ,setLoading] = useState(true);
  const [tours,setTour] = useState([]);


    const fetchData = async() => {
      try {
      const response = await fetch(url)
      const dataTour = await response.json();
      console.log(dataTour);
      setTour(dataTour);
      setLoading(false);

        
      } catch (error) {
        setLoading(false);
        console.log(error)
        
      }
 
    
      
      
    
  } 
  useEffect(() => {
    fetchData();
  },[])



  if(loading){
    return (
      <main>
      <Loading></Loading>
    </main>
       )
    
  }
  if(tours.length === 0){
    return(
      <main>
        <section>

        <div className="title">
        <h2>No Data Left....</h2>

        <button className="btn" onClick={fetchData}>Refresh again..</button>
        </div>
        </section>
      </main>
    
    )

  }
  return(
    <main>
      <Tours tours = {tours} removeTour = {removeTour}></Tours>

    </main>
  ) 
}

export default App
