import ISkill from '../models/ISkill'
import images from '../assets/images/techStack'

const TECH_STACK: ISkill[] = [
	{
		id: 1,
		name: 'React',
		description:
			'React is a JavaScript library for building user interfaces. It allows developers to create complex applications by breaking them down into small, reusable components. React makes interfaces more interactive and responsive.',
		image: images.react,
	},
	{
		id: 2,
		name: 'TypeScript',
		description:
			'TypeScript is a superset of JavaScript that adds static typing. This helps developers catch errors at the coding stage rather than at runtime, making the code more reliable and easier to understand.',
		image: images.ts,
	},
	{
		id: 3,
		name: 'Redux Toolkit & RTK Query',
		description:
			'Redux Toolkit is a tool for managing application state in React. It simplifies state management and makes the code more predictable. RTK Query helps easily fetch data from servers and manage it, simplifying API interactions.',
		image: images.redux,
	},
	{
		id: 4,
		name: 'Axios',
		description:
			'Axios is a library for making HTTP requests from the browser or Node.js. It allows you to easily send requests to servers and retrieve data, making API interactions simple and convenient.',
		image: images.axios,
	},
	{
		id: 5,
		name: 'MobX',
		description:
			'MobX is a library for state management in JavaScript applications. It automatically tracks changes in state and updates the interface without extra code, making development more efficient.',
		image: images.mobx,
	},
	{
		id: 6,
		name: 'Node.js',
		description:
			'Node.js is a JavaScript runtime built on V8 engine that allows developers to create server-side applications using JavaScript, simplifying the process of developing full-stack applications.',
		image: images.nodejs,
	},
	{
		id: 7,
		name: 'Express.js',
		description:
			'Express.js is a minimalistic framework for building web applications on Node.js. It provides powerful tools for routing and handling requests, making server creation quick and easy.',
		image: images.express,
	},
	{
		id: 8,
		name: 'MongoDB',
		description:
			'MongoDB is a NoSQL database that stores data in JSON-like documents. This allows for flexible data management and quick application scaling.',
		image: images.mongo,
	},
	{
		id: 9,
		name: 'postgreSQL',
		description:
			'PostgreSQL is an open-source relational database known for its reliability and powerful data processing capabilities. It supports complex queries and transactions, making it ideal for large applications.',
		image: images.postgresql,
	},
	{
		id: 10,
		name: 'sequelize',
		description:
			'Sequelize is an ORM (Object-Relational Mapping) library for Node.js that simplifies working with relational databases (like PostgreSQL). It allows developers to use JavaScript objects instead of SQL queries.',
		image: images.sequelize,
	},
	{
		id: 11,
		name: 'jwt',
		description:
			'JWT is a standard for securely transmitting information between client and server as JSON objects. It is often used for user authentication in web applications.',
		image: images.jwt,
	},
	{
		id: 12,
		name: 'nodemailer',
		description:
			'Nodemailer is a library for sending emails from Node.js applications. It makes it easy to integrate email-sending functionality into your applications.',
		image: images.nodemailer,
	},
	{
		id: 13,
		name: 'gsap',
		description:
			'GSAP is a powerful library for creating animations in web applications. It allows you to create smooth, high-performance animations without needing to learn complex CSS transformations or JavaScript animations.',
		image: images.gsap,
	},
]

const TECH_STACK_RU: ISkill[] = [
	{
		id: 1,
		name: 'React',
		description:
			'React — это библиотека JavaScript для создания пользовательских интерфейсов. Она позволяет разработчикам строить сложные приложения, разбивая их на небольшие, переиспользуемые компоненты. React делает интерфейсы более интерактивными и отзывчивыми.',
		image: images.react,
	},
	{
		id: 2,
		name: 'TypeScript',
		description:
			'TypeScript — это надстройка над JavaScript, которая добавляет статическую типизацию. Это помогает разработчикам находить ошибки на этапе написания кода, а не во время выполнения, что делает код более надежным и легким для понимания.',
		image: images.ts,
	},
	{
		id: 3,
		name: 'Redux Toolkit & RTK Query',
		description:
			'Описание: Redux Toolkit — это инструмент для управления состоянием приложения в React. Он упрощает работу с состоянием и делает код более предсказуемым. RTK Query помогает легко загружать данные с серверов и управлять ими, что упрощает взаимодействие с API.',
		image: images.redux,
	},
	{
		id: 4,
		name: 'Axios',
		description:
			'Описание: Axios — это библиотека для выполнения HTTP-запросов из браузера или Node.js. Она позволяет легко отправлять запросы на сервер и получать данные, что делает взаимодействие с API простым и удобным.',
		image: images.axios,
	},
	{
		id: 5,
		name: 'MobX',
		description:
			'MobX — это библиотека для управления состоянием в приложениях JavaScript. Она позволяет автоматически отслеживать изменения в состоянии и обновлять интерфейс без лишнего кода, что делает разработку более эффективной.',
		image: images.mobx,
	},
	{
		id: 6,
		name: 'Node.js',
		description:
			'Описание: Node.js — это среда выполнения JavaScript на сервере. Она позволяет разработчикам создавать серверные приложения с использованием JavaScript, что упрощает процесс разработки полного стека приложений.',
		image: images.nodejs,
	},
	{
		id: 7,
		name: 'Express.js',
		description:
			'Express.js — это минималистичный фреймворк для создания веб-приложений на Node.js. Он предоставляет мощные инструменты для работы с маршрутизацией и обработкой запросов, что делает создание серверов быстрым и простым.',
		image: images.express,
	},
	{
		id: 8,
		name: 'MongoDB',
		description:
			'это NoSQL база данных, которая хранит данные в формате JSON-подобных документов. Это позволяет гибко управлять данными и быстро масштабировать приложения.',
		image: images.mongo,
	},
	{
		id: 9,
		name: 'postgreSQL',
		description:
			'PostgreSQL — это реляционная база данных с открытым исходным кодом, известная своей надежностью и мощными возможностями обработки данных. Она поддерживает сложные запросы и транзакции, что делает ее идеальной для крупных приложений.',
		image: images.postgresql,
	},
	{
		id: 10,
		name: 'sequelize',
		description:
			'Sequelize — это ORM (Object-Relational Mapping) библиотека для Node.js, которая упрощает работу с реляционными базами данных (такими как PostgreSQL). Она позволяет разработчикам использовать JavaScript-объекты вместо SQL-запросов.',
		image: images.sequelize,
	},
	{
		id: 11,
		name: 'jwt',
		description:
			'JWT — это стандарт для безопасной передачи информации между клиентом и сервером в виде JSON-объектов. Он часто используется для аутентификации пользователей в веб-приложениях.',
		image: images.jwt,
	},
	{
		id: 12,
		name: 'nodemailer',
		description:
			'Nodemailer — это библиотека для отправки электронных писем из Node.js приложений. Она позволяет легко интегрировать функциональность отправки писем в ваши приложения.',
		image: images.nodemailer,
	},
	{
		id: 13,
		name: 'gsap',
		description:
			'GSAP — это мощная библиотека для создания анимаций в веб-приложениях. Она позволяет создавать плавные и высокопроизводительные анимации без необходимости изучать сложные CSS-трансформации или JavaScript-анимации.',
		image: images.gsap,
	},
]

export { TECH_STACK_RU }
export default TECH_STACK
