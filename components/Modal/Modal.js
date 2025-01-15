export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 w-full h-full top-0 left-0">
      <div className="bg-white rounded-lg shadow-lg mx-4 md:mx-6 sm:max-w-full max-lg:w-1/2 relative" style={{ width: "80%", minWidth: "350px", maxWidth: "800px" }}>


        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-gray-900 hover:text-gray-700 text-2xl font-bold"
          style={{ top: "1rem", right: "2rem", fontSize: "1.5rem", fontWeight: "bold" }}
          onClick={onClose}
        >
          ✕
        </button>
        
        {/* Modal Content */}
        <div
          className="p-6 space-y-4 overflow-y-auto flex flex-col items-center"
          style={{ maxHeight: "80vh", overflowY: "auto", width: "100%", padding: "1.5rem" }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
