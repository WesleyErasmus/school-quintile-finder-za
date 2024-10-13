const FilterSectionHeader = () => {
  return (
    <div className="lg:hidden relative px-4 sm:px-8 md:px-4 pt-12 py-8">
      {/* badge */}
      <span className="inline-flex items-center rounded-lg bg-white px-2 py-1 text-xs font-medium text-primary-600 ring-1 ring-inset ring-primary-500/10">
        Filter and Export
      </span>
      <h1 className="mt-8 text-3xl font-extrabold tracking-tight">
        Filter <span className="text-primary-600">SA Schools Database</span>
      </h1>
      <p className="text-sm mt-2 text-gray-700 tracking-wide leading-5">
        Select filters to create the a searchable and downloadable data table of
        according to your specific needs.
      </p>
    </div>
  );
};

export default FilterSectionHeader;
