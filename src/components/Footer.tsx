import { useState } from 'react';
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosurePanel,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { EnvelopeIcon } from '@heroicons/react/24/solid';

const Footer = () => {
  const [dialogOpen, setDialogOpen] = useState(false);


  return (
    <>
      <Dialog
        open={dialogOpen}
        onClose={setDialogOpen}
        className="relative z-40 lg:hidden"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
        />
        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            transition
            className="relative ml-auto flex h-full w-full transform flex-col overflow-y-auto bg-white py-4 pb-0 shadow-xl transition duration-300 ease-in-out data-[closed]:translate-x-full"
          >
            <div className="flex items-center justify-between px-4">
              <h2 className="text-lg font-bold text-gray-900">Get In Touch</h2>
              <button
                type="button"
                onClick={() => setDialogOpen(false)}
                className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-600"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>

            {/* Filters */}
            <div className="flex flex-col h-full justify-between">
              <form className="mt-4 px-4">
                <Disclosure
                  as="div"
                  className="border-t border-gray-200 px-4 py-6"
                >
                  <div>
                    <input
                      className="mt-4 w-full rounded-xl text-sm"
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter your email address"
                    />
                    <textarea
                      className="w-full mt-2 rounded-xl text-sm"
                      name="message"
                      id="message"
                      placeholder="Write a message or the description of the issue or school missing."
                    ></textarea>

                    <div className="flex justify-end">
                      <button className="flex w-full items-center justify-center gap-x-4 bg-primary-600 relative mt-2 px-6 py-2 rounded-xl text-white hover:bg-primary-800 tracking-wide active:ring-1 active:ring-offset-1 active:ring-primary-600">
                        <EnvelopeIcon className="w-5 h-5" />
                        Message
                      </button>
                    </div>
                  </div>
                  <DisclosurePanel className="pt-6">
                    <div className="space-y-4 sm:space-y-6"></div>
                  </DisclosurePanel>
                </Disclosure>
              </form>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
      <div className="relative bottom-0 px-4">
        <div className="mx-auto max-w-[1230px] w-full">
          <div>
            <h3 className="text-xl font-extrabold text-gray-900 tracking-tight">
              Get In Touch Or Report An Issue
            </h3>
            <p className="text-sm mt-2 text-gray-700 tracking-wide leading-5 mb-4">
              Get in touch or report any issues or missing schools that you
              would like to see added or any incorrect or outdated data.
            </p>
            <button
              onClick={() => setDialogOpen(true)}
              className="px-6 py-2 rounded-xl tracking-wide bg-primary-600 text-white shadow-md hover:ring-2 hover:ring-primary-600 hover:ring-offset-2"
            >
              Get In Touch
            </button>
          </div>
          <div className="flex items-center py-8">
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
          </div>
          <div className="border-t border-gray-300">
            <div className="py-8 text-sm text-center text-gray-900 ">
              <p>© Copyright 2024. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
