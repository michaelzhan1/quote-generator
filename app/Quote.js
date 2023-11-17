export default function Quote({quote, author}) {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="text-center bg-slate-700 text-white opacity-80 z-10">
          <h1 className="text-4xl font-bold text-center">{ quote }</h1>
          <h2 className="text-2xl font-bold text-center">-{ author }</h2>
        </div>
      </div>
    </>
  )
}