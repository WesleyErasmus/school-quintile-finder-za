interface InformationCard {
  cardImage: string;
  title: string;
  subtitle: string;
}

const InformationCard = (props: InformationCard) => {
  return (
    <article className="flex items-center justify-start w-full shadow-sm py-2 px-3 rounded-xl bg-white border border-1 border-gray-200">
      <div>
        <img
          src={props.cardImage}
          className="w-14 mr-3"
          alt="Card Image"
        />
      </div>
      <div>
        <h4 className="text-sm font-bold">{props.title}</h4>
        <p className="text-xs font-medium text-gray-600">
          {props.subtitle}
        </p>
      </div>
    </article>
  );
}

export default InformationCard