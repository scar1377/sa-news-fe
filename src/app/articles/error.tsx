"use client";

type ErrorProps = {
  error: Error;
  reset: () => void;
};

const Error = ({ error, reset }: ErrorProps) => {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-6">
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-orange-900">
          Something went wrong
        </h2>
        <p className="text-base text-neutral-600">{error.message}</p>
        <button
          onClick={reset}
          className="self-start rounded-md bg-orange-600 px-4 py-2 text-white transition duration-200 hover:bg-orange-700 active:translate-x-0.5 active:translate-y-0.5"
        >
          Try again
        </button>
      </div>
    </div>
  );
};

export default Error;
