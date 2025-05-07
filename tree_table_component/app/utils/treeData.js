


export const useTreeData = () =>{
    const treeData = [
        {
            label: 'Frontend',
            children: [
                { label: 'HTML' },
                {
                    label: 'CSS',
                    children: [
                        { label: 'Flexbox' },
                        { label: 'Grid' },
                        {
                            label: 'Preprocessors',
                            children: [
                                { label: 'Sass' },
                                { label: 'Less' }
                            ]
                        }
                    ]
                },
                {
                label: 'JavaScript',
                children: [
                    {
                        label: 'Frameworks',
                        children: [
                            {
                            label: 'Vue',
                            children: [
                                { label: 'Pinia' },
                                { label: 'Vue Router' },
                                    {
                                    label: 'Nuxt',
                                    children: [
                                        { label: 'Server Routes' },
                                        { label: 'API Layer' }
                                    ]
                                }
                            ]
                            },
                            {
                                label: 'React',
                                children: [
                                    { label: 'Redux' },
                                    {
                                            label: 'Next.js',
                                            children: [
                                                { label: 'Pages' },
                                                { label: 'App Router' }
                                            ]
                                    }
                                ]
                            },
                            { label: 'Angular' }
                        ]
                    }
                ]
                }
            ]
        },
        {
            label : "Mobile"
        },
        {
            label: 'Backend',
            children: [
                {
                    label: 'Node.js',
                    children: [
                        { label: 'Express' },
                        { label: 'NestJS' }
                    ]
                },
                {
                label: 'Python',
                    children: [
                        { label: 'Django' },
                        { label: 'Flask' }
                    ]
                },
                {
                    label: 'Databases',
                    children: [
                        {
                            label: 'SQL',
                            children: [
                                { label: 'PostgreSQL' },
                                { label: 'MySQL' }
                            ]
                        },
                        {
                            label: 'NoSQL',
                            children: [
                                { label: 'MongoDB' },
                                { label: 'Redis' }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            label: 'DevOps',
            children: [
                {
                    label: 'CI/CD',
                    children: [
                        { label: 'GitHub Actions' },
                        { label: 'GitLab CI' }
                    ]
                },
                {
                    label: 'Containers',
                    children: [
                        {
                        label: 'Docker',
                            children: [
                                { label: 'Images' },
                                { label: 'Volumes' }
                            ]
                        },
                            {
                            label: 'Kubernetes',
                            children: [
                                { label: 'Pods' },
                                { label: 'Services' }
                            ]
                        }
                    ]
                }
            ]
        },
        
    ]
      
    return {
        treeData
    }
}