if (typeof require.ensure !== 'function') { require.ensure = (d, c) => { c(require); }; }

if (typeof require.include !== 'function') { require.include = () => {}; }


export default function getRoutes(state) {
  return [
    {
      path: '/',
      getComponent: (location, cb) => {
        require.ensure([], (require) => {
          cb(null, require('views/components/home').default);
        });
      },
    },
    {
      path: '/getAllUsers',
      getComponent: (location, cb) => {
        require.ensure([], (require) => {
          cb(null, require('views/components/home/users.js').default);
        });
      },
    },
    {
      path: '/user/:id',
      getComponent: (location, cb) => {
        require.ensure([], (require) => {
          cb(null, require('views/components/home/user.js').default);
        });
      },
    },
    {
      path: '/addUser',
      getComponent: (location, cb) => {
        require.ensure([], (require) => {
          cb(null, require('views/components/home/addUser.js').default);
        });
      },
    },
  ];
}
