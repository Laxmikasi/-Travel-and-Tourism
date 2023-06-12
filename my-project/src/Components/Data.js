
import React, { useState, useEffect } from 'react';


 const Data=()=> {
        const [error, setError] = useState(null);
        const [isLoaded, setIsLoaded] = useState(false);
        const [users, setUsers] = useState([]);
      
        useEffect(() => {
          fetch("http://localhost:3001")
            .then(res => res.json())
            .then(
              (data) => {
                setIsLoaded(true);
                setUsers(data);
              },
              (error) => {
                setIsLoaded(true);
                setError(error);
              }
            )
        }, []);
if (error) {
        return <div className='content-container'>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div className='content-container'>Loading...</div>;
      } else {
        return (
          <div className='content-container'>
            <table className='table'>
              <thead>
                <tr>
                  <th>place</th>
                  <th>howmany</th>
                  <th>arrival</th>
                  <th>leaving</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr key={user.id}>
                    <td>{user.place}</td>
                    <td>{user.howmany}</td>
                    <td>{user.arrival}</td>
                    <td>{user.leaving}</td>
                    </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }
    }
export default Data ;
  
  

