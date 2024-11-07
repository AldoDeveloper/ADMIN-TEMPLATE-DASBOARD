// types.ts

export interface FlowNode {
    name: string;
    children?: FlowNode[];
}

export const data : FlowNode = {
    name: "Start",
    children: [
        {
            name: "Process 1",
            children: [
                {
                    name: "Decision",
                    children: [
                        {
                            name: "Option 1", 
                            children: [
                                {
                                    name: "Option Sub 1"
                                }
                                ,
                                {
                                    name: "Option Sub 2",
                                    children: [
                                        {
                                            name: "Sub Option Sub 1",
                                            children: [
                                                {
                                                    name: "Option Sub 2",
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }, 
                        { name: "Option 2" },
                        { name: "Option 3" },
                        { name: "Option 4" },
                        { name: "Option 5", children: [{name: "Sub Sub"}, {name: "Sub Sub2"}] }
                     ],
                        
                },
            ],
        },
        {
            name: "Process 2"
        }
    ],
};
