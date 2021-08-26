export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '61274529045e5599901b1ffa',
                  title: 'Sanity Studio',
                  name: '2-sanity-gatsby-portfolio-studio',
                  apiId: '88d0d152-136d-4f1f-a5f7-b51e23ae23ee'
                },
                {
                  buildHookId: '61274529350af19b0e37066f',
                  title: 'Portfolio Website',
                  name: '2-sanity-gatsby-portfolio',
                  apiId: '41a4272c-7b9e-4a3f-9115-6a3c109828c9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/alicianordstromm/2sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://2-sanity-gatsby-portfolio.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
