type CardComponentProps = {
  title: string;
  subtitle: string;
  description: string;
  imgSrc?: string;
};

function CardComponent({
  title,
  subtitle,
  description,
  imgSrc,
}: CardComponentProps) {
  return (
    <article className="card">
      <div className="card-header">
        {imgSrc && <img src={imgSrc} alt="" className="card-img" />}
        <span>
          <small>{title}</small>
          <h3>{subtitle}</h3>
        </span>
      </div>
      <div className="card-body">
        <span>{description}</span>
      </div>
    </article>
  );
}

export default CardComponent;
