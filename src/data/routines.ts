import travelPrep from '../assets/routines/travel-prep.jpg';
import workoutBag from '../assets/routines/workout-bag-essentials.jpg';
import morningWork from '../assets/routines/morning-work-setup.jpg';
import petCare from '../assets/routines/pet-care-routine.jpg';

export interface Routine {
  id: string;
  name: string;
  image: string;
  steps: string[];
}

// Mirrors the premade routines that ship with the app (rou/src/data/premadeRoutines.ts).
export const ROUTINES: Routine[] = [
  {
    id: 'travel',
    name: 'Travel Prep',
    image: travelPrep,
    steps: [
      'Pack your essentials (clothes, toiletries, chargers)',
      'Check your tickets, ID, and wallet',
      'Confirm travel arrangements',
      'Lock windows and doors before leaving',
    ],
  },
  {
    id: 'gym',
    name: 'Workout Bag Essentials',
    image: workoutBag,
    steps: [
      'Pack workout clothes and shoes',
      'Fill your water bottle',
      'Bring a towel and toiletries',
      'Add any workout gear',
    ],
  },
  {
    id: 'work',
    name: 'Morning Work Setup',
    image: morningWork,
    steps: [
      'Turn on your computer and open your tools',
      'Prepare your water bottle or coffee',
      'Review today’s schedule',
      'Clear your desk of distractions',
    ],
  },
  {
    id: 'pet',
    name: 'Pet Care Routine',
    image: petCare,
    steps: [
      'Refill food and water bowls',
      'Clean the litter box or designated area',
      'Take your pet for a walk',
      'Check for any health or grooming needs',
    ],
  },
];
