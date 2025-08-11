import React from 'react';

export default function Copyright() {
    return (
        <div className="text-center text-sm text-gray-500 mt-4">
        © {new Date().getFullYear()} Mahmoud Samir. All rights reserved.
        </div>
    );
}
