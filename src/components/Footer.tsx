// import { useState } from 'react';
// import DialogContactForm from './DialogContactForm';

const Footer = () => {
  // const [open, setOpen] = useState(false);

  return (
    <>
      <div className="relative bottom-0">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f8fafc_1px,transparent_1px),linear-gradient(to_bottom,#f8fafc_1px,transparent_1px)] bg-[size:14px_24px]"></div>

        <div className="mx-auto max-w-[1230px] w-full">
          {/* <div>
            <h3 className="text-xl font-extrabold text-gray-900 tracking-tight">
              Get In Touch Or Report An Issue
            </h3>
            <p className="text-sm mt-2 text-gray-700 tracking-wide leading-5 mb-4">
              Get in touch or report any issues or missing schools that you
              would like to see added or any incorrect or outdated data.
            </p>
            <button
              onClick={() => setOpen(true)}
              className="px-6 py-2 rounded-xl tracking-wide bg-primary-600 text-white shadow-md hover:ring-2 hover:ring-primary-600 hover:ring-offset-2"
            >
              Get In Touch
            </button>
            <DialogContactForm open={open} setOpen={setOpen} />
          </div> */}
          <div className="border-t border-slate-50">
            {/* <div className="flex items-center justify-center pb-4 pt-4">
              <img
                className="mr-2 w-5 h-auto"
                src="./assets/footer-logo.png"
                alt="logo"
              />
              <div className="mt-1">
                <h1 className="text-lg font-extrabold tracking-wide">
                  Quintile Finder SA
                </h1>
              </div>
            </div> */}
            <div className="py-8 text-sm text-center text-gray-900">
              <p>© Copyright 2024. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
