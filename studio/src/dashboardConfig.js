export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e49ffa40d32de0369bc0903',
                  title: 'Sanity Studio',
                  name: 'tayg-studio',
                  apiId: '01b9065c-7150-4b13-84e1-8e2c955384cb'
                },
                {
                  buildHookId: '5e49ffa4345eaf35a5cd300c',
                  title: 'Blog Website',
                  name: 'tayg',
                  apiId: 'ff928af4-f1c4-4dcc-8bf5-306fcf170d4a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gilbster/tayg',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://tayg.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
