import { AlignLeft } from "lucide-react";
import React from "react";

const ServiceRightSideContent = () => {
  return (
    <div className="flex flex-col gap-6 w-full md:w-[360px] font-inter">
      <BIS_QCO_Updates />
    </div>
  );
};

export default ServiceRightSideContent;

const BIS_QCO_Updates = () => {
  const blogPosts = [
    {
      image:
        "https://images.unsplash.com/photo-1688578735352-9a6f2ac3b70a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "BIS certification for Work chairs",
      alt: "BIS certification for Work chairs",
      url: "/bis-qco-updates/bis-certificate-for-work-chairs",
    },
    {
      image:
        "https://shop.hofindia.com/cdn/shop/files/hof_Modern_1_a.jpg?v=1743406844&width=1946",
      title: "BIS certification for Chairs and stools",
      alt: "BIS certification for Chairs and stools",
      url: "/bis-qco-updates/bis-certificate-for-chairs-and-stools",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3MCIfpfHsgrogddkI6G12hT4i6LwIPATLHg&s",
      title: "BIS Notification for Tables and desks",
      alt: "BIS Notification for Tables and desks",
      url: "/bis-qco-updates/bis-certificate-for-tables-and-desks",
    },
    {
      image:
        "https://m.media-amazon.com/images/I/71rRReJmTiL._AC_UF894,1000_QL80_.jpg",
      title: "BIS Notification for Storage units",
      alt: "BIS Notification for Storage units",
      url: "/bis-qco-updates/bis-certificate-for-storage-units",
    },
    {
      image: "https://alephindia.in/images/isi/furniture-bunk-beds.png",
      title: "BIS Notification for Bunk beds",
      alt: "BIS Notification for Bunk beds",
      url: "/bis-qco-updates/bis-certificate-for-bunk-beds",
    },
    {
      image:
        "https://jharkhandstatenews.com/assets/admin/uploads/topstory_img/199879_1693229978.jpg",
      title: "BIS Notification for Solar DC Cable and Fire Survival Cable",
      alt: "BIS Notification for Solar DC Cable and Fire Survival Cable",
      url: "/bis-qco-updates/bis-certificate-for-solar-dc-cable-and-fire-survival-cable",
    },
    {
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/5/420886415/LD/HF/LZ/65909740/bis-certification-for-aluminium-alloy-forging-stock-and-forgings-alloy-24345.jpg",
      title:
        "BIS Notification for Wrought Aluminium and Aluminium Alloys, Forging Stock and Forgings",
      alt: "BIS Notification for Wrought Aluminium and Aluminium Alloys, Forging Stock and Forgings",
      url: "/bis-qco-updates/bis-certificate-for-wrought-aluminium-and-aluminium-alloys-forging-stock-and-forgings",
    },
    {
      image:
        "https://images.unsplash.com/photo-1651197122040-3ea0656161ae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "BIS Notification for H Acid",
      alt: "BIS Notification for H Acid",
      url: "/bis-qco-updates/bis-certificate-for-h-acid",
    },
    {
      image:
        "https://images.unsplash.com/photo-1617155093730-a8bf47be792d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "BIS Notification for K Acid",
      alt: "BIS Notification for K Acid",
      url: "/bis-qco-updates/bis-certificate-for-k-acid",
    },
    {
      image:
        "https://media.istockphoto.com/id/940248330/photo/potassium-permanganate-sodium-sulfate-mixture.jpg?s=612x612&w=0&k=20&c=lhxvzbD2cVVOJKQyLIOqSaq9dlJTtDH07kHoBT5q7_4=",
      title: "BIS Notification for Vinyl Sulphone",
      alt: "BIS Notification for Vinyl Sulphone",
      url: "/bis-qco-updates/bis-certificate-for-vinyl-sulphone",
    },
    {
      image:
        "https://m.media-amazon.com/images/I/71qI8OoNdtL._AC_UF1000,1000_QL80_.jpg",
      title: "BIS Notification for Electric Fence Energizers",
      alt: "BIS Notification for Electric Fence Energizers",
      url: "/bis-qco-updates/bis-certificate-for-electric-fence-energizers",
    },
    {
      image:
        "https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "BIS Notification for Clothes Washing Machines",
      alt: "BIS Notification for Clothes Washing Machines",
      url: "/bis-qco-updates/bis-certificate-for-clothes-washing-machines",
    },
    {
      image: "https://m.media-amazon.com/images/I/31waXELONZL.jpg",
      title: "BIS Notification for Gypsum Plaster Boards",
      alt: "BIS Notification for Gypsum Plaster Boards",
      url: "/bis-qco-updates/bis-certificate-for-gypsum-plaster-boards",
    },
    {
      image:
        "https://m.media-amazon.com/images/I/61pOnpX8BpL._AC_UF1000,1000_QL80_.jpg",
      title:
        "BIS Notification for Aluminium alloy tubes for irrigation purposes -welded tubes",
      alt: "BIS Notification for Aluminium alloy tubes for irrigation purposes -welded tubes",
      url: "/bis-qco-updates/bis-certificate-for-aluminium-alloy-tubes-for-irrigation-purposes-welded-tubes",
    },
    {
      image: "https://www.sunnysteel.com/img/extruded-finned-tube.jpg",
      title:
        "BIS Notification for Aluminium alloy tube for irrigation purposes – extruded tube",
      alt: "BIS Notification for Aluminium alloy tube for irrigation purposes – extruded tube",
      url: "/bis-qco-updates/bis-certificate-for-aluminium-alloy-tube-for-irrigation-purposes-extruded-tube",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLVrUUdi1q8ZFnBqvx3vW5Ac03cUtUwR7N_A&s",
      title:
        "BIS Notification for EC Grade Aluminium Rod produced by Continuous Casting and Rolling",
      alt: "BIS Notification for EC Grade Aluminium Rod produced by Continuous Casting and Rolling",
      url: "/bis-qco-updates/bis-certificate-for-ec-grade-aluminium-rod-produced-by-continuous-casting-and-rolling",
    },
    {
      image:
        "https://media.istockphoto.com/id/1322355858/photo/aluminium-round-long-products-on-black-steel-surface.webp?a=1&b=1&s=612x612&w=0&k=20&c=I3k2F2cQSo5AW1qOQ5uxi2ROi-YJQoH47XzApxCP7qY=",
      title:
        "BIS Notification for Wrought aluminium and aluminium alloy bars, rods and sections",
      alt: "BIS Notification for Wrought aluminium and aluminium alloy bars, rods and sections",
      url: "/bis-qco-updates/bis-certificate-for-wrought-aluminium-and-aluminium-alloy-bars-rods-and-sections",
    },
    {
      image:
        "https://5.imimg.com/data5/SELLER/Default/2023/3/EC/HR/GU/184505254/regular-gypsum-plasterboard.jpg",
      title: "BIS Notification for Gypsum Plaster Boards",
      alt: "BIS Notification for Gypsum Plaster Boards",
      url: "/bis-qco-updates/bis-certificate-for-gypsum-plaster-boards",
    },
  ];
  return (
    <div className="w-full md:w-[360px] p-6 rounded-lg bg-gray-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125] font-inter">
      <div className="flex gap-2 items-center">
        <AlignLeft className="text-[#232327]" />
        <div className="text-xl font-semibold text-[#232327] font-inter">
          BIS QCO Updates
        </div>
      </div>
    </div>
  );
};
