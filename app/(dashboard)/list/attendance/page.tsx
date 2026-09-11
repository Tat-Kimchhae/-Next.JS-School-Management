// app/list/attendance/page.tsx
"use client";

import Link from "next/link";
import { useState } from "react";

export default function AttendancePage() {
    const [notified, setNotified] = useState(false);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-900 p-4">
            <div className="max-w-md w-full bg-slate-50 p-8 rounded-2xl shadow-xl text-center border border-slate-200">
                <div className="text-5xl mb-4 animate-bounce">🚧</div>

                <h1 className="text-3xl font-extrabold mb-3 tracking-tight text-slate-900">
                    Attendance Page
                </h1>

                <p className="text-slate-600 mb-6 leading-relaxed">
                    This feature is still cooking! We're putting the final touches on making attendance tracking seamless and effortless.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Link
                        href="/dashboard"
                        className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl shadow-md transition-all active:scale-95"
                    >
                        Back to Dashboard
                    </Link>

                    <button
                        onClick={() => setNotified(true)}
                        className="px-6 py-2.5 bg-white hover:bg-slate-100 text-slate-700 font-medium rounded-xl border border-slate-300 shadow-sm transition-all active:scale-95"
                    >
                        {notified ? "✓ Notified!" : "Notify Me"}
                    </button>
                </div>
            </div>
        </div>
    );
}