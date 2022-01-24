import Post from "../Post";
import { useRouter } from "next/router";
import { VerifiedIcon, CheckIcon, ChevronIcon } from "../../components/icon";
import { getServerById } from "../_app";

export default function Server1() {
  const router = useRouter();

  const getServerName = (id) =>
    getServerById(id)?.name ?? `Server ${router.query.sid}`;
  return (
    <>
      <div className="bg-gray-800 w-60 flex flex-col">
        <button className="px-4 h-12 flex items-center shadow-sm font-title text-white text-[15px] transition hover:bg-gray-550/[0.16]">
          <div className="relative w-4 h-4 mr-1">
            <VerifiedIcon className="absolute w-4 h-4 text-gray-550" />
            <CheckIcon className="absolute w-4 h-4" />
          </div>
          {getServerName(router.query.sid)}
          <ChevronIcon className="w-[18px] h-[18px] ml-auto opacity-80" />
        </button>
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
