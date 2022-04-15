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
                  buildHookId: '6259d0cb69c880008b973010',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-d12zifci',
                  apiId: 'c6d8e1d0-d3a8-4160-a0f1-2066f4384a9c'
                },
                {
                  buildHookId: '6259d0ccf7a4720066439c93',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-jkwnxn9r',
                  apiId: '81b45e4a-b667-4705-9214-5ed2c61090bf'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bobbyjenrow/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-jkwnxn9r.netlify.app',
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
