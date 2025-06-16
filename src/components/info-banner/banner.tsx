import { Info } from "lucide-react";

export default function Banner() {
    return (
        <div className="bg-gradient-to-r from-yellow-50 to-white border-l-4 border-yellow-500 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <Info size={25} color="#FAD5A5" />
                        </div>
                        <div className="ml-3">
                            <p className="text-sm font-medium text-gray-800">
                                🚧 Pivot under progress
                            </p>
                            <p className="text-xs text-gray-600 mt-1">
                                View source code:
                                <a
                                    href="https://github.com/tabishnaqvi1311/crimson-client"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="ml-1 text-primary hover:text-primary underline font-medium"
                                >
                                    Frontend Code
                                </a>
                                {" • "}
                                <a
                                    href="https://github.com/tabishnaqvi1311/crimson-server"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary hover:text-primary underline font-medium"
                                >
                                    Backend Code
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
