export interface RoadMapItemType {
	slug: string;
	name: string;
	description: string;
	tags: string[];
	releaseVersion?: string;
	status: 'Planned' | 'In Progress' | 'Done';
}

export const roadMapItems: RoadMapItemType[] = [
	{
		slug: 'btn',
		name: 'Button Component',
		description: 'A button with outline and text button styles',
		tags: ['Component'],
		status: 'Done',
		releaseVersion: '1.0.0-alpha.2'
	},
	{
		slug: 'engine-v1',
		name: 'Theming Engine',
		description: 'Build the theming engine using css variables and tailwind variables',
		tags: ['Engine'],
		status: 'Done',
		releaseVersion: '1.0.0-alpha.2'
	},
	{
		slug: 'engine-generator',
		name: 'Theming Engine Generator',
		description: 'Build a page to preview the theme and customize it',
		tags: ['Engine'],
		status: 'Done',
		releaseVersion: '1.0.0-alpha.2'
	},
	{
		slug: 'engine-generator-v2',
		name: 'V2 Theme Generator',
		description: 'Upgraded the theme generator page to be prettier and make use of css variables',
		tags: ['Engine'],
		status: 'Planned'
	},
	{
		slug: 'card',
		name: 'Card Component',
		description: 'A card component with title, body and actions',
		tags: ['Component'],
		status: 'Planned'
	},
	{
		slug: 'badge',
		name: 'Chip Component',
		description: 'A basic chip component',
		tags: ['Component'],
		status: 'Planned'
	},
	{
		slug: 'tabs',
		name: 'Tab Component',
		description: '',
		tags: ['Component'],
		status: 'In Progress',
		releaseVersion: '1.0.0-alpha.3'
	},
	{
		slug: 'button-v2',
		name: 'V2 Button Component',
		description: 'Upgrading the button component to support the disabled styles and button sizes',
		tags: ['Component'],
		status: 'Planned'
	},
	{
		slug: 'documentation-v1',
		name: 'V1 Documentation',
		description:
			'Creating the initial documentation for installation and set up. Along with the tables that display all the options',
		tags: [''],
		status: 'In Progress',
		releaseVersion: '1.0.0-alpha.3'
	},
	{
		slug: 'documentation-v2',
		name: 'V2 Documentation',
		description: 'Updating the documentation with chips ',
		tags: [''],
		status: 'Planned'
	},
	{
		slug: 'modals',
		name: 'Modals',
		description: 'Updating the documentation with chips ',
		tags: [''],
		status: 'Planned'
	},
	{
		slug: 'typography',
		name: 'Typography',
		description: 'Updating the documentation with chips ',
		tags: [''],
		status: 'Planned'
	},
	{
		slug: 'bread-crumbs',
		name: 'Breadcrumbs',
		description: 'Adding new component to display bread crumbs',
		tags: [''],
		status: 'Planned'
	}
];
