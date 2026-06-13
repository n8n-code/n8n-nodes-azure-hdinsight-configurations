import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureHdinsightConfigurations implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Azure Hdinsight Configurations',
                name: 'N8nDevAzureHdinsightConfigurations',
                icon: { light: 'file:./azure-hdinsight-configurations.png', dark: 'file:./azure-hdinsight-configurations.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'HDInsight Management Client.',
                defaults: { name: 'Azure Hdinsight Configurations' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAzureHdinsightConfigurationsApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
                ],
        };
}
