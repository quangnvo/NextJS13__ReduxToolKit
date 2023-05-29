"use client";

import { decrement, increment, reset } from "@/redux/features/counter/counterSlice";
import { changeMode } from "@/redux/features/mode/modeSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";


export default function Home() {
  const count = useAppSelector((state) => state.counterReducer.value);
  const isDark = useAppSelector(state => state.modeReducer.isDark)
  const dispatch = useAppDispatch();

  return (
    <main style={{ maxWidth: 1200, marginInline: "auto", padding: 20 }}>

      {/* Increase decrease number */}
      <div style={{ marginBottom: "4rem", textAlign: "center" }}>
        <h4 style={{ marginBottom: 16 }}>{count}</h4>
        <button onClick={() => dispatch(increment())}>increment</button>
        <button
          onClick={() => dispatch(decrement())}
          style={{ marginInline: 16 }}
        >
          decrement
        </button>
        <button onClick={() => dispatch(reset())}>reset</button>
      </div>

      {/* Click button, change div */}
      <div className="w-full grid grid-cols-1 gap-3 md:grid-cols-2 py-20 rounded-lg bg-slate-50">

        <div className="flex justify-center items-center">
          {isDark
            ? <div className="px-3 py-2 border border-black shadow-lg rounded-md bg-slate-900 text-white">dark logo</div>
            : <div className="px-3 py-2 border border-black shadow-lg rounded-md bg-slate-200">light logo</div>
          }
        </div>

        <div className="flex justify-center items-center">
          <button
            className="px-3 py-2 border border-black shadow-lg rounded-md"
            onClick={() => { dispatch(changeMode()) }}
          >
            Change logo
          </button>
        </div>
      </div>
    </main>
  );
}
