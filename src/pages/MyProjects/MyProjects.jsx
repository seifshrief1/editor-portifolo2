import React from "react";
import Header from "../../components/header/Header";
import video1 from "../../assets/videoProject.mp4";
import video2 from "../../assets/videoProject2.mp4";
import video3 from "../../assets/videoProject3.mp4";
import video4 from "../../assets/videoProject4.mp4";
import Footer from "../../components/Footer/Footer";

const MyProjects = () => {
  const images = [
    "https://i.pinimg.com/564x/8f/53/6d/8f536d7fb6230d941547781662f3587d.jpg",
    "https://i.pinimg.com/564x/49/a1/c8/49a1c806f318b83911787013a8f5cc77.jpg",
    "https://i.pinimg.com/564x/b0/ad/ff/b0adffdc573620e594812e5431a40265.jpg",
    "https://i.pinimg.com/564x/69/a3/26/69a326e705a851844bc643553f56d416.jpg",
    "https://i.pinimg.com/564x/37/48/57/37485753e7a75b9f961a570362295744.jpg",
    "https://i.pinimg.com/564x/ff/6e/a9/ff6ea9e26d156180e4fb0fe5ef83b015.jpg",
    "https://i.pinimg.com/564x/b5/c0/3f/b5c03fbb3cc879bb0899b12549114ad3.jpg",
    "https://i.pinimg.com/564x/b5/c0/3f/b5c03fbb3cc879bb0899b12549114ad3.jpg",
    "https://i.pinimg.com/564x/b5/c0/3f/b5c03fbb3cc879bb0899b12549114ad3.jpg",
  ];
  return (
    <div>
      <Header />
      <div className="mt-24 min-h-screen text-gray-100">
        <h1 className="text-4xl font-semibold text-center">اعمالي</h1>

        {/* Image Gallery Section */}
        <div className="mx-10 p-5 rounded-xl">
          <h2 className="text-2xl font-bold text-right mb-8">معرض الصور</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`project-${index + 1}`}
                className="w-full h-64 object-cover rounded-xl transform hover:scale-105 transition-transform duration-300 ease-out shadow-lg"
              />
            ))}
          </div>
        </div>
        {/* Video Gallery Section */}
        <div className="mt-16 mx-10 p-5 rounded-xl">
          <h2 className="text-2xl font-bold text-right mb-8">مشاريع الفيديو</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[video1, video2, video3, video4].map((video, index) => (
              <video
                key={index}
                src={video}
                className="w-full h-80 object-cover rounded-xl transform hover:scale-105 transition-transform duration-300 ease-out shadow-lg"
                autoPlay
                loop
                muted
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyProjects;
