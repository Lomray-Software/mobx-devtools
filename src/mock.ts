import type { IStoresState } from '@interfaces/store';

const mock = [
  {
    path: '*',
    value: {
      'a:b-b': {
        stores: {
          'pages-nested-suspense-components-user-stores-main-MainStore--a:b-b--mainStore': {
            sR: true,
            user: {
              id: 'user-1',
            },
          },
        },
        componentName: 'User',
        'a:b:b-b': {
          stores: {
            'pages-nested-suspense-components-user-stores-main-MainStore--a:b:b-b--mainStore': {
              sR: true,
              user: {
                name: 'Ms Lya Leclercq',
              },
            },
          },
          componentName: 'User',
          'a:b:b:b-b': {
            stores: {
              'pages-nested-suspense-components-user-stores-main-MainStore--a:b:b:b-b--mainStore': {
                sR: false,
                user: {
                  email: 'lya.leclercq@example.com',
                },
              },
            },
            componentName: 'User',
          },
        },
      },
      'a:d-b': {
        stores: {
          'pages-nested-suspense-components-user-stores-main-MainStore--a:d-b--mainStore': {
            sR: true,
            user: {
              id: 'user-2',
            },
          },
        },
        componentName: 'User',
        'a:d:b-b': {
          stores: {
            'pages-nested-suspense-components-user-stores-main-MainStore--a:d:b-b--mainStore': {
              sR: true,
              user: {
                name: 'Mrs Layla Robinson',
              },
            },
          },
          componentName: 'User',
          'a:d:b:b-b': {
            stores: {
              'pages-nested-suspense-components-user-stores-main-MainStore--a:d:b:b-b--mainStore': {
                sR: true,
                user: {
                  email: 'layla.robinson@example.com',
                },
              },
            },
            componentName: 'User',
            'a:d:b:b:b-b': {
              stores: {
                'pages-nested-suspense-components-user-stores-main-MainStore--a:d:b:b:b-b--mainStore':
                  {
                    sR: false,
                    user: null,
                  },
              },
              componentName: 'User',
            },
          },
        },
      },
    },
  },
  {
    path: 'linear',
    value: {
      'a:f|b-b': {
        stores: {
          'pages-details-index-components-user-stores-main-MainStore--a:f|b-b--mainStore': {
            sR: true,
            user: {
              id: 'user-1',
              name: 'Ms Lya Leclercq',
              email: 'lya.leclercq@example.com',
              avatar: 'https://randomuser.me/api/portraits/med/women/65.jpg',
            },
            error: null,
            isLoading: false,
          },
        },
        componentName: 'User',
      },
      'a:f|d-b': {
        stores: {
          'pages-details-index-components-user-stores-main-MainStore--a:f|d-b--mainStore': {
            sR: false,
            user: {
              id: 'user-3',
              name: 'Miss Mildred Wood',
              email: 'mildred.wood@example.com',
              avatar: 'https://randomuser.me/api/portraits/med/women/44.jpg',
            },
            error: null,
            isLoading: true,
          },
        },
        componentName: 'User',
      },
      'a:h-b': {
        stores: {
          'pages-details-index-components-user-stores-main-MainStore--a:h-b--mainStore': {
            sR: true,
            user: {
              id: 'user-2',
              name: 'Mrs Layla Robinson',
              email: 'layla.robinson@example.com',
              avatar: 'https://randomuser.me/api/portraits/med/women/70.jpg',
            },
            error: null,
            isLoading: false,
          },
        },
        componentName: 'User',
      },
    },
  },
];

export default mock as unknown as IStoresState[];
