import React from "react";

export default function DialogActions({children}) {
  return (
    <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
      {children}
    </div>
  );
}