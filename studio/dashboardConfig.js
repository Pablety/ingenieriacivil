export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
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
                  buildHookId: '6254f5452f8a176361db39b0',
                  title: 'Sanity Studio',
                  name: 'ingenieriacivil-studio',
                  apiId: '23830819-dbaa-40a1-9de2-b03042f89e56'
                },
                {
                  buildHookId: '6254f545e83af0716ec296b8',
                  title: 'Landing pages Website',
                  name: 'ingenieriacivil',
                  apiId: 'fe2788aa-d374-4303-9651-00b221405a89'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Pablety/ingenieriacivil',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://ingenieriacivil.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
