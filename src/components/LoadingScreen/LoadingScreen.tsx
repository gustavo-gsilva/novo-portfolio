function LoadingScreen() {
   return (
      <div
         className="
         fixed inset-0 
         flex flex-col 
         overflow-hidden 
         bg-[#0A192F] 
         z-50">
         <div className="flex-1 bg-sky-700 animate-slide" style={{ animationDuration: "2.2s" }} />
         <div className="flex-1 bg-sky-700 animate-slide" style={{ animationDuration: "2.6s" }} />
         <div className="flex-1 bg-sky-700 animate-slide" style={{ animationDuration: "3s" }} />
         <div className="flex-1 bg-sky-700 animate-slide" style={{ animationDuration: "3.4s" }} />
      </div>
   );
};

export default LoadingScreen;