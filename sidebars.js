/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

const sidebar = {
  docs: [
    'introduction',
    'dashboard',
    'account',
    {
      type: 'category',
      label: 'Payment',
      items: [{type: 'autogenerated', dirName: 'payment'}],
    },

    {
      type: 'category',
      label: 'Monitoring',
      items: [{type: 'autogenerated', dirName: 'monitoring'}],
    },

    {
      type: 'category',
      label: 'Testomato BOT',
      items: [{type: 'autogenerated', dirName: 'bot'}],
    },

    {
      type: 'category',
      label: 'Checks',
      items: [{type: 'autogenerated', dirName: 'checks'}],
    },

    {
      type: 'category',
      label: 'API Reference',
      items: [
        require('./docs/api/sidebar.js')
      ],
    },


    'support',
  ],
};

module.exports = sidebar;