import React from "react";

// const TodoList = (props) => {

function TodoList(props) {
  console.log(props.tasks);
  //==list of todolist==/
  let things = props.tasks.map((d, i) => {
    return (
      <>
        <div
          key={i}
          className="rounded overflow-hidden shadow-lg bg-white border-b-4"
        >
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{d.actionTitle}</div>
            <p className="text-gray-700 text-base">{d.actionDesc}</p>
          </div>
          <div className=" px-6  pb-2 text-right w-80 float-right">
            <div className="flex  p-2 w-full justify-center space-x-0">
              <button
                onClick={() => props.handleRemove(i)}
                className="min-w-auto w-15 h-10 bg-red-300 p-2 rounded-l-full hover:bg-red-500  text-white font-semibold  hover:flex-grow transition-all duration-200 ease-in-out"
              >
                Delete
              </button>{" "}
              <button className="min-w-auto w-15 h-10 bg-blue-300 p-2 rounded-none hover:bg-blue-500 text-white font-semibold  hover:flex-grow transition-all duration-200 ease-in-out">
                Edit
              </button>
              <button
                onClick={() => props.addToInProgress(d, i)}
                className="min-w-auto w-15 h-10 bg-green-300 p-2 rounded-r-full hover:bg-green-500 text-white font-semibold hover:flex-grow transition-all duration-200 ease-in-out"
              >
                Move
              </button>
            </div>
          </div>
        </div>
      </>
    );
  });

  //==inPorgress==//

  let things2 = props.lists.map((d, i) => {
    return (
      <>
        <div className="rounded overflow-hidden shadow-lg bg-white border-b-4">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{d.todoList}</div>
            <p className="text-gray-700 text-base">Comment</p>
          </div>
          <div className=" px-6  pb-2 text-right w-80 float-right">
            <div className="flex  p-2 w-full justify-center space-x-0">
              <button
                // onClick={() => props.handleRemove(i)}
                className="min-w-auto w-15 h-10 bg-red-300 p-2 rounded-l-full hover:bg-red-500  text-white font-semibold  hover:flex-grow transition-all duration-200 ease-in-out"
              >
                Delete
              </button>{" "}
              <button className="min-w-auto w-15 h-10 bg-blue-300 p-2 rounded-none hover:bg-blue-500 text-white font-semibold  hover:flex-grow transition-all duration-200 ease-in-out">
                Edit
              </button>
              <button
                onClick={() => props.addToCompleted(d, i)}
                className="min-w-auto w-15 h-10 bg-green-300 p-2 rounded-r-full hover:bg-green-500 text-white font-semibold hover:flex-grow transition-all duration-200 ease-in-out"
              >
                Move
              </button>
            </div>
          </div>
        </div>
      </>
    );
  });

  return (
    <>
      <div>
        <div className="grid grid-cols-3 gap-6 mt-4 w-full">
          <div className="relative p-4 w-full bg-gradient-to-r from-teal-500 via-blue-500 to-indigo-500  overflow-hidden shadow-xl hover:shadow-md rounded-lg">
            <div className="bg-transparent rounded shadow-xl mr-2 w-full">
              <div className=" bg-orange-600 rounded mb-4 justify-center flex">
                <h1 className=" text-grey-darkest text-3xl rounded mt-5 h-20 p-4">
                  To Do ᕙ(`▿´)ᕗ
                </h1>
              </div>
              <form onSubmit={props.handleTodoTasks}>
                <div className="flex mt-4">
                  <input
                    className="shadow  appearance-none border rounded w-full py-2 px-3 h-10 text-grey-darker"
                    placeholder="Add Tasks Here.."
                    onChange={props.handleTodoList}
                    value={props.todoList}
                  />
                  <br></br>
                  {/* <input
                    className="shadow  appearance-none border rounded w-full py-2 px-3 h-10 text-grey-darker"
                    placeholder="Add Tasks Here.."
                    onChange={props.handleDescription}
                    value={props.todo}
                  /> */}

                  <div className="flex bg-transparent pb-4 pr-1 pl-2 w-50 justify-center space-x-10 float-right rounded">
                    <button
                      type="submit"
                      onSubmit={props.handleTodoTasks}
                      class="min-w-auto w-10 h-10 bg-orange-300 text-xs rounded-full hover:bg-orange-500 text-white font-semibold transition-rotation duration-300 hover:rotate-45 ease-in-out"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </form>
              {things}
            </div>
          </div>

          <div className="relative p-4 w-md bg-gradient-to-r from-teal-500 via-blue-500 to-indigo-500  overflow-hidden shadow-xl hover:shadow-md rounded-lg">
            <div className="animate-pulse flex flex-col "></div>
            <div className="bg-white rounded shadow-xl mr-2 w-full">
              <div className=" bg-orange-600 rounded mb-4 justify-center flex">
                <h1 className=" text-grey-darkest text-3xl  rounded mt-5 h-20 p-4">
                  In Progress (¬‿¬)
                </h1>
              </div>
            </div>
            {/* <div className="rounded overflow-hidden shadow-lg bg-white border-b-4">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Title</div>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
              <div className=" px-6  pb-2 text-right w-80 float-right">
                <div className="flex  p-2 w-full justify-center space-x-0">
                  <button className="min-w-auto w-15 h-10 bg-red-300 p-2 rounded-l-full hover:bg-red-500  text-white font-semibold  hover:flex-grow transition-all duration-200 ease-in-out">
                    Delete
                  </button>{" "}
                  <button className="min-w-auto w-15 h-10 bg-blue-300 p-2 rounded-none hover:bg-blue-500 text-white font-semibold  hover:flex-grow transition-all duration-200 ease-in-out">
                    Edit
                  </button>
                  <button className="min-w-auto w-15 h-10 bg-green-300 p-2 rounded-r-full hover:bg-green-500 text-white font-semibold hover:flex-grow transition-all duration-200 ease-in-out">
                    Move
                  </button>
                </div>
              </div>
            </div> */}

            {things2}
          </div>

          <div className="relative p-4 w-full bg-gradient-to-r from-teal-500 via-blue-500 to-indigo-500 overflow-hidden shadow hover:shadow-md rounded-lg">
            <div className="animate-pulse flex flex-col"></div>
            <div className="bg-white rounded shadow-xl mr-2 w-full">
              <div className=" bg-orange-600 rounded mb-4 justify-center flex">
                <h1 className=" text-grey-darkest text-2xl  rounded mt-5 h-20 p-4">
                  Completed <span>(╯ ͡° ͜ʖ ͡°)╯┻━┻</span>
                </h1>
              </div>
            </div>
            <div className="rounded overflow-hidden shadow-lg bg-white border-b-4">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Title</div>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
              <div className="flex bg-white p-4 w-full justify-center space-x-10">
                <button className="min-w-auto w-32 h-10 bg-blue-300 p-2 rounded-t-xl hover:bg-blue-500 text-white font-semibold transition-transform hover:-translate-y-2 ease-in-out">
                  View More
                </button>
              </div>
            </div>
            <div className="rounded overflow-hidden shadow-lg bg-white border-b-4">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Title 2</div>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
              <div className="flex bg-white p-4 w-full justify-center space-x-10">
                <button className="min-w-auto w-32 h-10 bg-blue-300 p-2 rounded-t-xl hover:bg-blue-500 text-white font-semibold transition-transform hover:-translate-y-2 ease-in-out">
                  View More
                </button>
              </div>
            </div>{" "}
            {/* //here add completed tasks */}
          </div>
        </div>
      </div>
    </>
  );
}
export default TodoList;
