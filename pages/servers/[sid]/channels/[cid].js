import Post from "../../../Post";
import { useRouter } from "next/router";
import * as Icons from "../../../../components/icon";
import { getServerById } from "../../../_app";
import { data } from "../../../../data";
import Link from "next/link";
import { useState } from "react";

/**
 * 
   1. flex-shrink min-w-0
 */
export default function Server1() {
  const [closeCategories, sestCloseCategoreis] = useState([]);
  const router = useRouter();
  let server = data[`${router.query.sid}`];
  const channel = server.categories
    .map((c) => c.channels)
    .flat()
    .find((channel) => +channel.id === +router.query.cid);
  const toggleCategory = (cid) => {
    sestCloseCategoreis((closeCategories) => {
      return closeCategories.includes(cid)
        ? closeCategories.filter((id) => id !== cid)
        : [...closeCategories, cid];
    });
  };

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
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="flex items-center text-xs font-title uppercase px-0.5 tracking-wide hover:text-gray-100 w-full"
                >
                  <Icons.Arrow
                    className={`${
                      closeCategories.includes(category.id) ? "-rotate-90" : ""
                    }  w-3 h-3 ml-0.5 transition duration-200`}
                  />
                  {category.label}
                </button>
              )}

              <div className="space-y-0.5 mt-[5px]">
                {/* space-y-0.5: apply margin to the children element*/}
                {category.channels
                  .filter((channel) => {
                    const categoryIsOpen = !closeCategories.includes(
                      category.id
                    );
                    return categoryIsOpen || channel.unread;
                  })
                  .map((channel) => (
                    <ChannelLink
                      key={channel.id}
                      channel={channel}
                    ></ChannelLink>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-gray-700 flex-1 flex flex-shrink min-w-0 flex-col">
        <div className="flex items-center h-12 px-2 shadow-sm">
          <div className="flex items-center">
            <Icons.Hashtag className="w-6 h-6 mx-2 font-semibold text-gray-400" />
            <span className="mr-2 text-white font-title whitespace-nowrap">
              {channel.label}
            </span>
          </div>

          {channel.description && (
            <>
              <div className="w-px h-6 mx-2 bg-white/[.06]"></div>
              <div className="mx-2 text-sm font-medium text-gray-200 truncate">
                {channel.description}
              </div>
            </>
          )}

          <div className="flex items-center ml-auto">
            <button className="text-gray-200 hover:text-gray-100">
              <Icons.HashtagWithSpeechBubble className="w-6 h-6 mx-2" />
            </button>
            <button className="text-gray-200 hover:text-gray-100">
              <Icons.Bell className="w-6 h-6 mx-2" />
            </button>
            <button className="text-gray-200 hover:text-gray-100">
              <Icons.Pin className="w-6 h-6 mx-2" />
            </button>
            <button className="text-gray-200 hover:text-gray-100">
              <Icons.People className="w-6 h-6 mx-2" />
            </button>
            <div className="mx-2 relative">
              <input
                type="text"
                placeholder="Search"
                className="w-36 h-6 px-1.5 bg-gray-900 border-none rounded text-sm font-medium placeholder-gray-400"
              />
              <div className="absolute right-0 inset-y-0 flex items-center">
                <Icons.Spyglass className="w-4 h-4 mr-1.5 text-gray-400"></Icons.Spyglass>
              </div>
            </div>
            <button className="text-gray-200 hover:text-gray-100">
              <Icons.Inbox className="w-6 h-6 mx-2" />
            </button>
            <button className="text-gray-200 hover:text-gray-100">
              <Icons.QuestionCircle className="w-6 h-6 mx-2" />
            </button>
          </div>
        </div>
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
  let status = active
    ? "active"
    : channel.unread
    ? "inactiveUnread"
    : "inactiveRead";
  let classes = {
    active: "text-white bg-gray-550/[0.32]",
    inactiveUnread:
      "text-white hover:bg-gray-550/[0.16] active:bg-gray-550/[0.24]",
    inactiveRead:
      "text-gray-300 hover:text-gray-100 hover:bg-gray-550/[0.16] active:bg-gray-550/[0.24]",
  };

  return (
    <Link href={`/servers/1/channels/${channel.id}`}>
      <a
        className={`${classes[status]} flex px-2 mx-2 py-1 items-center rounded group relative`}
      >
        {status === "inactiveUnread" && (
          <div className="absolute w-1 h-2 bg-white left-0 -ml-2 rounded-r-full"></div>
        )}
        <Icon className="w-4 h-4 text-gray-400 mr-1.5" />
        {channel.label}
        <Icons.AddPerson className="w-5 h-5 ml-auto text-gray-200 hover:text-gray-100 opacity-0 group-hover:opacity-100 transition" />
      </a>
    </Link>
  );
}
