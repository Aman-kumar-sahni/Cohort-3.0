
const NotesCard = ({ note ,deleteNotes,updateNotes}) => {
  return (
    <div className="w-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-900 p-5 shadow-lg">

      {/* Header */}
      <div className="mb-4 flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h2 className="truncate text-xl font-bold text-white">
            {note.title}
          </h2>

          <p className="mt-1 text-sm text-zinc-500">
            {new Date(note.createdAt).toLocaleDateString()}
          </p>
        </div>

        {/* Actions */}
        <div className="flex shrink-0 items-center gap-2">
          <button
          onClick={()=>{
            updateNotes(note._id)
          }}
            type="button"
            className="rounded-lg bg-yellow-400/10 px-3 py-2 text-sm font-medium text-yellow-400 transition hover:bg-yellow-400 hover:text-black"
          >
            Edit
          </button>

          <button
          onClick={()=>{
            deleteNotes(note._id)
          }}
            type="button"
            className="rounded-lg bg-red-400/10 px-3 py-2 text-sm font-medium text-red-400 transition hover:bg-red-400 hover:bg-red-500 hover:text-white"
          >
            Delete
          </button>
        </div>
      </div>

      {/* Description */}
      <p className="mb-5 line-clamp-3 text-sm leading-6 text-zinc-400">
        {note.description}
      </p>

      {/* Info */}
      <div className="flex flex-wrap items-center gap-3">

        {/* Category */}
        <span className="rounded-full bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-300">
          {note.category}
        </span>

        {/* Priority */}
        <span className="rounded-full bg-yellow-400/10 px-3 py-1 text-xs font-medium capitalize text-yellow-400">
          {note.priority}
        </span>

        {/* Status */}
        <span
          className={`rounded-full px-3 py-1 text-xs font-medium ${
            note.isCompleted
              ? "bg-green-400/10 text-green-400"
              : "bg-zinc-800 text-zinc-400"
          }`}
        >
          {note.isCompleted ? "Completed" : "Pending"}
        </span>

        {/* Tags */}
        {note.tags?.map((tag, index) => (
          <span
            key={index}
            className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-400"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Updated */}
      <div className="mt-5 border-t border-zinc-800 pt-4">
        <p className="text-xs text-zinc-500">
          Last updated{" "}
          {new Date(note.updatedAt).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default NotesCard;

