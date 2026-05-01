export default function Loader() {
  return (
    <div className="flex justify-center items-center min-h-[400px]">
      <div className="flex flex-col items-center gap-4">
        <div className="loading loading-spinner loading-lg text-primary"></div>
        <p className="text-gray-500">Loading amazing content...</p>
      </div>
    </div>
  )
}
