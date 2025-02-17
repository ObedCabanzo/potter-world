export default function LoadingPage({text}:{text:string}) {
    return (
      <div className="flex flex-col gap-4 py-8 h-full w-full items-center justify-center text-center ">
        <h1 className="text-xl font-bold  ">{text}</h1>
      </div>
    );
  }
  