import { useState, useEffect } from "react";

const PurchaseItems = ({ data }) => {
  const [finaldata, setFinalData] = useState([]);

  useEffect(() => {
    setFinalData(data);
  }, [data]);

  return (
    <div>
      <div>
        {finaldata.map((el) => (
          <div>
            <div
              className="flex justify-between sm:gap-96 gap-12 items-center w-full mt-4"
              key={el.index}
            >
              <p className="">{el.name}</p>
              <p>{el.price}</p>
            </div>
            <hr className="" />
          </div>
        ))}
      </div>
      <hr className="bg-red-500" />
    </div>
  );
};
export default PurchaseItems;
