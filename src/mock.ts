import type { IStoresState } from '@interfaces/store';

export const state1 = {
  root: {
    'a:c|b-b': {
      stores: {
        'pages-details-index-components-user-stores-main-MainStore--a:c|b-b--mainStore': {
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
    'a:c|d-b': {
      stores: {
        'pages-details-index-components-user-stores-main-MainStore--a:c|d-b--mainStore': {
          sR: true,
          user: {
            id: 'user-3',
            name: 'Miss Mildred Wood',
            email: 'mildred.wood@example.com',
            avatar: 'https://randomuser.me/api/portraits/med/women/44.jpg',
          },
          error: null,
          isLoading: false,
        },
      },
      componentName: 'User',
    },
    'a:e-b': {
      stores: {
        'pages-details-index-components-user-stores-main-MainStore--a:e-b--mainStore': {
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
    'a:c|b-a': {
      stores: {
        'pages-details-index-components-user-stores-main-MainStore--a:c|b-a--mainStore': {
          sR: false,
          user: null,
          error: null,
          isLoading: false,
        },
      },
      componentName: 'User',
    },
  },
} as unknown as IStoresState;

export const state2: IStoresState = {
  root: {
    'a:g-b': {
      stores: {
        'pages-nested-suspense-components-user-stores-main-MainStore--a:g-b--mainStore': {
          sR: true,
          user: {
            id: 'user-1',
          },
        },
      },
      componentName: 'User',
      'a:g:b-b': {
        stores: {
          'pages-nested-suspense-components-user-stores-main-MainStore--a:g:b-b--mainStore': {
            sR: true,
            user: {
              name: 'Ms Lya Leclercq',
            },
          },
        },
        componentName: 'User',
        'a:g:b:b-b': {
          stores: {
            'pages-nested-suspense-components-user-stores-main-MainStore--a:g:b:b-b--mainStore': {
              sR: true,
              user: {
                email: 'lya.leclercq@example.com',
              },
            },
          },
          componentName: 'User',
          'a:g:b:b:b-a': {
            stores: {
              'pages-nested-suspense-components-user-stores-main-MainStore--a:g:b:b:b-a--mainStore':
                {
                  sR: false,
                  user: null,
                },
            },
            componentName: 'User',
          },
        },
        'a:g:b:b-a': {
          stores: {
            'pages-nested-suspense-components-user-stores-main-MainStore--a:g:b:b-a--mainStore': {
              sR: false,
              user: null,
            },
          },
          componentName: 'User',
        },
      },
    },
    'a:i-b': {
      stores: {
        'pages-nested-suspense-components-user-stores-main-MainStore--a:i-b--mainStore': {
          sR: true,
          user: {
            id: 'user-2',
          },
        },
      },
      componentName: 'User',
      'a:i:b-b': {
        stores: {
          'pages-nested-suspense-components-user-stores-main-MainStore--a:i:b-b--mainStore': {
            sR: true,
            user: {
              name: 'Mrs Layla Robinson',
            },
          },
        },
        componentName: 'User',
        'a:i:b:b-b': {
          stores: {
            'pages-nested-suspense-components-user-stores-main-MainStore--a:i:b:b-b--mainStore': {
              sR: true,
              user: {
                email: 'layla.robinson@example.com',
              },
            },
          },
          componentName: 'User',
          'a:i:b:b:b-b': {
            stores: {
              'pages-nested-suspense-components-user-stores-main-MainStore--a:i:b:b:b-b--mainStore':
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
} as unknown as IStoresState;
