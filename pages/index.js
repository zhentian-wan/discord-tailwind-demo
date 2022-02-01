export default function Home() {
  return (
    <>
      <div className="bg-gray-800 w-60 flex flex-col">
        <div className="px-3 h-12 flex items-center shadow-md font-title text-white">
          Dashboard
        </div>
        <div className="p-3 text-gray-300 flex-1 overflow-y-auto space-y-2 font-medium">
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
        <div className="px-3 h-12 shadow-md flex items-center">Friends</div>
        <div className="flex-1 p-3 overflow-y-auto space-y-4">No messages</div>
      </div>
    </>
  );
}
