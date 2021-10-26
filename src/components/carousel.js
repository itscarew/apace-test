import { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";

const Items = ({ item }) => {
  return (
    <div className="w-full m-2 text-white">
      <div
        key={item.id}
        style={{
          backgroundImage: `url(${item.photo})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
        className="w-full h-80 rounded-lg p-4 font-bold "
      >
        <p> Up to </p>
        <p className="text-6xl">
          {" "}
          {item.discount} <span className="text-2xl"> off </span>{" "}
        </p>
        {item.title}
      </div>
      <div className="mt-2">
        <p>Ikea </p>
        <p className="font-bold"> 20% Off couches </p>
      </div>
    </div>
  );
};

function CauroselComponent() {
  const items = [
    {
      id: 1,
      discount: "20%",
      photo:
        "https://images.pexels.com/photos/10001033/pexels-photo-10001033.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    },
    {
      id: 2,
      discount: "5%",
      photo:
        "https://images.pexels.com/photos/5709661/pexels-photo-5709661.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    },
    {
      id: 3,
      discount: "50%",
      photo:
        "https://images.pexels.com/photos/6069083/pexels-photo-6069083.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      id: 4,
      discount: "40%",
      photo:
        "https://images.pexels.com/photos/4210860/pexels-photo-4210860.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      id: 5,
      discount: "60%",
      photo:
        "https://images.pexels.com/photos/6068960/pexels-photo-6068960.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      id: 6,
      discount: "50%",
      photo:
        "https://images.pexels.com/photos/6069083/pexels-photo-6069083.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
  ];

  const [data, setData] = useState(items);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  useEffect(() => {
    setData(items);
  }, []);

  return (
    <>
      <div className="px-0">
        <h1 className="text-white font-bold text-3xl ml-16 mb-2">Top Deals</h1>
        <Carousel breakPoints={breakPoints}>
          {data.map((item) => (
            <Items item={item} />
          ))}
        </Carousel>
      </div>
    </>
  );
}

export default CauroselComponent;
