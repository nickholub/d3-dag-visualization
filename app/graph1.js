loadData(
    {
        name: 'graph1',
        nodes: [
            { id: 'node1', value: { label: 'node1' } },
            { id: 'node2', value: { label: 'node2' } },
            { id: 'node3', value: { label: 'node3' } },
            { id: 'node4', value: { label: 'node4' } },
            { id: 'node5', value: { label: 'node5' } }
        ],
        links: [
            { u: 'node1', v: 'node2', value: { label: 'link1' } },
            { u: 'node1', v: 'node3', value: { label: 'link2' } },
            { u: 'node2', v: 'node4', value: { label: 'link3' } },
            { u: 'node3', v: 'node4', value: { label: 'link4' } },
            { u: 'node4', v: 'node5', value: { label: 'link5' } }
        ]
    }
);