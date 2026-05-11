import { useNavigate } from "react-router-dom";

export default function TakImpregnering() {
  const navigate = useNavigate();
  return (
    <section className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">Impregnering av tak</h1>
      <p className="mb-6">
        Impregnering beskytter taket mot fukt, mose og skitt. Dette forlenger levetiden og reduserer behovet for hyppig vedlikehold.
      </p>
      <h2 className="text-xl font-semibold mb-2">Hvordan vi jobber</h2>
      <ul className="mb-6 list-disc pl-5">
        <li>Rens av tak først</li>
        <li>Påføring av impregnering</li>
        <li>Etterkontroll</li>
      </ul>
      <h2 className="text-xl font-semibold mb-2">Anbefalt tillegg</h2>
      <ul className="mb-6 list-disc pl-5">
        <li>Full takvask</li>
        <li>Mosefjerning</li>
      </ul>
      <button
        type="button"
        className="btn-primary"
        onClick={() => {
          navigate("/");
          setTimeout(() => {
            document.getElementById("befaring")?.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 150);
        }}
      >
        Bestill befaring
      </button>
    </section>
  );
}
