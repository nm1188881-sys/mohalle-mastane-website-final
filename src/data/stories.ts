import strayDog from "@/assets/stray-dog-courtyard.jpg.asset.json";
import strayCat from "@/assets/stray-cat-corridor.jpg.asset.json";
import strayDogs from "@/assets/stray-dogs-resting.jpg.asset.json";
import boriBed from "@/assets/bori-bed.jpg.asset.json";
import catCourtyard from "@/assets/cat-courtyard.jpg.asset.json";
import heroCourtyard from "@/assets/hero-courtyard.jpg.asset.json";

export type Story = {
  id: string;
  name: string;
  tag: string;
  place: string;
  image: string;
  alt: string;
  body: string;
  status: string;
};

/** Real rescue stories from the circle. */
export const rescueStories: Story[] = [
  {
    id: "bholu",
    name: "Bholu",
    tag: "Road accident",
    place: "Riverside Colony",
    image: strayDog.url,
    alt: "A street dog resting in a sunlit concrete courtyard",
    body: "Hit by a bike at dusk and left on the divider. A neighbour messaged the circle; two rescuers reached in eleven minutes. Six weeks of splint, rest and daily dressing.",
    status: "Healed · back on his street",
  },
  {
    id: "mishti",
    name: "Mishti",
    tag: "Abandoned",
    place: "Old Town",
    image: catCourtyard.url,
    alt: "A street cat sitting on a sunlit concrete step",
    body: "Left behind when a family moved out. She waited at the same gate for nine days until a feeder noticed and the circle stepped in.",
    status: "Fostered · then adopted",
  },
  {
    id: "kaali",
    name: "Kaali & pups",
    tag: "Monsoon rescue",
    place: "North Ward",
    image: strayDogs.url,
    alt: "Two stray dogs sleeping together on a concrete floor",
    body: "A litter born under a parked truck in heavy rain. Volunteers built a dry shelter overnight and fed the mother for eight weeks.",
    status: "All five pups survived",
  },
  {
    id: "raja",
    name: "Raja",
    tag: "Emergency surgery",
    place: "Sector 4",
    image: heroCourtyard.url,
    alt: "A street dog resting in a sunlit concrete courtyard",
    body: "A deep wound gone septic. Funded entirely by small neighbourhood contributions — surgery, antibiotics, and twenty-one days of recovery care.",
    status: "Recovered · released",
  },
  {
    id: "chotu",
    name: "Chotu",
    tag: "Kitten rescue",
    place: "Old Town",
    image: strayCat.url,
    alt: "A street cat paused in a narrow concrete corridor",
    body: "Three weeks old, found alone in a drain. Hand-fed every two hours by a rotating group of four neighbours.",
    status: "Thriving · home found",
  },
];

/** Animals fostered and cared for by local rescuers. */
export const fostered: Story[] = [
  {
    id: "moti",
    name: "Moti",
    tag: "Abandoned dog",
    place: "Fostered by a rescuer friend",
    image: boriBed.url,
    alt: "A dog resting on a sack bed on a concrete floor",
    body: "Left outside a shop with a collar still on. A rescuer took him in for what was meant to be a week — he never left.",
    status: "Adopted by a rescuer friend",
  },
  {
    id: "laila",
    name: "Laila",
    tag: "St. Bernard",
    place: "Urgent adoption appeal",
    image: strayDog.url,
    alt: "A large friendly dog resting on the ground",
    body: "Friendly, house-trained and gentle with children. Abandoned by her family and currently in temporary foster care.",
    status: "Looking for a home",
  },
  {
    id: "gullu",
    name: "Gullu",
    tag: "Long-term care",
    place: "Riverside Colony",
    image: strayDogs.url,
    alt: "Two stray dogs resting together",
    body: "Paralysed hind legs after an accident. Fostered for four months with physiotherapy twice a day by two volunteers.",
    status: "Walking again",
  },
  {
    id: "noor",
    name: "Noor",
    tag: "Post-op foster",
    place: "North Ward",
    image: catCourtyard.url,
    alt: "A cat resting on a concrete step",
    body: "Recovering from surgery in a quiet home instead of a cage — the difference between healing and merely surviving.",
    status: "Recovered · in foster",
  },
];
