// import React from 'react'
// import '../globals.css';
// import Image from "next/image";
// import card1 from "../image/card-item (1).png";
// import card2 from "../image/card-item (2).png";
// import card3 from "../image/card-item (3).png";
// import card4 from "../image/card-item.png";
// import card5 from "../image/col-md-4 (1).png";
// import row from "../image/row.png";

// import shop1 from "../image/shop-1.png";
// import shop2 from "../image/shop-2.png";
// import shop3 from "../image/shop-3.png";
// import shop4 from "../image/shop-4.png";
// import shop5 from "../image/shop-5.png";
// import shop6 from "../image/shop-6.png";
// import shop7 from "../image/shop-7.png";
// import shop8 from "../image/sjop-8.png";
// import Header from '@/components/header';
// import Nas from '@/components/shopnav';
// import Footer from '@/components/footer';








// export default function Shop() {
//   return (
//     <>
//     < Nas/>
//     <div
//       style={{
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "space-between",
//         padding: "10px 20px",
//         border: "1px solid #ddd",
//         borderRadius: "8px",
//         maxWidth: "1200px",
//         margin: "20px auto", // Centered on the page
//         backgroundColor: "#f9f9f9",
//         boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
//       }}
//     >
//       {/* Shop Section */}
//       <div style={{ fontWeight: "bold", fontSize: "24px", color: "#343a40" }}>
//         Shop
//       </div>

//       {/* Breadcrumb */}
//       <div style={{ fontSize: "14px", color: "#6c757d" }}>
//         <span style={{ cursor: "pointer", color: "#007BFF" }}>Home</span> &gt; Shop
//       </div>
//     </div>
    









    
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "space-between",
//         gap: "15px",
//         padding: "20px",
//       }}
//     >
//       {/* Card 1 */}
//       <div
//         style={{
//           width: "18rem",
//           border: "1px solid #ddd",
//           borderRadius: "8px",
//           overflow: "hidden",
//           boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
//         }}
//       >
//         <Image
//           src={card1}
//           alt="Card 1"
//           style={{ width: "100%", height: "auto", objectFit: "cover" }}
//         />
//       </div>

//       {/* Card 2 */}
//       <div
//         style={{
//           width: "18rem",
//           border: "1px solid #ddd",
//           borderRadius: "8px",
//           overflow: "hidden",
//           boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
//         }}
//       >
//         <Image
//           src={card2}
//           alt="Card 2"
//           style={{ width: "100%", height: "auto", objectFit: "cover" }}
//         />
//       </div>

//       {/* Card 3 */}
//       <div
//         style={{
//           width: "18rem",
//           border: "1px solid #ddd",
//           borderRadius: "8px",
//           overflow: "hidden",
//           boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
//         }}
//       >
//         <Image
//           src={card3}
//           alt="Card 3"
//           style={{ width: "100%", height: "auto", objectFit: "cover" }}
//         />
//       </div>

//       {/* Card 4 */}
//       <div
//         style={{
//           width: "18rem",
//           border: "1px solid #ddd",
//           borderRadius: "8px",
//           overflow: "hidden",
//           boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
//         }}
//       >
//         <Image
//           src={card4}
//           alt="Card 4"
//           style={{ width: "100%", height: "auto", objectFit: "cover" }}
//         />
//       </div>

//       {/* Card 5 */}
//       <div
//         style={{
//           width: "18rem",
//           border: "1px solid #ddd",
//           borderRadius: "8px",
//           overflow: "hidden",
//           boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
//         }}
//       >
//         <Image
//           src={card5}
//           alt="Card 5"
//           style={{ width: "100%", height: "auto", objectFit: "cover" }}
//         />
//       </div>
//     </div>


    


//     <div className="filter-bar">
//       <div className="left-section">
//         <span>Showing all 12 results</span>
//         <div className="view-options">
//           <button>Views:</button>
//           <button>Grid View</button>
//           <button>List View</button>
//         </div>
//       </div>
//       <div className="right-section">
//         <select>
//           <option value="popularity">Popularity</option>
//           <option value="rating">Rating</option>
//           <option value="newest">Newest</option>
//         </select>
//         <button>Filter</button>
//       </div>
//     </div>



//     <Image 
//         src={row} 
//         alt="Right Image" 
//         style={{ width: '100%', height: '70%' }} 
//       />







//   <Footer/>



//     {/* Cards Section */}
//     <section style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "space-between" }}>
//   {/* Card 1 */}
//   <div
//     className="card"
//     style={{
//       width: "18rem",
//       marginBottom: "20px",
//       border: "1px solid #ddd",
//       borderRadius: "8px",
//       padding: "16px",
//     }}
//   >
//     <Image
//       src={shop1}
//       alt="Right Image"
//       style={{ width: "100%", height: "70%" }}
//     />
//     <div className="card-body">
//       <h5 className="card-title">Graphic Design</h5>
//       <p className="card-text">English Department</p>
//       <div style={{ display: "flex", alignItems: "center" }}>
//         <p style={{ margin: 0, marginRight: "8px" }}>$16.48 $6.48</p>
//       </div>
//       {/* Color Dots on New Line, Single Row */}
//       <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginTop: "10px" }}>
//         <span style={{ width: "10px", height: "10px", backgroundColor: "red", borderRadius: "50%" }}></span>
//         <span style={{ width: "10px", height: "10px", backgroundColor: "blue", borderRadius: "50%" }}></span>
//         <span style={{ width: "10px", height: "10px", backgroundColor: "green", borderRadius: "50%" }}></span>
//         <span style={{ width: "10px", height: "10px", backgroundColor: "yellow", borderRadius: "50%" }}></span>
//       </div>
//     </div>
//   </div>

//   {/* Card 2 */}
//   <div
//     className="card"
//     style={{
//       width: "18rem",
//       marginBottom: "20px",
//       border: "1px solid #ddd",
//       borderRadius: "8px",
//       padding: "16px",
//     }}
//   >
//     <Image
//       src={shop2}
//       alt="Right Image"
//       style={{ width: "100%", height: "70%" }}
//     />
//     <div className="card-body">
//       <h5 className="card-title">Graphic Design</h5>
//       <p className="card-text">English Department</p>
//       <div style={{ display: "flex", alignItems: "center" }}>
//         <p style={{ margin: 0, marginRight: "8px" }}>$20.99 $10.99</p>
//       </div>
//       {/* Color Dots on New Line, Single Row */}
//       <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginTop: "10px" }}>
//         <span style={{ width: "10px", height: "10px", backgroundColor: "red", borderRadius: "50%" }}></span>
//         <span style={{ width: "10px", height: "10px", backgroundColor: "blue", borderRadius: "50%" }}></span>
//         <span style={{ width: "10px", height: "10px", backgroundColor: "green", borderRadius: "50%" }}></span>
//         <span style={{ width: "10px", height: "10px", backgroundColor: "yellow", borderRadius: "50%" }}></span>
//       </div>
//     </div>
//   </div>

//   {/* Card 3 */}
//   <div
//     className="card"
//     style={{
//       width: "18rem",
//       marginBottom: "20px",
//       border: "1px solid #ddd",
//       borderRadius: "8px",
//       padding: "16px",
//     }}
//   >
//     <Image
//       src={shop3}
//       alt="Right Image"
//       style={{ width: "100%", height: "70%" }}
//     />
//     <div className="card-body">
//       <h5 className="card-title">Graphic Design</h5>
//       <p className="card-text">English Department</p>
//       <div style={{ display: "flex", alignItems: "center" }}>
//         <p style={{ margin: 0, marginRight: "8px" }}>$30.00 $15.00</p>
//       </div>
//       {/* Color Dots on New Line, Single Row */}
//       <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginTop: "10px" }}>
//         <span style={{ width: "10px", height: "10px", backgroundColor: "red", borderRadius: "50%" }}></span>
//         <span style={{ width: "10px", height: "10px", backgroundColor: "blue", borderRadius: "50%" }}></span>
//         <span style={{ width: "10px", height: "10px", backgroundColor: "green", borderRadius: "50%" }}></span>
//         <span style={{ width: "10px", height: "10px", backgroundColor: "yellow", borderRadius: "50%" }}></span>
//       </div>
//     </div>
//   </div>

//   {/* Card 4 */}
//   <div
//     className="card"
//     style={{
//       width: "18rem",
//       marginBottom: "20px",
//       border: "1px solid #ddd",
//       borderRadius: "8px",
//       padding: "16px",
//     }}
//   >
//     <Image
//       src={shop4}
//       alt="Right Image"
//       style={{ width: "100%", height: "70%" }}
//     />
//     <div className="card-body">
//       <h5 className="card-title">Graphic Design</h5>
//       <p className="card-text">English Department</p>
//       <div style={{ display: "flex", alignItems: "center" }}>
//         <p style={{ margin: 0, marginRight: "8px" }}>$40.99 $20.99</p>
//       </div>
//       {/* Color Dots on New Line, Single Row */}
//       <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginTop: "10px" }}>
//         <span style={{ width: "10px", height: "10px", backgroundColor: "red", borderRadius: "50%" }}></span>
//         <span style={{ width: "10px", height: "10px", backgroundColor: "blue", borderRadius: "50%" }}></span>
//         <span style={{ width: "10px", height: "10px", backgroundColor: "green", borderRadius: "50%" }}></span>
//         <span style={{ width: "10px", height: "10px", backgroundColor: "yellow", borderRadius: "50%" }}></span>
//       </div>
//     </div>
//   </div>
// </section>




//  {/* Cards Section */}
//  <section style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "space-between" }}>
//   {/* Card 1 */}
//   <div
//     className="card"
//     style={{
//       width: "18rem",
//       marginBottom: "20px",
//       border: "1px solid #ddd",
//       borderRadius: "8px",
//       padding: "16px",
//     }}
//   >
//     <Image
//       src={shop5}
//       alt="Right Image"
//       style={{ width: "100%", height: "70%" }}
//     />
//     <div className="card-body">
//       <h5 className="card-title">Graphic Design</h5>
//       <p className="card-text">English Department</p>
//       <div style={{ display: "flex", alignItems: "center" }}>
//         <p style={{ margin: 0, marginRight: "8px" }}>$16.48 $6.48</p>
//       </div>
//       {/* Color Dots on New Line, Single Row */}
//       <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginTop: "10px" }}>
//         <span style={{ width: "10px", height: "10px", backgroundColor: "red", borderRadius: "50%" }}></span>
//         <span style={{ width: "10px", height: "10px", backgroundColor: "blue", borderRadius: "50%" }}></span>
//         <span style={{ width: "10px", height: "10px", backgroundColor: "green", borderRadius: "50%" }}></span>
//         <span style={{ width: "10px", height: "10px", backgroundColor: "yellow", borderRadius: "50%" }}></span>
//       </div>
//     </div>
//   </div>

//   {/* Card 2 */}
//   <div
//     className="card"
//     style={{
//       width: "18rem",
//       marginBottom: "20px",
//       border: "1px solid #ddd",
//       borderRadius: "8px",
//       padding: "16px",
//     }}
//   >
//     <Image
//       src={shop6}
//       alt="Right Image"
//       style={{ width: "100%", height: "70%" }}
//     />
//     <div className="card-body">
//       <h5 className="card-title">Graphic Design</h5>
//       <p className="card-text">English Department</p>
//       <div style={{ display: "flex", alignItems: "center" }}>
//         <p style={{ margin: 0, marginRight: "8px" }}>$20.99 $10.99</p>
//       </div>
//       {/* Color Dots on New Line, Single Row */}
//       <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginTop: "10px" }}>
//         <span style={{ width: "10px", height: "10px", backgroundColor: "red", borderRadius: "50%" }}></span>
//         <span style={{ width: "10px", height: "10px", backgroundColor: "blue", borderRadius: "50%" }}></span>
//         <span style={{ width: "10px", height: "10px", backgroundColor: "green", borderRadius: "50%" }}></span>
//         <span style={{ width: "10px", height: "10px", backgroundColor: "yellow", borderRadius: "50%" }}></span>
//       </div>
//     </div>
//   </div>

//   {/* Card 3 */}
//   <div
//     className="card"
//     style={{
//       width: "18rem",
//       marginBottom: "20px",
//       border: "1px solid #ddd",
//       borderRadius: "8px",
//       padding: "16px",
//     }}
//   >
//     <Image
//       src={shop7}
//       alt="Right Image"
//       style={{ width: "100%", height: "70%" }}
//     />
//     <div className="card-body">
//       <h5 className="card-title">Graphic Design</h5>
//       <p className="card-text">English Department</p>
//       <div style={{ display: "flex", alignItems: "center" }}>
//         <p style={{ margin: 0, marginRight: "8px" }}>$30.00 $15.00</p>
//       </div>
//       {/* Color Dots on New Line, Single Row */}
//       <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginTop: "10px" }}>
//         <span style={{ width: "10px", height: "10px", backgroundColor: "red", borderRadius: "50%" }}></span>
//         <span style={{ width: "10px", height: "10px", backgroundColor: "blue", borderRadius: "50%" }}></span>
//         <span style={{ width: "10px", height: "10px", backgroundColor: "green", borderRadius: "50%" }}></span>
//         <span style={{ width: "10px", height: "10px", backgroundColor: "yellow", borderRadius: "50%" }}></span>
//       </div>
//     </div>
//   </div>

//   {/* Card 4 */}
//   <div
//     className="card"
//     style={{
//       width: "18rem",
//       marginBottom: "20px",
//       border: "1px solid #ddd",
//       borderRadius: "8px",
//       padding: "16px",
//     }}
//   >
//     <Image
//       src={shop8}
//       alt="Right Image"
//       style={{ width: "100%", height: "70%" }}
//     />
//     <div className="card-body">
//       <h5 className="card-title">Graphic Design</h5>
//       <p className="card-text">English Department</p>
//       <div style={{ display: "flex", alignItems: "center" }}>
//         <p style={{ margin: 0, marginRight: "8px" }}>$40.99 $20.99</p>
//       </div>
//       {/* Color Dots on New Line, Single Row */}
//       <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginTop: "10px" }}>
//         <span style={{ width: "10px", height: "10px", backgroundColor: "red", borderRadius: "50%" }}></span>
//         <span style={{ width: "10px", height: "10px", backgroundColor: "blue", borderRadius: "50%" }}></span>
//         <span style={{ width: "10px", height: "10px", backgroundColor: "green", borderRadius: "50%" }}></span>
//         <span style={{ width: "10px", height: "10px", backgroundColor: "yellow", borderRadius: "50%" }}></span>
//       </div>
//     </div>
//   </div>
// </section>


//  {/* Cards Section */}
//  <section style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "space-between" }}>
//   {/* Card 1 */}
//   <div
//     className="card"
//     style={{
//       width: "18rem",
//       marginBottom: "20px",
//       border: "1px solid #ddd",
//       borderRadius: "8px",
//       padding: "16px",
//     }}
//   >
//     <Image
//       src={shop1}
//       alt="Right Image"
//       style={{ width: "100%", height: "70%" }}
//     />
//     <div className="card-body">
//       <h5 className="card-title">Graphic Design</h5>
//       <p className="card-text">English Department</p>
//       <div style={{ display: "flex", alignItems: "center" }}>
//         <p style={{ margin: 0, marginRight: "8px" }}>$16.48 $6.48</p>
//       </div>
//       {/* Color Dots on New Line, Single Row */}
//       <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginTop: "10px" }}>
//         <span style={{ width: "10px", height: "10px", backgroundColor: "red", borderRadius: "50%" }}></span>
//         <span style={{ width: "10px", height: "10px", backgroundColor: "blue", borderRadius: "50%" }}></span>
//         <span style={{ width: "10px", height: "10px", backgroundColor: "green", borderRadius: "50%" }}></span>
//         <span style={{ width: "10px", height: "10px", backgroundColor: "yellow", borderRadius: "50%" }}></span>
//       </div>
//     </div>
//   </div>

//   {/* Card 2 */}
//   <div
//     className="card"
//     style={{
//       width: "18rem",
//       marginBottom: "20px",
//       border: "1px solid #ddd",
//       borderRadius: "8px",
//       padding: "16px",
//     }}
//   >
//     <Image
//       src={shop2}
//       alt="Right Image"
//       style={{ width: "100%", height: "70%" }}
//     />
//     <div className="card-body">
//       <h5 className="card-title">Graphic Design</h5>
//       <p className="card-text">English Department</p>
//       <div style={{ display: "flex", alignItems: "center" }}>
//         <p style={{ margin: 0, marginRight: "8px" }}>$20.99 $10.99</p>
//       </div>
//       {/* Color Dots on New Line, Single Row */}
//       <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginTop: "10px" }}>
//         <span style={{ width: "10px", height: "10px", backgroundColor: "red", borderRadius: "50%" }}></span>
//         <span style={{ width: "10px", height: "10px", backgroundColor: "blue", borderRadius: "50%" }}></span>
//         <span style={{ width: "10px", height: "10px", backgroundColor: "green", borderRadius: "50%" }}></span>
//         <span style={{ width: "10px", height: "10px", backgroundColor: "yellow", borderRadius: "50%" }}></span>
//       </div>
//     </div>
//   </div>

//   {/* Card 3 */}
//   <div
//     className="card"
//     style={{
//       width: "18rem",
//       marginBottom: "20px",
//       border: "1px solid #ddd",
//       borderRadius: "8px",
//       padding: "16px",
//     }}
//   >
//     <Image
//       src={shop3}
//       alt="Right Image"
//       style={{ width: "100%", height: "70%" }}
//     />
//     <div className="card-body">
//       <h5 className="card-title">Graphic Design</h5>
//       <p className="card-text">English Department</p>
//       <div style={{ display: "flex", alignItems: "center" }}>
//         <p style={{ margin: 0, marginRight: "8px" }}>$30.00 $15.00</p>
//       </div>
//       {/* Color Dots on New Line, Single Row */}
//       <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginTop: "10px" }}>
//         <span style={{ width: "10px", height: "10px", backgroundColor: "red", borderRadius: "50%" }}></span>
//         <span style={{ width: "10px", height: "10px", backgroundColor: "blue", borderRadius: "50%" }}></span>
//         <span style={{ width: "10px", height: "10px", backgroundColor: "green", borderRadius: "50%" }}></span>
//         <span style={{ width: "10px", height: "10px", backgroundColor: "yellow", borderRadius: "50%" }}></span>
//       </div>
//     </div>
//   </div>

//   {/* Card 4 */}
//   <div
//     className="card"
//     style={{
//       width: "18rem",
//       marginBottom: "20px",
//       border: "1px solid #ddd",
//       borderRadius: "8px",
//       padding: "16px",
//     }}
//   >
//     <Image
//       src={shop4}
//       alt="Right Image"
//       style={{ width: "100%", height: "70%" }}
//     />
//     <div className="card-body">
//       <h5 className="card-title">Graphic Design</h5>
//       <p className="card-text">English Department</p>
//       <div style={{ display: "flex", alignItems: "center" }}>
//         <p style={{ margin: 0, marginRight: "8px" }}>$40.99 $20.99</p>
//       </div>
//       {/* Color Dots on New Line, Single Row */}
//       <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginTop: "10px" }}>
//         <span style={{ width: "10px", height: "10px", backgroundColor: "red", borderRadius: "50%" }}></span>
//         <span style={{ width: "10px", height: "10px", backgroundColor: "blue", borderRadius: "50%" }}></span>
//         <span style={{ width: "10px", height: "10px", backgroundColor: "green", borderRadius: "50%" }}></span>
//         <span style={{ width: "10px", height: "10px", backgroundColor: "yellow", borderRadius: "50%" }}></span>
//       </div>
//     </div>
//   </div>
// </section>



//     
//     </>
//   )
// }


import React from 'react';
import Image from 'next/image';
import card1 from "../image/card-item (1).png";
import card2 from "../image/card-item (2).png";
import card3 from "../image/card-item (3).png";
import card4 from "../image/card-item.png";
import card5 from "../image/col-md-4 (1).png";
import row from "../image/row.png";
import shop1 from "../image/shop-1.png";
import shop2 from "../image/shop-2.png";
import shop3 from "../image/shop-3.png";
import shop4 from "../image/shop-4.png";
import shop5 from "../image/shop-5.png";
import shop6 from "../image/shop-6.png";
import shop7 from "../image/shop-7.png";
import shop8 from "../image/sjop-8.png";
import Header from '@/components/header';
import Nas from '@/components/shopnav';
import Footer from '@/components/footer';

export default function Shop() {
  return (
    <>
      <Nas />
      <div className="flex justify-between p-4 border rounded-md max-w-screen-xl mx-auto bg-gray-100 shadow-md mb-8">
        <div className="text-xl font-bold text-gray-800">Shop</div>
        <div className="text-sm text-gray-500">
          <span className="cursor-pointer hover:text-blue-500">Home</span> &gt; Shop
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 p-4">
        <div className="card">
          <Image src={card1} alt="Card 1" className="w-full h-auto" />
        </div>
        <div className="card">
          <Image src={card2} alt="Card 2" className="w-full h-auto" />
        </div>
        <div className="card">
          <Image src={card3} alt="Card 3" className="w-full h-auto" />
        </div>
        <div className="card">
          <Image src={card4} alt="Card 4" className="w-full h-auto" />
        </div>
        <div className="card">
          <Image src={card5} alt="Card 5" className="w-full h-auto" />
        </div>
      </div>

      {/* Filter Bar */}
      <div className="flex justify-between p-4 mb-8">
        <div className="flex gap-6 items-center">
          <span>Showing all 12 results</span>
          <div className="flex gap-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Grid View</button>
            <button className="bg-gray-200 text-black px-4 py-2 rounded">List View</button>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <select className="border p-2 rounded">
            <option>Popularity</option>
            <option>Rating</option>
            <option>Newest</option>
          </select>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Filter</button>
        </div>
      </div>

      {/* Image Row */}
      <div className="w-full mb-8">
        <Image src={row} alt="Row" className="w-full h-auto" />
      </div>

      {/* Shop Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-4">
        <div className="card p-4 border rounded-md shadow-md">
          <Image src={shop1} alt="Shop 1" className="w-full h-auto" />
          <div className="mt-4">
            <h5 className="font-bold text-lg">Graphic Design</h5>
            <p className="text-sm text-gray-500">English Department</p>
            <div className="mt-2 text-xl font-semibold">
              $16.48 <span className="text-sm text-gray-500 line-through">$6.48</span>
            </div>
          </div>
        </div>

        <div className="card p-4 border rounded-md shadow-md">
          <Image src={shop2} alt="Shop 2" className="w-full h-auto" />
          <div className="mt-4">
            <h5 className="font-bold text-lg">Graphic Design</h5>
            <p className="text-sm text-gray-500">English Department</p>
            <div className="mt-2 text-xl font-semibold">
              $20.99 <span className="text-sm text-gray-500 line-through">$10.99</span>
            </div>
          </div>
        </div>

        <div className="card p-4 border rounded-md shadow-md">
          <Image src={shop3} alt="Shop 3" className="w-full h-auto" />
          <div className="mt-4">
            <h5 className="font-bold text-lg">Graphic Design</h5>
            <p className="text-sm text-gray-500">English Department</p>
            <div className="mt-2 text-xl font-semibold">
              $30.00 <span className="text-sm text-gray-500 line-through">$15.00</span>
            </div>
          </div>
        </div>

        <div className="card p-4 border rounded-md shadow-md">
          <Image src={shop4} alt="Shop 4" className="w-full h-auto" />
          <div className="mt-4">
            <h5 className="font-bold text-lg">Graphic Design</h5>
            <p className="text-sm text-gray-500">English Department</p>
            <div className="mt-2 text-xl font-semibold">
              $40.99 <span className="text-sm text-gray-500 line-through">$20.99</span>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
