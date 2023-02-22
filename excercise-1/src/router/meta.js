/*
Notes: 
  - Meta Key should be newRouteName
  - To compose route name should be '<UserType>Route::<my-new-route>'
  - To compose meta:
    meta: {
      title: '<App Name> - <Page Name>',
      metaTags: [
        {
          name: 'description',
          content: 'This is a example meta description.',
        },
        {
          property: 'og:description',
          content: 'This is a example meta description.',
        },
      ],
    },
*/

const appName = 'Filta Assessment';

const meta = {
  home: {
    title: `${appName} - Home`,
    metaTags: [
      {
        name: 'description',
        content: 'This is a example meta description.',
      },
    ],
  },
};

export default meta;
