import { useContext } from "react";
import { localize } from "../../Translation";
import { CartContext } from "../../App";

const BookInformation = ({ setShoeInformationModal, moreDetail }) => {
  let { language } = useContext(CartContext);

  const closeInfoModal = () => {
    setShoeInformationModal(false);
  };

  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <div className="mt-2">
                    <div className="w-full flex justify-center items-center">
                      <img src={moreDetail.image} alt={moreDetail.name} />
                    </div>
                    <p className="pt-2">
                      <span className="font-bold">
                        {localize(language, "name")}:
                      </span>
                      {moreDetail.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      <span className="font-bold">
                        {localize(language, "Information")}:
                      </span>
                      {moreDetail.info}
                    </p>
                    <p>
                      {localize(language, "ISBN")}
                      {moreDetail.ISBN}, {localize(language, "BuyTheBook")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                onClick={closeInfoModal}
                type="button"
                className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
              >
                {localize(language, "close")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookInformation;
