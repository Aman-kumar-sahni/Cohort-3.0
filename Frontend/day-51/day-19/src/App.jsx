import { useDispatch,useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "./store/CounterSlice";

function App() {

 const dispatch = useDispatch()
 const {count}= useSelector((state)=>(state.counter))
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0d0d0d] px-5">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-[#181818] p-8 shadow-xl">

        <h1 className="mb-8 text-center text-3xl font-bold text-white">
          Redux Counter
        </h1>

        {/* Counter */}
        <div className="mb-8 text-center">
          <p className="text-sm text-zinc-400">
            Counter Value
          </p>

          <h2 className="mt-2 text-6xl font-bold text-[#EAFF00]">
            {count}
          </h2>
        </div>

        {/* Buttons */}
        <div className="space-y-4">

          <button
            onClick={() => {
              dispatch(increment())
            }}
            className="h-12 w-full rounded-xl bg-[#EAFF00] font-semibold text-black transition hover:opacity-90"
          >
            Increment
          </button>

          <button
            onClick={() => {
            dispatch(decrement())
            }}
            className="h-12 w-full rounded-xl bg-red-500 font-semibold text-white transition hover:bg-red-600"
          >
            Decrement
          </button>

          <button
            onClick={() => {
                            dispatch(incrementByAmount(7))

            }}
            className="h-12 w-full rounded-xl bg-blue-500 font-semibold text-white transition hover:bg-blue-600"
          >
            Increment By Amount (+5)
          </button>

        </div>

      </div>
    </main>
  );
}

export default App;