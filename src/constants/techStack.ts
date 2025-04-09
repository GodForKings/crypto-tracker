import ISkill from '../models/ISkill'
import images from '../assets/images/techStack'

const TECH_STACK: ISkill[] = [
	{
		id: 1,
		name: 'React',
		description: 'something desc',
		image: images.react,
	},
	{
		id: 2,
		name: 'TypeScript',
		description: 'something desc',
		image: images.ts,
	},
	{
		id: 3,
		name: 'Redux Toolkit & RTK Query',
		description: 'something desc',
		image: images.redux,
	},
	{
		id: 4,
		name: 'Axios',
		description: 'something desc',
		image: images.axios,
	},
	{
		id: 5,
		name: 'MobX',
		description: 'something desc',
		image: images.mobx,
	},
	{
		id: 6,
		name: 'Node.js',
		description: 'something desc',
		image: images.nodejs,
	},
	{
		id: 7,
		name: 'Express.js',
		description: 'something desc',
		image: images.express,
	},
	{
		id: 8,
		name: 'MongoDB',
		description: 'something desc',
		image: images.mongo,
	},
	{
		id: 9,
		name: 'postgreSQL',
		description: 'something desc',
		image: images.postgresql,
	},
	{
		id: 10,
		name: 'sequelize',
		description: 'something desc',
		image: images.sequelize,
	},
	{ id: 11, name: 'jwt', description: 'something desc', image: images.jwt },
	{
		id: 12,
		name: 'nodemailer',
		description: 'something desc',
		image: images.nodemailer,
	},
	{ id: 13, name: 'gsap', description: 'something desc', image: images.gsap },
]

export default TECH_STACK
