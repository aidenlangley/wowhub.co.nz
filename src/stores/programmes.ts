import logo from '$img/icon/icon-512.png';
import { readable } from 'svelte/store';

export const programmes = readable([
  {
    id: 'angry-birds',
    title: 'Manu Pukuriri (Angry Birds)',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
      ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.`,
    imgUrl: logo,
    infoUrl: '/programmes/angry-birds',
    regUrl: '/reg/angry-birds'
  },
  {
    id: 'aod',
    title: 'Waipiro Tarukino (AOD)',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
      ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.`,
    imgUrl: logo,
    infoUrl: '/programmes/angry-birds',
    regUrl: '/reg/angry-birds'
  }
]);

export interface programme {
  id: string;
  title: string;
  description: string;
  imgUrl: string;
  infoUrl: string;
  regUrl: string;
}
