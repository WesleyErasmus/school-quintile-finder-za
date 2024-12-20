const Footer = () => {

  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    // <div className="relative bottom-0 py-8 flex items-center justify-center gap-2 text-sm text-center text-gray-900 border-t border-slate-50 lg:py-4">
    <div className="relative bottom-0 py-8 flex items-center justify-center gap-2 text-sm text-center text-gray-900 lg:py-4">
      <p>© Copyright {currentYear}. All rights reserved.</p>
      <img
        className="w-4 h-4"
        src="./assets/sa-country-flag-image.png"
        alt="sa-country-flag-image"
      />
    </div>
  );
};

export default Footer;
