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
          <div
            key={el.index}
            className="w-full max-w-md mb-2 p-y-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700"
          >
            <div key={el.index} className="flow-root ">
              <ul
                role="list"
                className="divide-y divide-gray-200 dark:divide-gray-700"
              >
                <li className="">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <img
                        key={el.index}
                        className="h-32 w-32 rounded-full"
                        src={el.image}
                        alt="Neil image"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p
                        key={el.index}
                        className="text-sm font-medium text-gray-900 truncate dark:text-white"
                      >
                        {el.name}
                      </p>
                      <p
                        key={el.index}
                        className="text-sm text-gray-500 truncate dark:text-gray-400"
                      >
                        {el.price}
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
      <hr className="bg-red-500" />
    </div>
  );
};
export default PurchaseItems;
