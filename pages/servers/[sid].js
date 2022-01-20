import Post from "../Post";
import { useRouter } from "next/router";

export default function Server1() {
  const router = useRouter();
  return (
    <>
      <div className="bg-gray-800 w-60 flex flex-col">
        <div className="px-3 h-12 flex items-center shadow-md font-title text-white">
          Server {router.query.sid}
        </div>
        <div className="p-3 text-gray-300 flex-1 overflow-y-scroll space-y-2 font-medium">
          <div className="flex-1 p-4 text-white">channels (unread)</div>
        </div>
      </div>
      <div className="bg-gray-700 flex-1 flex flex-col">
        <div className="px-3 h-12 shadow-md flex items-center">general</div>
        <div className="flex-1 p-3 overflow-y-scroll space-y-4">
          {[...Array(40)].map((_, i) => {
            return <Post key={i} />;
          })}
        </div>
      </div>
    </>
  );
}
