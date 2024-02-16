// "use client"

// import React, { useState } from 'react';
// import worldMapImage from '../public/mum2.png'; // Import your image
// import Image from 'next/image';

// const cityCoordinates = {
//   JFK: { name: "New York", lat: 40.6413, lng: -73.7781 },
//   BOM: { name: "Mumbai", lat: 19.0896, lng: 72.8749 },
//   LON: { name: "London", lat: 51.5074, lng: -0.1278 }, // Coordinates for London
//   DXB: { name: "Dubai", lat: 25.276987, lng: 55.296249 },
//   // Add more cities with their lat and lng
// };

// const MapWithImage = () => {
//   const [fromCity, setFromCity] = useState('');
//   const [toCity, setToCity] = useState('');
//   const [linePath, setLinePath] = useState('');

//   // Convert geographic coordinates to pixel positions
//   const getPixelPosition = (lat, lng) => {
//     // Placeholder for conversion logic
//     // You'll need to replace this with your own conversion logic
//     return { x: lng * 1 + 180.5, y: -lat * 1 + 150 }; // Example conversion
//   };

//   const createCurvePath = (start, end) => {
//     const midX = (start.x + end.x) / 2;
//     const midY = (start.y + end.y) / 2;
//     const dx = (end.x - start.x);
//     const dy = (end.y - start.y);
//     const normalizationFactor = Math.sqrt(dx * dx + dy * dy);
//     // Adjust the offset to move the control point upwards
//     const offSetX = -dy / normalizationFactor * 80; // Adjust the 50 to control the curve's height
//     const offSetY = -dx / normalizationFactor * 80; // Use negative value to push control point up
//     const controlX = midX + offSetX;
//     const controlY = midY + offSetY;
//     const curveHeight = 50; // adjust this value as necessary
//     const controlPoint = { x: midX + offSetX, y: midY + offSetY - curveHeight };
//     // Set the positions for the text labels
//     const startPoint = { x: start.x, y: start.y + 10 }; // adjust y as necessary
//     const endPoint = { x: end.x, y: end.y + 10 }; // adjust y as necessary
//     const curvePoint = { x: controlPoint.x, y: controlPoint.y - 10 }; // adjust y as necessary
//     return {
//       path: `M${start.x},${start.y} Q${controlPoint.x},${controlPoint.y} ${end.x},${end.y}`,
//       startLabel: startPoint,
//       endLabel: endPoint,
//       curveLabel: curvePoint
//     };
//   };

//   const handleCitySelect = () => {
//     if (fromCity && toCity) {
//       const fromPosition = getPixelPosition(cityCoordinates[fromCity].lat, cityCoordinates[fromCity].lng);
//       const toPosition = getPixelPosition(cityCoordinates[toCity].lat, cityCoordinates[toCity].lng);
//       const linePath = createCurvePath(fromPosition, toPosition);
//       setLinePath(linePath);
//     }
//   };

//   const curveData = fromCity && toCity ? createCurvePath(
//     getPixelPosition(cityCoordinates[fromCity].lat, cityCoordinates[fromCity].lng),
//     getPixelPosition(cityCoordinates[toCity].lat, cityCoordinates[toCity].lng)
//   ) : null;
  

//   return (
//     <div>
//       <select value={fromCity} onChange={(e) => setFromCity(e.target.value)} onBlur={handleCitySelect}>
//         <option value="">Select From City</option>
//         {Object.keys(cityCoordinates).map((city) => (
//           <option key={city} value={city}>{cityCoordinates[city].name}</option>
//         ))}
//       </select>

//       <select value={toCity} onChange={(e) => setToCity(e.target.value)} onBlur={handleCitySelect}>
//         <option value="">Select To City</option>
//         {Object.keys(cityCoordinates).map((city) => (
//           <option key={city} value={city}>{cityCoordinates[city].name}</option>
//         ))}
//       </select>

//       <div style={{ position: 'relative', width: '421px', height: '320px' }}>
//         <Image src={worldMapImage} alt="World Map" layout="fill" objectFit="cover" />
//         {curveData && (
//           <svg width="421" height="320" style={{ position: 'absolute', top: 0, left: 0 }}>
//             <path d={curveData.path} stroke="orange" strokeWidth="2" fill="none" />
//             <text x={curveData.startLabel.x} y={curveData.startLabel.y} fill="white" textAnchor="middle" className='mt-10'>
//               {cityCoordinates[fromCity].name}
//             </text>
//             <text x={curveData.endLabel.x} y={curveData.endLabel.y} fill="white" textAnchor="middle" className='mt-10'>
//               {cityCoordinates[toCity].name}
//             </text>
//             <circle cx={curveData.startLabel.x} cy={curveData.startLabel.y - 10} r={4} fill="orange" />
//             <circle cx={curveData.endLabel.x} cy={curveData.endLabel.y - 10} r={4} fill="orange" />
//           </svg>
//         )}
//       </div>


//     </div>
//   );
// };

// export default MapWithImage;
