// components/PromoCards.tsx
const PromoCards = () => {
    const promos = [
      {
        title: "وصل حديثًا",
        buttonText: "اكتشف الآن",
        bgColor: "bg-gray-100",
        textColor: "text-red-600",
        image:"/images/ar/arrive.png"
      },
      {
        title: "الفئات الأكثر شعبية",
        buttonText: "اكتشف الآن",
        bgColor: "bg-red-600",
        textColor: "text-white",
        image:"/images/ar/orders.png"
      },
    ];
  
    return (
      <div className="flex flex-col gap-4 h-full items-center justify-center w-full">
        {promos.map((promo, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-lg h-full w-full flex items-center justify-center flex-col ${promo.bgColor}`
                 

            }
            style={{
              backgroundImage: `url(${promo.image})`,
              backgroundSize: "cover",
            }}
          >
            <h2 className={`text-2xl font-bold ${promo.textColor} mb-4`}>
              {promo.title}
            </h2>
            <button className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800">
              {promo.buttonText}
            </button>
          </div>
        ))}
      </div>
    );
  };
  
  export default PromoCards;
  