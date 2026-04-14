"use client";
export default function Loading() {
  return (
    <div className="flex justify-center items-center h-[70vh] w-full">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-solid border-blue-600 border-t-transparent"></div>
    </div>
  );
}