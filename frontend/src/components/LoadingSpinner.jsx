// export default function LoadingSpinner() {
//   return (
//     <div className="text-center py-10">
//       Loading...
//     </div>
//   );
// }



export default function LoadingSpinner() {
  return (
    <div className="flex justify-center py-16">
      <div className="h-12 w-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
    </div>
  );
}