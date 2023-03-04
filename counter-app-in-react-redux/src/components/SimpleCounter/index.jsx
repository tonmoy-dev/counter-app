import Counter from "./Counter";

const SimpleCounter = () => {
  return (
    <div className="w-screen p-10 bg-gray-100 text-slate-700 mb-3">
      <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
        Simple Counter Application
      </h1>
      {/* {Counter()} */}
      <Counter title="simple counter" />
    </div>
  );
};
export default SimpleCounter;
