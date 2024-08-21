import { twMerge } from "tailwind-merge";

export default function App() {
  const isError = true;
  return (
    <>
      <h1 className={`text-green-500 text-5xl ${isError && "text-rose-500"}`}>App Component</h1>
      <h1 className={twMerge("text-green-500", "text-5xl", "text-rose-500")}>App Component</h1>
      <h1 className={twMerge("text-green-500", "text-5xl", isError && "text-rose-500")}>App Component</h1>
      <input></input>
    </>
  )
}
