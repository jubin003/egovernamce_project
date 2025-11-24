import { FiCheckCircle } from "react-icons/fi";

export default function SuccessfulLogin() {
    return (
        <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-sm text-center animate-fadeIn">

            <div className="flex justify-center mb-4">
                <FiCheckCircle className="text-green-600 w-16 h-16 animate-scaleIn" />
            </div>

            <h2 className="text-2xl font-bold text-gray-800">Login Successful</h2>

            <p className="text-gray-600 mt-2 mb-4">
                Redirecting to your dashboard...
            </p>

            <div className="flex items-center justify-center mb-4 ">
                <div className="w-8 h-8 border-4 border-[#14dc67] border-t-transparent rounded-full animate-spin"></div>
            </div>

        </div>
    );
}
