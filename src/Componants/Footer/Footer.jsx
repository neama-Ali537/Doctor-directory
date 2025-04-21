import React from 'react'

export default function Footer() {
  return <>
  <footer>
    <div className=" mx-auto text-center py-4 bg-slate-200">
      <p className="text-gray-600 text-sm">
        &copy; {new Date().getFullYear()} Doctor directory. All rights reserved.
      </p>
      <p className="text-gray-600 text-sm">
        Designed by Neama Ali
      </p>
    </div>
  </footer>
  </>
}
