// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useRouter } from "next/router";
// import styles from "./styles.module.css";
// import Navbar from "../../components/navbar/Navbar";

// const Trip = () => {
//   const [trip, setTrip] = useState();
//   const router = useRouter();
//   const fetchEvent = async () => {
//     const response = await axios.get(
//       `https://6491e3122f2c7ee6c2c91aac.mockapi.io/travel/${router.query.id}`,
      
//     );

    
//     setTrip(response.data);
//     console.log("response", response.data);
//   };

//   useEffect(() => {
//     router.query.id && fetchEvent();
//   }, [router.query.id]);

//   return (
//     <>
//       <Navbar />
//       <div className={styles.pageWrapper}>
//         {trip && (
//           <div className={styles.wrapper}>
//             <h1 className={styles.destination}>{trip.Destination}</h1>
//             <img className={styles.image} src={trip.ImageUrl} />

//             <div className={styles.contentWrapper}>
//               <div className={styles.tripInfo}>
//                 <h3 className={styles.date}>{trip.Date}</h3>
//                </div>
//               </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default Trip;