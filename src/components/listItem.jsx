import React from "react";

const ListItem = ({ left, right }) => {
  return (
    <div className="flex justify-between h-48">
      {Object.keys(left).length === 0 ? (
        <>
          <div className="w-1/3 "></div>
          {/* CENTER */}
          <div className="w-1/6 flex justify-center">
            {/* LINE */}
            <div className="w-1 h-full bg-gray-600 rounded relative">
              {/* LINE CIRCLE */}
              <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
            </div>
          </div>
          {/* RIGHT */}
          <div className="w-1/3 ">
            <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
              {right.jobTitle}
            </div>
            {/* JOB DESC */}
            <div className="p-3 text-sm italic">{right.jobDesc}</div>
            {/* JOB DATE */}
            <div className="p-3 text-red-400 text-sm font-semibold">
              {right.jobDate}
            </div>
            {/* JOB COMPANY */}
            <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
              {right.jobCompany}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="w-1/3 ">
            {/* JOB TITLE */}
            <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
              {left.jobTitle}
            </div>
            {/* JOB DESC */}
            <div className="p-3 text-sm italic">{left.jobDesc}</div>
            {/* JOB DATE */}
            <div className="p-3 text-red-400 text-sm font-semibold">
              {left.jobDate}
            </div>
            {/* JOB COMPANY */}
            <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
              {left.jobCompany}
            </div>
          </div>
          {/* CENTER */}
          <div className="w-1/6 flex justify-center">
            {/* LINE */}
            <div className="w-1 h-full bg-gray-600 rounded relative">
              {/* LINE CIRCLE */}
              <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
            </div>
          </div>
          {/* RIGHT */}
          <div className="w-1/3 "></div>
        </>
      )}
    </div>
  );
};

export default ListItem;
