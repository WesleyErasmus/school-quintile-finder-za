interface InformationCard {
  cardImage: string;
  title: string;
  subtitle: string;
}

const InformationCard = (props: InformationCard) => {
  return (
    <article className="flex items-center justify-start py-4 px-3 rounded-xl bg-white border border-1 border-gray-200">
      <div>
        <img
          src={props.cardImage}
          className="w-8 mr-4"
          alt="Card Image"
        />
      </div>
      <div>
        <h4 className="text-xs font-bold">{props.title}</h4>
        <p className="text-[10px] text-gray-800">
          {props.subtitle}
        </p>
      </div>
    </article>
  );
}

export default InformationCard