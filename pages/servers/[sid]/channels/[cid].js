import Post from "../../../Post";
import { useRouter } from "next/router";
import * as Icons from "../../../../components/icon";
import { getServerById } from "../../../_app";
import data from "../../../../data.json";
import Link from "next/link";
export default function Server1() {
  const router = useRouter();

  const getServerName = (id) =>
    getServerById(id)?.name ?? `Server ${router.query.sid}`;
  return (
    <>
      <div className="bg-gray-800 w-60 flex flex-col">
        <button className="px-4 h-12 flex items-center shadow-sm font-title text-white text-[15px] transition hover:bg-gray-550/[0.16]">
          <div className="relative w-4 h-4 mr-1">
            <Icons.Verified className="absolute w-4 h-4 text-gray-550" />
            <Icons.Check className="absolute w-4 h-4" />
          </div>
          {getServerName(router.query.sid)}
          <Icons.Chevron className="w-[18px] h-[18px] ml-auto opacity-80" />
        </button>
        <div className="text-gray-300 flex-1 overflow-y-auto font-medium pt-3 space-y-[21px]">
          {data["1"].categories.map((category) => (
            <div key={category.id}>
              {category.label && (
                <button className="flex items-center text-xs font-title uppercase px-0.5 tracking-wide">
                  <Icons.Arrow className="w-3 h-3 ml-0.5" />
                  {category.label}
                </button>
              )}

              <div className="space-y-0.5 mt-[5px]">
                {/* space-y-0.5: apply margin to the children element*/}
                {category.channels.map((channel) => (
                  <ChannelLink key={channel.id} channel={channel}></ChannelLink>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-gray-700 flex-1 flex flex-col">
        <div className="px-3 h-12 shadow-md flex items-center">general</div>
        <div className="flex-1 p-3 overflow-y-auto space-y-4">
          {[...Array(2)].map((_, i) => {
            return <Post key={i} />;
          })}
        </div>
      </div>
    </>
  );
}

function ChannelLink({ channel }) {
  const Icon = channel.icon ? Icons[channel.icon] : Icons.Hashtag;
  let router = useRouter();
  let active = +router.query.cid === +channel.id;

  return (
    <Link href={`/servers/1/channels/${channel.id}`}>
      <a
        className={`${
          active
            ? "text-white bg-gray-550/[0.32]"
            : "text-gray-300 hover:text-gray-100 hover:bg-gray-550/[0.16]"
        } flex px-2 mx-2 py-1 items-center rounded group`}
      >
        <Icon className="w-4 h-4 text-gray-400 mr-1.5" />
        {channel.label}
        <Icons.AddPerson className="w-5 h-5 ml-auto text-gray-200 hover:text-gray-100 opacity-0 group-hover:opacity-100 transition" />
      </a>
    </Link>
  );
}
