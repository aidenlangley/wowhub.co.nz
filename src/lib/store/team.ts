import type { Readable } from 'svelte/store';
import { readable } from 'svelte/store';
import type { Member } from './team.d';
import { assets } from '$app/paths';

export const team: Readable<Member[]> = readable([
  {
    name: 'Rhonda',
    tags: ['management', 'clinical'],
    about: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  ' +
        'eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad ' +
        'minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ' +
        'ex ea commodo consequat. Duis aute irure dolor in reprehenderit in ' +
        'voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur ' +
        'sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt ' +
        'mollit anim id est laborum.',
    ],
    frontline: true,
    imgSrc: `${assets}/images/people/rhonda.jpg`,
  },
]);