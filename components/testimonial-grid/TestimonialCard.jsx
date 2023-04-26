import React from 'react';

function TestimonialCard(props) {
  const { data, showQuotes } = props;

  return (
    <>
      <div className="relative p-10 rounded-xl bg-purple-700 md:col-span-2">
        {showQuotes && (
          <img
            src="/images/testimonial-grid/bg-pattern-quotation.svg"
            alt=""
            className="absolute top-3 right-10 scale-125 md:top-7 md:right-24 md:scale-150"
          />
        )}

        <div className="flex z-10 space-x-4">
          <img
            src={data.image}
            alt=""
            className="w-10 h-10 rounded-full ring-2 ring-purple-300"
          />
          <div className="text-sm">
            <h4 className="opacity-90">{data.name}</h4>
            <p className="opacity-50">Verified Graduate</p>
          </div>
        </div>

        <p className="relative z-10 mt-6 text-xl">{data.headline}</p>

        <p className="mt-6 opacity-50 line-clamp-5">{data.fullText}</p>
      </div>
    </>
  );
}

export default TestimonialCard;
