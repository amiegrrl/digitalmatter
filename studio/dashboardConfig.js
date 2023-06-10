export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5df2364c67ef71f284299dbe',
                  title: 'Sanity Studio',
                  name: 'digitalmatter-studio',
                  apiId: '1df2ad70-0a19-40ca-8f80-3aebb7821930'
                },
                {
                  buildHookId: '5df2364c8d8476bf17b6308a',
                  title: 'Landing pages Website',
                  name: 'digitalmatter',
                  apiId: '73c5d662-4604-4c75-a414-98f048e8eb8e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rinaldylaguerre/digitalmatter',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://digitalmatter.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
