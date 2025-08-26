import type { Route } from "./+types/home";
import { WolfeLiftLanding } from "../components/WolfeLiftLanding";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Wolfe Lift Rentals - Professional Scissor Lift Rentals | San Dimas, CA" },
    { name: "description", content: "Professional scissor lift rentals in San Dimas, CA. 19', 26', 32' lifts available. Same-day delivery for contractors and construction companies." },
    { name: "keywords", content: "scissor lift rental, San Dimas, construction equipment, contractors, lift rental" },
    { name: "viewport", content: "width=device-width, initial-scale=1" }
  ];
}

export default function Home() {
  return <WolfeLiftLanding />;
}
