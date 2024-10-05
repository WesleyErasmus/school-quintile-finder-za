import { EnvelopeIcon } from "@heroicons/react/24/solid";

const Footer = () => {
  return (
    // <div className="relative bottom-0 bg-gradient-to-t from-slate-50 from-20% via-slate-200 via-50% to-slate-50 to-90% px-2 pb-6 pt-10 border-t border-gray-200">
    <div className="relative bottom-0  px-2 pb-6 pt-10">
      <div>
        <h3 className="text-2xl font-extrabold">Contact or Report an Issue</h3>
        <p className="text-sm mt-2 text-gray-700 tracking-wide leading-5 mb-4">
          Report an issue or a missing school. Get in touch.
        </p>
        <input
          className="mt-4 w-full rounded-lg text-sm"
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email address"
        />
        <textarea
          className="w-full mt-2 rounded-lg text-sm"
          name="message"
          id="message"
          placeholder="Write a message or the description of the issue or school missing."
        ></textarea>

        <div className="flex justify-end">
          <button className="flex w-full items-center justify-center gap-x-4 bg-slate-900 relative mt-2 px-6 py-2 rounded-lg  text-white hover:bg-gray-800 tracking-wide active:ring-1 active:ring-offset-1 active:ring-gray-900">
            <EnvelopeIcon className="w-5 h-5" />
            Message
          </button>
        </div>
      </div>
      <div>
        <div className="my-10 flex items-start">
          <img
            className="mr-3 w-10 h-auto"
            src="./assets/footer-logo.png"
            alt="logo"
          />
          <div>
            <h1 className="text-2xl font-extrabold">Quintile Finder SA</h1>
            <p className="text-xs font-medium text-gray-700">
              Your go-to tool for finding South African School Quintile data.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-1 text-sm text-center text-gray-900 font-medium">
          <p>©</p> <p> Copyright 2024. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
