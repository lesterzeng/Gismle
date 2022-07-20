import React from "react";

const Modal2 = () => {
  return (
    <div>
      <div
        className="modal fade   fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="exampleModal2"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog relative w-auto pointer-events-none">
          <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <h5
                className="text-xl font-medium leading-normal text-gray-800"
                id="exampleModalLabel "
              >
                Board - Settings
              </h5>
              <button
                type="button"
                className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>

              <div
                class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
                id="exampleModalScrollable"
                tabindex="-1"
                aria-labelledby="exampleModalScrollableLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-scrollable relative w-auto pointer-events-none">
                  <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                    <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                      <h5
                        class="text-xl font-medium leading-normal text-gray-800"
                        id="exampleModalScrollableLabel"
                      >
                        Modal title
                      </h5>
                      <button
                        type="button"
                        class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className=" flex flex-wrap items-center justify-end p-4 border-t border-gray-200 ">
              <div class=" w-full flex  mb-5 shadow-md ">
                <form action="" className="w-full p-4">
                  <div class="mb-2">
                    <label for="comment" className="text-base text-gray-600 ">
                      Previous Title
                    </label>
                    <textarea
                      className="w-full h-20 p-2 border rounded focus:outline-none focus:ring-gray-300 focus:ring-1"
                      name="comment"
                      placeholder="New title here..."
                    ></textarea>
                  </div>
                </form>
              </div>
              <div className=" flex flex-wrap w-full items-center justify-end border-t border-gray-200 ">
                <div class=" w-full flex  mb-5 shadow-md ">
                  <form action="" className="w-full p-4">
                    <div class="mb-2">
                      <label for="comment" className="text-base text-gray-600">
                        Previous Description
                      </label>
                      <textarea
                        className="w-full h-20 p-2 border rounded focus:outline-none focus:ring-gray-300 focus:ring-1"
                        name="comment"
                        placeholder="New description here..."
                      ></textarea>
                    </div>
                  </form>
                  <br />
                </div>
              </div>
              <button className="px-3 py-2 mr-2 text-sm text-blue-100 bg-blue-600 rounded  font-medium">
                Save
              </button>
              <button
                type="button"
                className="px-6
          py-2.5
          bg-purple-600
          text-white
          font-medium
          text-sm
          leading-tight
          rounded
          shadow-md
          hover:bg-purple-700 hover:shadow-lg
          focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-purple-800 active:shadow-lg
          transition
          duration-150
          ease-in-out"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal2;
