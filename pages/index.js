import Post from "./Post";
export default function Home() {
  return (
    <div className="flex text-gray-100 h-screen">
      <div className="bg-gray-900 p-3 space-y-2 overflow-y-scroll">
        {[...Array(40)].map((_, i) => {
          return (
            <div
              key={i}
              className="bg-white text-gray-800 rounded-full w-12 h-12 flex justify-center items-center"
            >
              {i}
            </div>
          );
        })}
      </div>
      <div className="bg-gray-800 w-60 flex flex-col">
        <div className="px-3 h-12 flex items-center shadow-md font-title text-white">
          Tailwind CSS
        </div>
        <div className="p-3 text-gray-300 flex-1 overflow-y-scroll space-y-2 font-medium">
          <div className="flex-1 p-4 text-white">channels (unread)</div>
          {[...Array(40)].map((_, i) => {
            return (
              <div key={i} className="flex-1 p-4">
                channels {i}
              </div>
            );
          })}
        </div>
      </div>
      <div className="bg-gray-700 flex-1 flex flex-col">
        <div className="px-3h-12 shadow-md flex items-center">general</div>
        <div className="flex-1 p-3 overflow-y-scroll space-y-4">
          {[...Array(40)].map((_, i) => {
            return <Post key={i} />;
          })}
        </div>
      </div>
    </div>
  );
}
