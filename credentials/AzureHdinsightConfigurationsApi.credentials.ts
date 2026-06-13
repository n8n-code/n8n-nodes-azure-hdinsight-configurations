import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AzureHdinsightConfigurationsApi implements ICredentialType {
        name = 'N8nDevAzureHdinsightConfigurationsApi';

        displayName = 'Azure Hdinsight Configurations API';

        icon: Icon = { light: 'file:../nodes/AzureHdinsightConfigurations/azure-hdinsight-configurations.png', dark: 'file:../nodes/AzureHdinsightConfigurations/azure-hdinsight-configurations.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Azure Hdinsight Configurations API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
