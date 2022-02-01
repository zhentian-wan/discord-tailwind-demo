export function MessageWithUser({ message }) {
  return (
    <div className="flex hover:bg-gray-800 hover:bg-opacity-30 px-4 py-1">
      <img
        className="w-10 h-10 rounded-full mr-4"
        src={message.avatarUrl}
        alt=""
      />
      <div>
        <p className="flex items-baseline">
          <span className="text-green-500 mr-2 text-sm font-medium">
            {message.user}
          </span>
          <span className="text-xs text-gray-500">{message.date}</span>
        </p>
        <p className="text-gray-100 leading-[22px]">{message.text}</p>
      </div>
    </div>
  );
}

export function Message({ message }) {
  return (
    <div className="mt-1 flex hover:bg-gray-800 hover:bg-opacity-30 px-4 py-1 leading-[22px]">
      <p className="text-gray-100 pl-14">{message.text}</p>
    </div>
  );
}
