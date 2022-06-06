import './ZodiacCard.css';

export default function ZodiacCard({ name, dates }) {
  return (
    <div>
      <p>{name}</p>
      <p>{dates}</p>
    </div>
  );
  {/* in this component,  use the `name` and `dates` props to render the name and dates of the sign, as well as load the correct image  from the public directory */}
}
